// Portrait rendering, click sounds, and the custom pointer.
(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ring = document.createElement("div");
  ring.className = "motion-cursor";
  ring.setAttribute("aria-hidden", "true");
  document.body.append(ring);
  let x = -100,
    y = -100,
    rx = x,
    ry = y,
    active = false;
  addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    x = e.clientX;
    y = e.clientY;
    active = true;
    document.body.classList.add("cursor-active");
    ring.classList.toggle("over", !!e.target.closest("a,button,input,select,textarea"));
  });
  document.documentElement.addEventListener("pointerleave", () => {
    active = false;
    document.body.classList.remove("cursor-active");
  });
  function tick() {
    if (active) {
      rx += (x - rx) * (reduced ? 1 : 0.25);
      ry += (y - ry) * (reduced ? 1 : 0.25);
      ring.style.transform = `translate(${rx - ring.offsetWidth / 2}px,${ry - ring.offsetHeight / 2}px)`;
    }
    requestAnimationFrame(tick);
  }
  tick();
  addEventListener("pointerdown", () => ring.classList.add("down"));
  addEventListener("pointerup", () => ring.classList.remove("down"));
  let muted = false;
  try {
    muted = localStorage.getItem("archive-muted") === "true";
  } catch {}
  let audio;
  const sound = document.createElement("button");
  sound.className = "sound-toggle";
  sound.type = "button";
  document.body.append(sound);
  // One stable name ("Click sounds"); on/off lives in aria-pressed, so the
  // visible text and what a screen reader hears never contradict each other.
  function label() {
    const state = document.createElement("span");
    state.className = "sound-state";
    state.setAttribute("aria-hidden", "true");
    state.textContent = muted ? " · off" : " · on";
    sound.replaceChildren("Click sounds", state);
    sound.setAttribute("aria-pressed", String(!muted));
    sound.removeAttribute("aria-label");
  }
  label();
  sound.addEventListener("click", () => {
    muted = !muted;
    try {
      localStorage.setItem("archive-muted", String(muted));
    } catch {}
    label();
  });
  document.addEventListener("click", (e) => {
    if (muted || !e.target.closest("button,a,input,select")) return;
    try {
      audio ||= new (window.AudioContext || window.webkitAudioContext)();
      audio.resume();
      const o = audio.createOscillator(),
        g = audio.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(950, audio.currentTime);
      o.frequency.exponentialRampToValueAtTime(240, audio.currentTime + 0.035);
      g.gain.setValueAtTime(0.035, audio.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.045);
      o.connect(g);
      g.connect(audio.destination);
      o.start();
      o.stop(audio.currentTime + 0.05);
    } catch {}
  });
  const canvas = document.getElementById("ascii-portrait");
  if (!canvas) return;
  const ctx = canvas.getContext("2d"),
    img = new Image();
  let mode = "ascii";
  function draw() {
    if (!img.complete || !img.naturalWidth) return;
    const cols = 128,
      rows = 170,
      source = document.createElement("canvas");
    source.width = cols;
    source.height = rows;
    const sc = source.getContext("2d");
    sc.drawImage(img, 0, 0, cols, rows);
    const pixels = sc.getImageData(0, 0, cols, rows).data;
    // Follow the theme: on the night theme, light characters on a dark screen
    // (bright parts of the photo are "lit"); otherwise ink on white paper.
    const theme = getComputedStyle(document.documentElement),
      screenBg = theme.getPropertyValue("--night").trim(),
      screenInk = theme.getPropertyValue("--screen-ink").trim(),
      lit = Boolean(screenBg && screenInk);
    ctx.fillStyle = lit ? screenBg : "#fff";
    ctx.fillRect(0, 0, 640, 850);
    ctx.fillStyle = lit ? screenInk : "#111";
    ctx.font = "6px monospace";
    ctx.textBaseline = "top";
    const chars = " .:+*#@";
    const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const lum = Math.min(
          1,
          Math.pow(
            (pixels[i] * 0.2126 + pixels[i + 1] * 0.7152 + pixels[i + 2] * 0.0722) / 255,
            0.55
          )
        );
        const ink = lit ? lum : 1 - lum;
        if (mode === "ascii")
          ctx.fillText(chars[Math.min(6, Math.floor(ink * 7))], x * 5, y * 5);
        else if (1 - ink < (bayer[(y % 4) * 4 + (x % 4)] + 0.5) / 16)
          ctx.fillRect(x * 5, y * 5, 5, 5);
      }
  }
  img.onload = draw;
  img.src = "assets/collection/about-portrait.jpg";
  document.querySelectorAll("[data-portrait]").forEach((b) =>
    b.addEventListener("click", () => {
      mode = b.dataset.portrait;
      document
        .querySelectorAll("[data-portrait]")
        .forEach((v) => v.setAttribute("aria-pressed", String(v === b)));
      canvas.hidden = mode === "original";
      document.getElementById("portrait-original").hidden = mode !== "original";
      if (mode !== "original") draw();
    })
  );
})();
