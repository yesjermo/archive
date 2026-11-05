// Shared archive data, entry rendering, and navigation helpers.
const entries = [
  {
    id: "night-walk",
    title: "sketches outside",
    category: "photos",
    tags: ["photos", "night walk", "sketches outside"],
    media: "sketches outside",
    description:
      "an open sketchbook on the grass. loose pen lines, an ordinary moment i wanted to keep.",
    story:
      "an open sketchbook on the grass. loose pen lines, an ordinary moment i wanted to keep.",
    annotation: "a page from outside",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/personal-1.jpg"],
    caption: "a page from outside",
  },
  {
    id: "cabin-sketch",
    title: "in between places",
    category: "photos",
    tags: ["photos", "cabin sketch", "in between places"],
    media: "in between places",
    description:
      "rows of seats, overhead panels, the view from inside a cabin. drawn across one sketchbook spread, somewhere in between places.",
    story:
      "rows of seats, overhead panels, the view from inside a cabin. drawn across one sketchbook spread, somewhere in between places.",
    annotation: "drawing while travelling",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/personal-2.jpg"],
    caption: "drawing while travelling",
  },
  {
    id: "unfinished-thought",
    title: "unfinished lines",
    category: "notes",
    tags: ["notes", "unfinished thought", "unfinished lines"],
    media: "unfinished lines",
    description:
      "a close look at the sketchbook. small studies, dark outlines, ideas i left open. leaving the rough edges.",
    story:
      "a close look at the sketchbook. small studies, dark outlines, ideas i left open. leaving the rough edges.",
    annotation: "leave the rough edges",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/personal-3.jpg"],
    caption: "leave the rough edges",
  },
  {
    id: "dreamer",
    title: "dreamer",
    category: "photos",
    tags: ["photos", "dreamer", "dreamer"],
    media: "dreamer",
    description:
      "from my design dump. blue and red, bold type, a quiet field of colour and some japanese text.",
    story:
      "from my design dump. blue and red, bold type, a quiet field of colour and some japanese text.",
    annotation: "design dump / 01",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/personal-4.jpg"],
    caption: "design dump / 01",
  },
  {
    id: "glass-study",
    title: "glass & roots",
    category: "photos",
    tags: ["photos", "glass study", "glass & roots"],
    media: "glass & roots",
    description:
      "a glass vessel, green leaves, roots you can see. filed as a design and image study.",
    story:
      "a glass vessel, green leaves, roots you can see. filed as a design and image study.",
    annotation: "design dump / 02",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/personal-5.jpg"],
    caption: "design dump / 02",
  },
  {
    id: "side-b",
    title: "side b / diary",
    category: "notes",
    tags: ["notes", "side b", "side b / diary"],
    media: "side b / diary",
    description:
      "my idea journal. a cassette-shaped energy-drink ad, playlist cans, an interactive bus stop, an ar album cover, a giant headphone billboard. all still in progress.",
    story:
      "my idea journal. a cassette-shaped energy-drink ad, playlist cans, an interactive bus stop, an ar album cover, a giant headphone billboard. all still in progress.",
    annotation: "15 october 2026 / ideas in progress",
    credit: "From my collection",
    source: "",
    images: [
      "assets/collection/personal-6.jpg",
      "assets/collection/personal-7.jpg",
      "assets/collection/personal-8.jpg",
    ],
    caption: "15 october 2026 / ideas in progress",
    date: "15 October 2026",
  },
  {
    id: "phone",
    title: "phone / paper screen",
    category: "notes",
    tags: ["notes", "phone", "phone / paper screen"],
    media: "phone / paper screen",
    description:
      "a phone drawn in the idea diary. scan a can and the album cover comes to life. just an idea for a screen, for now.",
    story:
      "a phone drawn in the idea diary. scan a can and the album cover comes to life. just an idea for a screen, for now.",
    annotation: "an idea for a screen",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/personal-7.jpg"],
    caption: "an idea for a screen",
  },
  {
    id: "on-repeat",
    title: "spirited away",
    category: "music",
    tags: ["music", "on repeat", "spirited away"],
    media: "spirited away",
    description:
      "youngqueenz, 神隱 spirited away. i saved the album artwork for the music and the packaging.",
    story:
      "youngqueenz, 神隱 spirited away. i saved the album artwork for the music and the packaging.",
    annotation: "soundtrack to the archive",
    credit: "YoungQueenz / Bandcamp artwork",
    source: "https://youngqueenz.bandcamp.com/album/spirited-away",
    images: ["assets/collection/youngqueenz.jpg"],
    caption: "soundtrack to the archive",
  },
  {
    id: "blur",
    title: "blur / wembley",
    category: "music",
    tags: ["music", "blur", "blur / no distance"],
    media: "blur / no distance",
    description:
      "blur, live at wembley stadium. a crowd, a mirrorball, one enormous night.",
    story: "a wembley poster, filed with my music. a poster worth keeping.",
    annotation: "a poster worth keeping",
    credit: "Poster: Blur, live at Wembley Stadium",
    source: "",
    images: ["assets/collection/blur-new.png"],
    caption: "a poster worth keeping",
  },
  {
    id: "wave-to-earth",
    title: "wave to earth / ticket",
    category: "music",
    tags: ["music", "wave to earth", "wave to earth"],
    media: "wave to earth",
    description:
      "wave to earth's australia & new zealand tour artwork. kept with my concert keepsakes, like a ticket.",
    story:
      "wave to earth's australia & new zealand tour artwork. kept with my concert keepsakes, like a ticket.",
    annotation: "a ticket, a sound, a memory",
    credit: "Tour artwork: wave to earth, Australia & New Zealand",
    source: "",
    images: ["assets/collection/wave-new.png"],
    caption: "wave to earth / tour keepsake",
  },
  {
    id: "punch-drunk-love",
    title: "punch-drunk love",
    category: "photos",
    tags: ["photos", "punch drunk love", "punch-drunk love"],
    media: "punch-drunk love",
    description:
      "the punch-drunk love poster. i keep it for the colour, the framing, the small figures against all that deep blue.",
    story:
      "the punch-drunk love poster. i keep it for the colour, the framing, the small figures against all that deep blue.",
    annotation: "cinema / colour notes",
    credit: "Sony Pictures — Punch-Drunk Love key art",
    source: "https://www.sonypictures.com/movies/punchdrunklove",
    images: ["assets/collection/film.jpg"],
    caption: "cinema / colour notes",
  },
  {
    id: "kendama",
    title: "wood & balance",
    category: "objects",
    tags: ["objects", "kendama", "wood & balance"],
    media: "wood & balance",
    description:
      "a natural oak kendama. simple shapes, the grain showing through, a red string. a small object, endless practice.",
    story:
      "a natural oak kendama. simple shapes, the grain showing through, a red string. a small object, endless practice.",
    annotation: "small object / endless practice",
    credit: "Kendama USA — Kaizen Natural Luna Oak",
    source: "https://shop.kendamausa.com/products/kaizen-natural-luna-oak",
    images: ["assets/collection/kendama.jpg"],
    caption: "small object / endless practice",
  },
  {
    id: "japanese-y2k",
    title: "jump / paper worlds",
    category: "photos",
    tags: ["magazine", "jump", "manga", "paper"],
    media: "japanese y2k",
    description:
      "a jump magazine cover. dense lettering, characters on top of characters, a whole world packed onto one page.",
    story:
      "i collected it for the crowded cover and the printed-paper feeling. it's a recent issue, not a vintage y2k one.",
    annotation: "a whole world on paper",
    credit: "Weekly Shonen Jump, 2026 issue 47. Cover © Shueisha / respective creators.",
    source: "https://www.shonenjump.com/j/weeklyshonenjump/",
    images: ["assets/collection/jump.jpg"],
    caption: "Weekly Shonen Jump / cover reference",
  },
  {
    id: "fencing",
    title: "foil & mask",
    category: "objects",
    tags: ["objects", "fencing", "blades & mask"],
    media: "blades & mask",
    description: "a foil and a mask, resting on the gym floor.",
    story:
      "two pieces of fencing kit, kept together as one memory. balance, precision, repeat.",
    annotation: "balance / precision / repeat",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/fencing-new.png"],
    caption: "foil & mask / between practice",
  },
  {
    id: "dylan",
    title: "dylan rieder",
    category: "photos",
    tags: ["photos", "dylan", "dylan rieder"],
    media: "dylan rieder",
    description:
      "dylan rieder in the air over a wooden ramp, palm trees behind him, on a supreme poster. kept for the movement and the composition.",
    story:
      "dylan rieder in the air over a wooden ramp, palm trees behind him, on a supreme poster. kept for the movement and the composition.",
    annotation: "skating / a moment held still",
    credit: "Skate photo reference: Dylan Rieder",
    source: "",
    images: ["assets/collection/dylan-new.png"],
    caption: "skating / a moment held still",
  },
  {
    id: "ticket-stub",
    title: "hong kong → sydney",
    category: "objects",
    tags: ["objects", "ticket stub", "hong kong → sydney"],
    media: "hong kong → sydney",
    description:
      "hong kong → sydney, kept as a route keepsake. the passenger, flight and seat on this boarding pass are made up. it's a keepsake, not a real travel document.",
    story:
      "hong kong → sydney, kept as a route keepsake. the passenger, flight and seat on this boarding pass are made up. it's a keepsake, not a real travel document.",
    annotation: "hkg → syd / in transit",
    credit: "Original sample design — not a travel document",
    source:
      "https://flights.cathaypacific.com/destinations/en_HK/flights-from-hong-kong-to-sydney",
    images: [],
    caption: "hkg → syd / in transit",
    card: "boarding",
  },
  {
    id: "football",
    title: "football / after hours",
    category: "objects",
    tags: ["objects", "football", "football / after hours"],
    media: "football / after hours",
    description:
      "a black-and-white football. scuffed panels, stitching, the shape of an afternoon outside.",
    story: "filed with the things that keep me moving. one more game.",
    annotation: "one more game",
    credit: "From my collection",
    source: "",
    images: ["assets/collection/football.png"],
    caption: "after hours / football",
  },
  {
    id: "boxes",
    title: "carton boxes",
    category: "objects",
    tags: ["objects", "boxes", "carton boxes"],
    media: "carton boxes",
    description:
      "a note to collect cardboard cartons. folded corners, labels. the boxes that hold the archive are part of it too.",
    story:
      "a note to collect cardboard cartons. folded corners, labels. the boxes that hold the archive are part of it too.",
    annotation: "keep the box",
    credit: "Original typographic archive card",
    source: "",
    images: [],
    caption: "keep the box",
    card: "boxes",
  },
  {
    id: "movie-ticket",
    title: "first screening / cinema",
    category: "objects",
    tags: ["movie", "ticket", "cinema"],
    images: ["assets/collection/movie-ticket.png"],
    description: "a first-screening print for the odyssey, photographed on paper.",
    story: "a cinema print i collected. keep the paper.",
    caption: "cinema paper / collected reference",
    annotation: "keep the paper",
    credit: "Print: The Odyssey",
    source: "",
  },
];
function archiveSurface(item) {
  if (["blur", "dylan", "punch-drunk-love", "fencing", "movie-ticket"].includes(item.id))
    return "poster";
  if (item.category === "photos" && !["glass-study", "japanese-y2k"].includes(item.id))
    return "polaroid";
  if (["kendama", "glass-study", "football", "fencing", "foil-mask"].includes(item.id))
    return "cutout";
  if (
    ["side-b", "phone", "night-walk", "cabin-sketch", "unfinished-thought"].includes(
      item.id
    )
  )
    return "diary";
  if (["ticket-stub", "wave-to-earth"].includes(item.id)) return "ticket";
  if (["on-repeat"].includes(item.id)) return "sleeve";
  return "poster";
}
function concertTicket() {
  const t = document.createElement("div");
  t.className = "demo-ticket concert-ticket";
  t.innerHTML =
    '<div class="ticket-band">LIVE MUSIC <span>ARCHIVE EDITION / DEMO</span></div><div class="concert-name">wave to earth</div><p class="concert-sub">a night worth keeping</p><div class="ticket-details"><span>ADMISSION<b>GENERAL</b></span><span>QUANTITY<b>ONE</b></span><span>SERIAL<b>WTE–001</b></span><span>DATE<b>—</b></span><span>VENUE<b>—</b></span><span>DOORS<b>—</b></span></div><div class="ticket-stub"><span>ADMIT ONE<br>KEEP THIS PART</span><span class="ticket-code" aria-hidden="true"></span></div><small>FICTIONAL DEMO · NOT VALID FOR ENTRY</small>';
  return t;
}
function demoTicket() {
  const ticket = document.createElement("div");
  ticket.className = "demo-ticket";
  ticket.innerHTML =
    '<div class="ticket-band">ARCHIVE AIR <span>BOARDING PASS / DEMO</span></div><div class="ticket-route">HKG <span>→</span> SYD</div><div class="ticket-cities">HONG KONG <span>SYDNEY</span></div><div class="ticket-details"><span>PASSENGER<b>ARCHIVE / GUEST</b></span><span>FLIGHT<b>DEMO 001</b></span><span>DATE<b>22 OCT 2026</b></span><span>GATE<b>—</b></span><span>SEAT<b>12A</b></span><span>BOARDING<b>—</b></span></div><div class="ticket-stub"><span>HKG → SYD<br>KEEP THIS PART</span><span class="ticket-code" aria-hidden="true"></span></div><small>SAMPLE KEEPSAKE · NOT VALID FOR TRAVEL</small>';
  return ticket;
}
const params = new URLSearchParams(location.search);
const el = (id) => document.getElementById(id);
const label = (category) => category[0].toUpperCase() + category.slice(1);
function matches(state) {
  const category = state.get("category") || "all";
  const q = (state.get("q") || "").trim().toLowerCase();
  const result = entries.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      (item.title + " " + item.tags.join(" ")).toLowerCase().includes(q)
  );
  return state.get("sort") === "oldest" ? result.reverse() : result;
}
function link(text, href) {
  const a = document.createElement("a");
  a.textContent = text;
  a.href = href;
  return a;
}
function entryURL(item, state) {
  const next = new URLSearchParams(state);
  next.set("id", item.id);
  if (next.has("selected")) next.set("selected", item.id);
  return "entry.html?" + next.toString();
}
if (el("entry-content")) {
  const item = entries.find((e) => e.id === (params.get("id") || "night-walk"));
  const state = new URLSearchParams(params);
  state.delete("id");
  state.delete("from");
  const origin = params.get("from");
  el("return-link").href =
    origin === "home"
      ? "index.html"
      : origin === "listening"
        ? "listening.html"
        : "archive.html?" + state.toString();
  el("return-link").textContent =
    origin === "home"
      ? "Back to home"
      : origin === "listening"
        ? "Back to listening room"
        : "Back to archive";
  if (!item) {
    // Clear everything that still describes the static fallback entry.
    el("entry-content").replaceChildren();
    const h = document.createElement("h1");
    h.textContent = "Entry not found";
    const note = document.createElement("p");
    note.textContent =
      "This link doesn’t match anything in the archive. It may have moved or been renamed.";
    const actions = document.createElement("p");
    const search = document.createElement("button");
    search.type = "button";
    search.textContent = "Search the archive";
    search.addEventListener("click", (event) => {
      // Keep the page's click-outside handler from closing the panel again.
      event.stopPropagation();
      el("search-toggle")?.click();
    });
    actions.append(link("Browse every entry", "archive.html"), " or ", search);
    el("entry-content").append(h, note, actions);
    el("breadcrumb").hidden = true;
    el("entry-pagination").hidden = true;
    el("related-section").hidden = true;
    document.title = "Entry not found | Archive Dumps";
  } else {
    document.title = item.title + " | Archive Dumps";
    el("entry-title").textContent = item.title;
    el("breadcrumb-title").textContent = item.title;
    el("entry-category").textContent = label(item.category);
    el("entry-category").href = "archive.html?category=" + item.category;
    document.body.dataset.surface = archiveSurface(item);
    document.body.dataset.item = item.id;
    document.body.dataset.arrangement = entries.indexOf(item) % 2 ? "left" : "right";
    el("entry-media").replaceChildren();
    if (item.card === "concert") {
      el("entry-media").append(concertTicket());
    } else if (item.card === "boarding") {
      el("entry-media").append(demoTicket());
    } else if (item.images.length) {
      item.images.forEach((src) => {
        const image = new Image();
        image.src = src;
        image.alt = item.title;
        image.loading = "lazy";
        el("entry-media").append(image);
      });
    } else {
      el("entry-media").textContent =
        item.card === "boarding"
          ? "HKG → SYD / SAMPLE / Date — Seat — Gate —"
          : item.card === "football"
            ? "FOOTBALL / AFTER HOURS / A STUDY IN MOVEMENT"
            : "KEEP THE BOX / FRAGILE / COLLECTED THINGS";
    }
    el("entry-caption").textContent = item.caption;
    el("entry-meta").textContent =
      label(item.category) + " / " + (item.date || "collected reference");
    el("entry-description").textContent = item.description;
    // Only show "the story" when it adds something beyond the description.
    const hasStory = Boolean(item.story) && item.story.trim() !== item.description.trim();
    el("story-heading").hidden = !hasStory;
    el("entry-story").hidden = !hasStory;
    el("entry-story").textContent = hasStory ? item.story : "";
    el("entry-credit").textContent = item.credit + " ";
    if (item.source) el("entry-credit").append(link("View source ↗", item.source));
    el("entry-tags").replaceChildren();
    item.tags.forEach((tag, i) => {
      if (i) el("entry-tags").append(", ");
      el("entry-tags").append(link(tag, "archive.html?q=" + encodeURIComponent(tag)));
    });
    el("music-link").hidden = item.category !== "music";
    let collection =
      origin === "listening"
        ? entries.filter((e) => e.category === "music")
        : matches(state);
    if (!collection.some((e) => e.id === item.id)) collection = entries;
    const i = collection.findIndex((e) => e.id === item.id);
    // Previous / next name the neighbouring entries, like turning a page.
    const turn = (anchor, neighbour, direction) => {
      anchor.hidden = !neighbour;
      if (!neighbour) return;
      anchor.href = entryURL(neighbour, params);
      const dir = document.createElement("span");
      dir.className = "turn-direction";
      dir.textContent = direction === "previous" ? "← previous" : "next →";
      const name = document.createElement("span");
      name.className = "turn-title";
      name.textContent = neighbour.title;
      anchor.replaceChildren(dir, name);
    };
    turn(el("previous-entry"), collection[i - 1], "previous");
    turn(el("next-entry"), collection[i + 1], "next");
    el("pagination-separator").hidden =
      el("previous-entry").hidden || el("next-entry").hidden;
    el("entry-pagination").hidden = collection.length < 2;
    el("related").replaceChildren();
    // Prefer entries from the same collection, then fill from the rest.
    const others = entries.filter((e) => e.id !== item.id);
    [
      ...others.filter((e) => e.category === item.category),
      ...others.filter((e) => e.category !== item.category),
    ]
      .slice(0, 3)
      .forEach((e) => {
        // Each related entry is a small Polaroid, or a paper card without a photo.
        const li = document.createElement("li");
        const a = link("", "entry.html?id=" + e.id);
        a.className = "related-card";
        if (e.images.length) {
          const img = new Image();
          img.src = e.images[0];
          img.alt = "";
          img.loading = "lazy";
          a.append(img);
        } else {
          a.classList.add("is-paper");
        }
        const title = document.createElement("span");
        title.textContent = e.title;
        a.append(title);
        li.append(a);
        el("related").append(li);
      });
  }
}
