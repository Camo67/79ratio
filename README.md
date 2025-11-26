to load?
is README documents the project structure, important asset filenames you mentioned, and the front-end layout rules you specified so the developer/designer can implement them without guesswork.

---

# Project structure (recommended)

Use this as a guide — filenames below match the exact names you gave during the audio.

```
/public
  ├─ favicon.web.wp                # favicon you mentioned (exact spelling as given)
  ├─ nodes.jpg                     # homepage hero image (you called this 'nodes.jpg')
  └─ cloudcomputing.jpg            # background for first block containers

/src
  ├─ assets/
  │   └─ 79 ratio logo um new.webp  # logo file as you described (keep original name)
  └─ components/
      ├─ Card.jsx / Card.tsx
      ├─ Hero.jsx / Hero.tsx
      └─ Layout.jsx / Layout.tsx
```

> **Important:** I wrote the filenames exactly as you said them. If you’d like me to normalise them (e.g. `79-ratio-logo-new.webp` or `favicon.webp`), I can produce a one-line rename plan — but for now keep the original filenames in the repo so nothing breaks.

---

# Assets (exact names you provided)

* Logo: `assets/79 ratio logo um new.webp`
* Homepage hero / hero image: `nodes.jpg` (placed in `public/`)
* Favicon: `public/favicon.web.wp` (spelled exactly as you said)
* First block background image (used for all cards in that block): `cloudcomputing.jpg`

---

# Visual / layout rules (explicit, as requested)

1. **Cards / containers**

   * Each content *block* is composed of **4 containers** (4 cards per block).
   * **Behind the text** in each card there must be an image used as the card background (not an inline image). The image should act as the visual holder for the card content.
   * Background should be set with `background-image` (CSS) on the card container so text flows above it and the image scales/positions responsively.

2. **First block special rule**

   * The *first block* (the first set of 4 cards) must use **`cloudcomputing.jpg`** as the background for **every** card in that block. Keep them identical across those 4 cards.

3. **Hero**

   * Hero/above-the-fold uses `nodes.jpg`. This should be full-bleed (edge-to-edge) with a minimal overlay for legibility (subtle dark gradient or colored translucent overlay). Keep hero typography clean and bold.

4. **Logo & favicon**

   * Use the logo file from `assets/` in the header and where appropriate (SVG/PNG/WebP).
   * Place the favicon file at `public/favicon.web.wp` exactly as named.

---

# Implementation snippets

Example CSS for card background (plain CSS):

```css
.card {
  background-image: url('/public/cloudcomputing.jpg'); /* or relative path to /public */
  background-size: cover;
  background-position: center;
  padding: 24px;
  border-radius: 12px;
  color: #fff; /* adjust for contrast based on overlay */
  position: relative;
  overflow: hidden;
}

/* optional subtle overlay */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45));
  pointer-events: none;
}
```

Example React/JSX card usage (pseudo):

```jsx
function Card({ title, text, bg }) {
  return (
    <article className="card" style={{ backgroundImage: `url(${bg})` }}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

/* First block usage */
const firstBlockBg = '/public/cloudcomputing.jpg'; // matches your filename
<Card bg={firstBlockBg} title="..." text="..." />
```

Hero example reference:

```html
<section class="hero" style="background-image:url('/public/nodes.jpg')">
  <div class="hero-overlay"> <!-- small translucent overlay for text legibility -->
    <h1>Ratio79</h1>
    <p>Cybersecurity & web technology</p>
  </div>
</section>
```

---

# Notes & conventions (so nothing is misunderstood)

* I kept every filename **exactly** as you said (including unusual spellings like `favicon.web.wp` and the way you described the logo). If those are typos, they will break static asset resolution — but I did not change them because you insisted on exact names.
* You said the logo is in `assets` and the favicon is in `public` — follow that folder split.

---

# Version control workflow helpers

To keep layouts and content separate (and easy to restore), I’ve added a couple of helpers:

* **Safety branch** – I saved the current state on `content-backup`. If you ever need to grab something from the messy version, switch there first:  
  `git checkout content-backup`

* **Restore core layout files** – run `./scripts/restore-layout.sh` to pull the design system (components, Tailwind config, etc.) from a clean ref (defaults to `origin/main`). Example:  
  `./scripts/restore-layout.sh`  
  or restore from a specific tag/commit:  
  `./scripts/restore-layout.sh v1.0.0`

* **Auto-build before every commit** – after `npm install`, a pre-commit hook is installed that runs `npm run verify` (which builds the project). If the build fails, the commit is blocked, so you always know each snapshot compiles. You can re-run the installer anytime with:  
  `npm run setup:hooks`

Recommended workflow:

1. Create a feature branch for each set of content updates (`git checkout -b content/new-landing-copy`).
2. Use `./scripts/restore-layout.sh` whenever the layout drifts and you want the baseline back while keeping new pages.
3. When ready, commit — the hook will build first; fix any issues it reports.
4. Merge back into `main` only after the build passes so the restore point stays healthy.
* You mentioned the project has a “hidden” / cybersecurity section — include a `pages/security` or `routes/security` area for that content (and mark it as a distinct section in the site nav if required).

---

# Dev / run instructions (example)

These are standard, adapt to your stack (Next.js, Vite, Create React App, etc.):

1. Install dependencies

```bash
npm install
# or
pnpm install
```

2. Dev server

```bash
npm run dev
# or
pnpm dev
```

3. Build / production

```bash
npm run build
npm run start
```

(If you want I can produce exact `package.json` scripts for Next.js or Vite — say which stack and I’ll write them.)

---

# Contributing

* When adding or replacing assets, **do not** change the filenames without also updating every import/path in code.
* If an asset must be renamed, make a short commit message like: `rename: assets/logo -> assets/79-ratio-logo-new.webp` and update  all imports/paths.
