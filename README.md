# Francis Ametewee Portfolio

Live site: https://francis-a67.github.io (after deployment)

Stack: Static HTML / CSS / vanilla JS. Single file. Zero build step. Zero dependencies beyond Google Fonts.

## Files

```
portfolio/
├── index.html          The whole site. Single file.
├── images/             Drop your screenshots here. See below.
├── DEPLOY.md           Step-by-step GitHub Pages deployment.
└── README.md           This file.
```

## Image swap-in

The site renders clean placeholders if no images are present. To replace them, save the files into the `images/` folder using these exact filenames:

| Placeholder location | Filename to drop in |
|---|---|
| About section, headshot | `images/headshot.jpg` |
| TerpNav case study | `images/terpnav-1.png` |
| Slap and Dash case study | `images/slap-and-dash-1.png` |

Recommended sizes: 1600×900 for project shots, 800×1000 (4:5 aspect) for the headshot.

## Local preview

Just open `index.html` in any browser. No build step.

```bash
open portfolio/index.html
```

## Edit content

All copy lives directly in `index.html`. Search for the section you want to update (e.g. `<!-- TERPNAV -->`) and edit in place. Voice rules from `VoiceProfile.md` apply: no em dashes, no banned phrases, lead with proof.

## Deploy

See `DEPLOY.md`.
