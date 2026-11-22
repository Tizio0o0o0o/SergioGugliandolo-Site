# sergiogugliandolo.com

My personal website: projects, BrainTex, links and a few memes.
Live at **[sergiogugliandolo.com](https://sergiogugliandolo.com)** (the root opens the links page, the one on my QR codes).

It's deliberately simple: **plain HTML, CSS and JavaScript. No framework, no build step, no `npm install`.**
Push to `main` → Cloudflare Pages publishes it. That's the whole pipeline.

Help is welcome! Read on, it takes five minutes to understand how everything fits together.

---

## What's inside

```
├── content/                ← ALL THE TEXTS. This is where you edit things.
│   ├── site.js             menu, footer, labels, skills, status badges
│   ├── home.js             home page
│   ├── links.js            links page (the most used one!)
│   ├── projects.js         every project, in order (BrainTex included)
│   ├── qr.js               QR page + contact cards (vCards, phone number). Unlisted, see below
│   └── sum.js              the "-0.08(3)" joke page
│
├── assets/
│   ├── css/style.css       the whole design (colors at the top)
│   ├── js/boot.js          picks theme + language before the page is drawn
│   ├── js/core.js          header, footer, background animation, shared helpers
│   ├── js/icons.js         icons and brand logos
│   ├── js/pages/*.js       one small script per page type
│   ├── fonts/              self-hosted fonts (Space Grotesk, Inter, JetBrains Mono)
│   └── vendor/qrcode.js    QR generator (MIT, by Kazuhiko Arase)
│
├── projects/
│   ├── <id>.html           one tiny page per project (just says which project to show)
│   └── <id>/               that project's photos, PDFs and og.jpg (preview image for social media)
│
├── img/                    logo, photo, BrainTex images, favicons
├── home.html, links.html, projects.html, QR.html, -0.08(3).html, 404.html
├── sitemap.xml, robots.txt  help search engines find the pages
├── _redirects, _headers    Cloudflare Pages settings
└── SergioGugliandoloCV.pdf
```

Every `.html` file is just a thin shell: some `<meta>` tags for search engines and link previews, plus the list of scripts.
The page content is built by `assets/js/pages/<page>.js` using the texts in `content/`.

## Run it locally

Any static server works. From the repository folder:

```bash
npx serve .            # or: python -m http.server 8000
```

Then open the address it prints and go to `/links.html`, `/home.html`, and so on.
You can also just double-click an `.html` file. Everything works, but the browser blocks the custom fonts on `file://`, so the letters look a bit different.

The Italian `/it/…` addresses (see below) exist only online, on Cloudflare. Locally the `EN | IT` button simply switches the texts in place.

## Editing texts

Open the right file in `content/`. Every text comes in two languages:

```js
title: { en: "Wallet card", it: "Wallet card" },
```

- **English is the main language.** Visitors see Italian if their device is set to Italian, and anyone can switch with the `EN | IT` button.
- **Every page has two addresses online**: `/projects` (English) and `/it/projects` (Italian), so Google can index both languages.
  Both addresses show the same HTML file (one rule at the bottom of `_redirects`); `assets/js/boot.js` reads the `/it/` and switches the texts.
  You never need to create Italian files.
- **Don't translate jokes word by word, adapt them.** A joke that works in English often falls flat in Italian (and vice versa), so it's fine (encouraged, even) for the two versions to say different things. See the *Johnnie holder* / *Porta-goldoni* project.
- Inside texts you can use simple HTML: `<strong>`, `<em>`, `<a href="…">`, `<code>`.

In long texts (`body` of a project, the BrainTex page, …) each string is one paragraph, with two shortcuts:

| You write                          | You get                         |
| ---------------------------------- | ------------------------------- |
| `"A normal sentence."`             | a paragraph                     |
| `"<h2>Title</h2>"` (starts with `<`) | raw HTML (titles, lists…)     |
| `"// A joke."`                     | an orange "meme" box            |

## Adding a project

1. **Photos**: create `projects/my_project/` and put the images there. Use **WebP**, max ~1600 px wide.
   [Squoosh](https://squoosh.app) converts and shrinks images in the browser, no install needed. Transparent backgrounds look great on the dotted cards.
2. **Text**: in `content/projects.js`, copy an existing project block and change it. The comment at the top of that file explains every field.
   The most important one is `skill`: *what did this project teach me?*
3. **Page**: copy any `projects/<something>.html` to `projects/my_project.html` and change:
   - `data-project="my_project"` on the `<body>` tag
   - the `<title>`, `description` and `og:` tags (that's what WhatsApp/LinkedIn show when the link is shared)
   - the three `hreflang` lines (they contain the page address, e.g. `/projects/my_project` and `/it/projects/my_project`)
   - the `preload` line: the path of the first big image of the page (makes it appear faster)
4. **Sitemap**: add two lines for the new page in `sitemap.xml`, the English and the `/it/` address (it helps Google find them).
5. *(Optional)* add `projects/my_project/og.jpg`, 1200 × 630 px, as the share preview image.
6. *(Optional)* add `home: true` to show it in "Selected projects" on the home page (three looks best).

Statuses: `wip` (in progress), `paused`, `done`, `solo` (I pushed it far and now it goes on without me, e.g. Team ISAAC).
Skill families for the filters are in `content/site.js` → `skills`. Add new ones there.

## Adding or changing a link

Edit `content/links.js`. Each link has a `title`, an optional `sub`title, an `href` and an `icon`.
The Telegram link and email used by the "Let's talk" box on the home page and by the "Building something similar?" box at the bottom of project pages are in `content/site.js` → `contact`. To hide that box on a project, add `contact: false` to it.
Brand icons come from [simpleicons.org](https://simpleicons.org): to add one, copy its SVG path into `assets/js/icons.js` → `brands`.

## QR codes and contact cards

The QR page ([/QR](https://sergiogugliandolo.com/QR)) is **unlisted** on purpose, because it contains my phone number:
it's not in the menu, the footer or the sitemap, and it tells search engines not to index it. Only people with the link get there.

It generates the codes in the browser from `vcards` in `content/qr.js`. Change an email or a job title there and every QR code updates.
No images to regenerate. That file is loaded only by the QR page, so the phone number isn't in the code of the other pages.

## Colors, fonts, design

All colors are CSS variables at the top of `assets/css/style.css`: one block for the light theme, one for the dark theme.
The theme follows the device setting; the moon/sun button overrides it (and clicking back to the device's theme makes the site follow the device again).

The moving dot grid in the background is drawn in `core.js` → `startBackground()`.
It's turned off automatically for people who set *reduce motion* on their device.

## Deploying

Cloudflare Pages deploys every push to `main` automatically. There is no build command; the output directory is the repository root.

- `_redirects`: `/` → `/links`, short links like `/cv`, and the rule that serves every page under `/it/` too.
- `sitemap.xml` + `robots.txt`: tell search engines which pages exist.
- `_headers`: caching and a couple of security headers.
- `404.html`: shown for any page that doesn't exist.

## Contributing

Ideas, fixes and pull requests are very welcome. A few house rules keep the site easy to maintain:

- **Keep it simple.** No frameworks, no build tools, no new dependencies unless there's a really good reason.
- **Both languages.** If you add text, add it in English and Italian (ask me if your Italian isn't great, no problem).
- **Check it** in light and dark mode, and on a phone-sized window, before opening the PR.
- **Small PRs** are easier to review than big ones.

Some things that would be nice to have:

- 3D models that don't depend on Fusion 360 links (e.g. `<model-viewer>` with exported `.glb` files)
- better photos for older projects
- an accessibility review (keyboard, screen readers, contrast)

Questions? Write me on [Telegram](https://t.me/Tizio0o0o0o) or open an issue.

## License

Code under [GPL-3.0](LICENSE). Photos, texts and the CV are mine. Please ask before reusing them.
Fonts: SIL Open Font License. Brand icons: [Simple Icons](https://simpleicons.org) (CC0). QR library: MIT.
