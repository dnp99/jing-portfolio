# Jingting Su Nursing Portfolio

Professional portfolio for Jingting Su, RN, focused on community and primary
care nursing across the GTA.

## Local Development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Create the static GitHub Pages export:

```bash
npm run build
```

## Editing Content

Profile copy, experience, clinical capabilities, credentials, contact
information, and the resume filename are configured in `content/site.ts`.

Replace `public/Jingting-Su-Resume.pdf` whenever the resume changes. Keeping the
same filename avoids a code update.

## Deployment

Pushes to `main` build and deploy automatically through
`.github/workflows/deploy.yml`.
