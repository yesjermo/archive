// Front-page intro: a black screen where garbled text decodes into the site's
// name, then lines type out like film subtitles. Plays once per visit; any
// click, tap or key skips it; reduced motion shows the lines without typing.
(() => {
  const intro = document.getElementById("bbs-intro");
  if (!intro) return;
  let seen = false;
  try {
    seen = sessionStorage.getItem("bbs-intro-seen") === "1";
  } catch {}
  if (seen) {
    document.documentElement.classList.remove("bbs-intro-on");
    intro.remove();
    return;
  }

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lines = [...intro.querySelectorAll("[data-type]")];
  const garble = "‚¨‹C‚É“ü‚è‚ÌƒA[ƒJƒCƒu…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯";
  const timers = new Set();
  let finished = false;

  const wait = (ms) =>
    new Promise((resolve) => {
      const t = setTimeout(() => {
        timers.delete(t);
        resolve();
      }, ms);
      timers.add(t);
    });

  function finish() {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    try {
      sessionStorage.setItem("bbs-intro-seen", "1");
    } catch {}
    intro.classList.add("is-leaving");
    setTimeout(
      () => {
        document.documentElement.classList.remove("bbs-intro-on");
        intro.remove();
      },
      reduced ? 0 : 700
    );
    removeEventListener("keydown", finish);
  }

  // Scramble that settles into the target, a few characters at a time.
  async function decode(el, target) {
    const steps = 18;
    for (let s = 0; s <= steps && !finished; s++) {
      const fixed = Math.floor((target.length * s) / steps);
      el.textContent =
        target.slice(0, fixed) +
        [...target.slice(fixed)]
          .map((c) =>
            c === " " ? " " : garble[Math.floor(Math.random() * garble.length)]
          )
          .join("");
      await wait(55);
    }
    el.textContent = target;
  }

  async function type(el, target, speed) {
    el.classList.add("is-typing");
    for (let i = 1; i <= target.length && !finished; i++) {
      el.textContent = target.slice(0, i);
      await wait(speed);
    }
    el.textContent = target;
    el.classList.remove("is-typing");
  }

  async function play() {
    for (const el of lines) {
      const target = el.dataset.type;
      el.hidden = false;
      if (reduced) {
        el.textContent = target;
        continue;
      }
      if (el.dataset.mode === "decode") {
        el.textContent = garble.slice(0, target.length);
        await wait(650);
        await decode(el, target);
      } else {
        await type(el, target, el.dataset.mode === "subtitle" ? 38 : 70);
      }
      await wait(520);
    }
    await wait(reduced ? 1400 : 1300);
    finish();
  }

  intro.addEventListener("click", finish);
  addEventListener("keydown", finish);
  play();
})();
