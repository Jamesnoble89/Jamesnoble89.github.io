# jamesnoble1.github.io

CV and personal projects site. React + TypeScript + Vite + Tailwind CSS, deployed to GitHub Pages with a custom domain (noblesoftware.co.uk) via Cloudflare DNS.

## Development

```bash
npm install
npm run dev
```

## Content

Edit [src/data/cv.ts](src/data/cv.ts) — profile, skills, experience, and projects all live there as typed data. Section components under `src/components/` render it.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it via GitHub Pages. In the repo's **Settings → Pages**, set the source to "GitHub Actions".

The custom domain is set via `public/CNAME`, which is copied into the build output automatically.
