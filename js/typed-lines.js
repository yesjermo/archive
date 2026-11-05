// Subtitle lines type themselves out once, the first time they scroll into
// view; the mojibake line on the home page flickers now and then. The full
// text stays available to screen readers throughout. Still under reduced motion.
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lines = document.querySelectorAll(".subtitle-line, .scrap-hint");
  const typeLine = (el) => {
    // Hold off while the front-page intro is still covering the page.
    if (document.documentElement.classList.contains("bbs-intro-on")) {
      setTimeout(() => typeLine(el), 300);
      return;
    }
    const text = el.textContent.trim();
    if (!text) return;
    // Keep the real words for assistive tech; type into a decorative copy.
    const real = document.createElement("span");
    real.className = "visually-hidden";
    real.textContent = text;
    const shown = document.createElement("span");
    shown.setAttribute("aria-hidden", "true");
    const caret = document.createElement("span");
    caret.className = "typed-caret";
    caret.setAttribute("aria-hidden", "true");
    el.replaceChildren(real, shown, caret);
    let i = 0;
    const tick = () => {
      shown.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, 55);
      else setTimeout(() => caret.remove(), 2400);
    };
    setTimeout(tick, 250);
  };
  if ("IntersectionObserver" in window) {
    const seen = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          seen.unobserve(entry.target);
          typeLine(entry.target);
        }),
      { threshold: 0.6 }
    );
    lines.forEach((el) => seen.observe(el));
  }

  // The home title writes itself out, line by line, after the intro.
  const title = document.querySelector(".collage-title h1");
  if (title) {
    const rows = title.innerHTML
      .split(/<br\s*\/?>/i)
      .map((r) => r.replace(/<[^>]+>/g, "").trim());
    const real = document.createElement("span");
    real.className = "visually-hidden";
    real.textContent = rows.join(" ");
    const shown = document.createElement("span");
    shown.setAttribute("aria-hidden", "true");
    const caret = document.createElement("span");
    caret.className = "typed-caret";
    caret.setAttribute("aria-hidden", "true");
    title.replaceChildren(real, shown, caret);
    const full = rows.join("\n");
    shown.style.whiteSpace = "pre-line";
    let i = 0;
    const write = () => {
      if (document.documentElement.classList.contains("bbs-intro-on")) {
        setTimeout(write, 300);
        return;
      }
      shown.textContent = full.slice(0, ++i);
      if (i < full.length) setTimeout(write, full[i - 1] === "\n" ? 260 : 95);
      else setTimeout(() => caret.remove(), 2600);
    };
    setTimeout(write, 400);
  }

  // Now and then the garbled line scrambles, then settles back.
  const garbled = document.querySelector(".mojibake");
  if (garbled) {
    const original = garbled.textContent;
    const pool = "‚¨‹C‚É“ü‚è‚ÌƒA[ƒJƒCƒu…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯";
    const flicker = () => {
      let n = 0;
      const step = () => {
        garbled.textContent = [...original]
          .map((c) =>
            Math.random() < 0.35 ? pool[Math.floor(Math.random() * pool.length)] : c
          )
          .join("");
        if (++n < 6) setTimeout(step, 60);
        else garbled.textContent = original;
      };
      step();
      setTimeout(flicker, 4500 + Math.random() * 4000);
    };
    setTimeout(flicker, 3000);
  }
})();
