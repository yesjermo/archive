# archive dumps

**Live website:** [yesjermo.github.io/archive](https://yesjermo.github.io/archive/)

**my favourite archives / a little collection, still growing.**

a small place for the things i want to remember. sketchbook pages, design ideas, music, posters,
tickets, a football, a kendama. some things are finished. some are just ideas on paper. i keep
them here because i want to come back to them.

made by **Allan Fung** for Design for the Web, Project 2.

## the idea

it should feel like opening a box of keepsakes late at night. the room is dark and quiet, and
the things inside are lit: photographs, folded posters, a paper book, a note you can crumple.

the look comes from the opening of _All About Lily Chou-Chou_: true black, small white type,
lines held in 《 》 like subtitles, and text that types itself out or arrives garbled before it
settles. everything else stays out of the way.

## pages

| File             | What's there                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `index.html`     | a typing intro, then a collage of keepsakes around the handwritten title, and a short bio.  |
| `archive.html`   | two ways to look through the collection: a paper book you turn, or an orbit of objects.     |
| `entry.html`     | one keepsake at a time: the image, a few lines about it, credits, and neighbouring entries. |
| `listening.html` | an album on repeat, with a CD that spins while the Spotify player plays.                    |
| `playroom.html`  | a paper note to crumple and smooth out again.                                               |
| `about.html`     | about.txt: a terminal-style readme, credits, and a portrait in ASCII, 1-bit or original.    |

## what it does

- **intro.** the front page opens on black: a garbled line decodes into the site's name, then
  lines type out with a cursor. it plays once per visit; any click, tap or key skips it.
- **typed lines.** subtitle lines and the home title write themselves out the first time you see
  them. screen readers get the full text straight away.
- **archive.** search by title or tag, filter by collection, and clear the filter from the tag
  under the title. every entry keeps its own number (`08 / 19`), even when filtered.
- **book and orbit.** turn pages with the arrows, the page edges or a swipe; in the orbit, drag,
  rotate, zoom, pause and reset. the view and selection are kept in the address bar.
- **entries.** each one ends with the entries before and after it, and three related keepsakes as
  small polaroids. bad links get a clear not-found page.
- **small things.** a dot-and-ring cursor, soft click sounds you can turn off, and a handwritten
  footer on every page.
- **care.** works at phone width without sideways scrolling, keeps keyboard focus visible, and
  calms the motion down when the device asks for reduced motion.

## run it

serve the folder, then open it in a browser. there's nothing to install or build.

```bash
python3 -m http.server 8000
```

then go to **http://localhost:8000**. vs code's Live Server works too. you can open `index.html`
directly, but serving it is closer to the live site.

the listening room needs an internet connection; what plays, and whether you need to sign in, is
up to Spotify. click sounds start after your first click, as browsers require.

## how it's put together

```text
Fung_Allan_Project2_Step5/
├── index.html, archive.html, entry.html, listening.html, playroom.html, about.html
├── css/
│   ├── styles.css … personal.css   the paper-era base, layered in the order each page loads them
│   └── night.css                   the dark theme and fonts; loaded last, so it has the final say
├── js/
│   ├── main.js            the entries (one list for the whole site) and the entry page
│   ├── archive-room.js    the paper book, the orbit, search and filters
│   ├── bbs-intro.js       the front-page typing intro
│   ├── typed-lines.js     typed subtitles, the typed home title, the flickering garbled line
│   ├── personal.js        the ASCII / 1-bit portrait, click sounds, the cursor
│   ├── playroom.js        the crumpled-paper note
│   ├── spotify-disc.js    the Spotify player and the spinning CD
│   ├── shared-nav.js      menu and search panels
│   └── print-finish.js    the ink filter and the pencil layout on entries
├── assets/collection/     images for the entries and the collage
├── fonts/                 bundled fonts and their licences
├── SOURCES.md             where each image came from
└── README.md
```

### type

- **Instrument Serif** for headings and body text (`fonts/serif.ttf`, SIL Open Font License).
- **Caveat** for the handwriting: the title, notes and footer (`fonts/hand.ttf`, SIL OFL).
- a **typewriter** face for labels and the about.txt terminal (`fonts/typewriter.ttf`, Apache 2.0).
- **Mincho** for the 《 》 subtitle lines, from the visitor's own system fonts (Hiragino Mincho or
  Yu Mincho), falling back to a plain serif.

the older paper-era faces (Archivo Black, Roboto Condensed) are still in `fonts/`, but
`night.css` points their names at Instrument Serif. delete the font block at the top of
`night.css` to bring them back.

## changing things

- **entries:** edit the `entries` list at the top of `js/main.js`. keep each `id` unique, since
  links use it, and point `images` at files in `assets/collection/`.
- **colours and fonts:** `css/night.css`. the colours live in a few named values at the top
  (`--night`, `--night-ink`, `--night-dim` …).
- **the intro:** the lines are in `index.html` (inside `#bbs-intro`); the timing is in
  `js/bbs-intro.js`.
- **the footer:** it's written into each of the six pages, so change all six together.
- **after editing a css or js file,** bump the `?v=` number on its `<link>` or `<script>` tag in
  each page, so browsers fetch the new copy instead of an old cached one.

formatting follows `.prettierrc.json` (two spaces, 90 columns). to tidy everything:

```bash
npx prettier@3.3.3 --write "*.html" "css/*.css" "js/*.js"
```

## references and credits

- the opening of _All About Lily Chou-Chou_ (Shunji Iwai, 2001), for the black screen, the
  subtitle lines and the garbled text. nothing from the film is used on the site.
- [stympaul.com](https://stympaul.com/), for the serif headings and the one-interaction-at-a-time
  pacing. its own font isn't used here; Instrument Serif is a free stand-in.
- [claunicornios.com](https://claunicornios.com/), and the Sundae School editorial images from the
  brief, for the collage and paper layouts.

my own photos and sketchbook pages sit next to collected music, film and design references. each
entry credits its image, with a source link where i have one; `SOURCES.md` has the rest. the demo
tickets are made up, and don't claim attendance or travel. third-party artwork belongs to its
owners.

## notes

this is still a work in progress. some objects are cut out with css rather than real background
removal. the paper note is a drawn effect, not a cloth simulation. the CD only shows what the
Spotify player is doing; it doesn't play audio itself.

`README.txt` holds earlier development notes and may describe things that have since changed. this
file describes the site as it is now.
