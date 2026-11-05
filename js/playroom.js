// Crumpled-paper note: drag or slide to crumple, then smooth it out again.
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s);
  function resize(canvas) {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return null;
    const d = Math.min(window.devicePixelRatio || 1, 2),
      w = r.width,
      h = r.height;
    canvas.width = Math.round(w * d);
    canvas.height = Math.round(h * d);
    return { w, h, d };
  }
  // Triangulated paper surface. Every triangle keeps the corresponding part of the note.
  const fold = $("#fold"),
    fc = fold.getContext("2d"),
    paper = document.createElement("canvas");
  paper.width = 480;
  paper.height = 600;
  const pc = paper.getContext("2d");
  let amount = 0,
    foldDrag = null;
  function texture() {
    pc.fillStyle = "#eee7d8";
    pc.fillRect(0, 0, 480, 600);
    pc.strokeStyle = "#b1a798";
    pc.strokeRect(23, 23, 434, 554);
    pc.fillStyle = "#544e45";
    pc.font = '13px "Archive Type", "Courier New", monospace';
    pc.fillText("A NOTE TO KEEP", 42, 65);
    pc.font = "48px Archive Hand, cursive";
    const words = $("#note-text").value.trim().split(/\s+/);
    let line = "",
      y = 185;
    words.forEach((word) => {
      if (pc.measureText(line + word).width > 390 && line) {
        pc.fillText(line, 42, y);
        y += 65;
        line = "";
      }
      line += word + " ";
    });
    pc.fillText(line, 42, y);
    pc.font = '14px "Archive Type", "Courier New", monospace';
    pc.fillText("fold / unfold / remember", 42, 520);
    pc.fillText("my favourite archives", 42, 545);
    for (let i = 0; i < 2300; i++) {
      pc.fillStyle = i % 2 ? "#ffffff12" : "#00000012";
      pc.fillRect((i * 73.19) % 480, (i * 31.57) % 600, 1, 1);
    }
  }
  function drawTriangle(a, b, c, sa, sb, sc) {
    const den = sa.x * (sb.y - sc.y) + sb.x * (sc.y - sa.y) + sc.x * (sa.y - sb.y);
    if (!den) return;
    const m1 = (a.x * (sb.y - sc.y) + b.x * (sc.y - sa.y) + c.x * (sa.y - sb.y)) / den,
      m3 = (a.x * (sc.x - sb.x) + b.x * (sa.x - sc.x) + c.x * (sb.x - sa.x)) / den,
      m5 =
        (a.x * (sb.x * sc.y - sc.x * sb.y) +
          b.x * (sc.x * sa.y - sa.x * sc.y) +
          c.x * (sa.x * sb.y - sb.x * sa.y)) /
        den;
    const m2 = (a.y * (sb.y - sc.y) + b.y * (sc.y - sa.y) + c.y * (sa.y - sb.y)) / den,
      m4 = (a.y * (sc.x - sb.x) + b.y * (sa.x - sc.x) + c.y * (sb.x - sa.x)) / den,
      m6 =
        (a.y * (sb.x * sc.y - sc.x * sb.y) +
          b.y * (sc.x * sa.y - sa.x * sc.y) +
          c.y * (sa.x * sb.y - sb.x * sa.y)) /
        den;
    fc.save();
    fc.beginPath();
    fc.moveTo(a.x, a.y);
    fc.lineTo(b.x, b.y);
    fc.lineTo(c.x, c.y);
    fc.closePath();
    fc.clip();
    fc.transform(m1, m2, m3, m4, m5, m6);
    fc.drawImage(paper, 0, 0);
    fc.restore();
    fc.fillStyle = `rgba(0,0,0,${Math.min(0.47, Math.abs(a.z - b.z) * 0.009 * amount)})`;
    fc.beginPath();
    fc.moveTo(a.x, a.y);
    fc.lineTo(b.x, b.y);
    fc.lineTo(c.x, c.y);
    fc.closePath();
    fc.fill();
  }
  function drawFold() {
    const size = resize(fold);
    if (!size) return;
    const { w, h, d } = size;
    fc.setTransform(d, 0, 0, d, 0, 0);
    fc.clearRect(0, 0, w, h);
    const scale = Math.min(w / 700, h / 760),
      cols = 12,
      rows = 16;
    fc.save();
    fc.translate(w / 2, h / 2);
    fc.scale(scale, scale);
    fc.fillStyle = "#24241c18";
    fc.beginPath();
    fc.ellipse(15, 310 - amount * 120, 180 - amount * 70, 18, 0, 0, 7);
    fc.fill();
    const pts = [];
    for (let j = 0; j <= rows; j++)
      for (let i = 0; i <= cols; i++) {
        const u = i / cols,
          v = j / rows,
          x = (u - 0.5) * 480,
          y = (v - 0.5) * 600,
          z = Math.sin(i * 2.7 + j * 1.9) * 45 + Math.cos(i * 1.2 - j * 2.1) * 35;
        pts.push({
          x: x * (1 - amount * 0.68) + Math.sin(v * 14 + u * 7) * amount * 48,
          y: y * (1 - amount * 0.62) + Math.cos(u * 13 - v * 9) * amount * 46,
          z,
        });
      }
    const triangles = [];
    for (let j = 0; j < rows; j++)
      for (let i = 0; i < cols; i++) {
        const a = j * (cols + 1) + i,
          b = a + 1,
          c = a + cols + 1,
          e = c + 1,
          sa = { x: (i / cols) * 480, y: (j / rows) * 600 },
          sb = { x: ((i + 1) / cols) * 480, y: sa.y },
          sc = { x: sa.x, y: ((j + 1) / rows) * 600 },
          se = { x: sb.x, y: sc.y };
        triangles.push(
          [pts[a], pts[b], pts[c], sa, sb, sc],
          [pts[b], pts[e], pts[c], sb, se, sc]
        );
      }
    triangles.sort((a, b) => a[0].z + a[1].z + a[2].z - (b[0].z + b[1].z + b[2].z));
    triangles.forEach((t) => drawTriangle(...t));
    fc.restore();
  }
  function setFold(v) {
    amount = Math.max(0, Math.min(1, v));
    $("#crumple").value = Math.round(amount * 100);
    drawFold();
  }
  $("#crumple").oninput = (e) => setFold(e.target.value / 100);
  $("#unfold").onclick = () => setFold(0);
  $("#note-text").oninput = () => {
    texture();
    drawFold();
  };
  fold.onpointerdown = (e) => {
    foldDrag = { y: e.clientY, value: amount };
    fold.setPointerCapture(e.pointerId);
  };
  fold.onpointermove = (e) => {
    if (foldDrag) setFold(foldDrag.value + (foldDrag.y - e.clientY) / 220);
  };
  fold.onpointerup = fold.onpointercancel = () => {
    foldDrag = null;
  };
  texture();
  document.fonts.ready.then(() => {
    texture();
    drawFold();
  });
  window.addEventListener("resize", drawFold);
  drawFold();
})();
