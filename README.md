# White Noise Podcast

This repository adapts [derekross/podstr](https://github.com/derekross/podstr) for the White Noise podcast site.

## What is wired up

- Podstr source copied into this repository
- GitHub Pages workflow kept in place and configured for project-page deploys
- Vite and React Router updated to support deployment from `/whitenoise-podcast/`
- White Noise icons and favicon copied from `whitenoise-web`
- Default podcast metadata updated for White Noise branding
- Lightning support pointed at `whitenoise@npub.cash`

## Current configuration

Main configuration lives in `src/lib/podcastConfig.ts`.

Current defaults include:

- Title: `White Noise Podcast`
- Publisher: `The Marmot Protocol`
- Cover art: `https://whitenoise.chat/images/og_preview@1x.png`
- Funding page: `https://whitenoise.chat/contribute`
- Value recipient: `whitenoise@npub.cash`
- Creator Nostr key: `npub1whtn0s68y3cs98zysa4nxrfzss5g5snhndv35tk5m2sudsr7ltms48r3ec`
- Public site URL: `https://podcast.whitenoise.chat`
- Contact email intentionally omitted

## Values to confirm before production

These are the pieces I could not fully verify from the repository alone:

1. Contact email in `src/lib/podcastConfig.ts` if you ever want one shown in RSS/about
2. Final license string if this should not stay `All Rights Reserved`

## Local development

```bash
npm install
npm run dev
```

## Build and test

```bash
npm test
npm run build
```

## GitHub Pages deploy

The workflow in `.github/workflows/deploy.yml` builds the site for the repository path and deploys `dist/` to GitHub Pages.

This repo is configured for the custom domain:

```text
https://podcast.whitenoise.chat
```

GitHub Pages still serves the backing site at:

```text
https://marmot-protocol.github.io/whitenoise-podcast/
```

## RSS

- RSS is generated at build time by `scripts/build-rss.ts`
- Output files land in `dist/rss.xml` and `dist/rss-health.json`
- RSS links use `BASE_URL` from the GitHub Actions workflow unless `website` is set in `src/lib/podcastConfig.ts`

## Upstream

Original upstream: [derekross/podstr](https://github.com/derekross/podstr)
