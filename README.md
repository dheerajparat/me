# PARAT — personal portfolio

A responsive React + TypeScript portfolio for Dheeraj Parat. The interface uses a near-black engineering palette, a lightweight simulated terminal, editable skill and project data, and no backend or client-side secrets.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

The static production build is written to `dist/`. Deploy the contents of `dist/` to any HTTPS static host and point `parat.space` at that host. Keep SPA fallback behavior enabled so the custom not-found view can render for unknown paths. Configure deployment security headers at the host (for example, a restrictive Content-Security-Policy, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`).

## Personalize

- Edit `src/data.ts` for public profile links, skills, project descriptions, and repository URLs.
- Add a real portrait under `public/` and set `profile.photo` in `src/data.ts`; the current hero uses an intentionally replaceable graphic placeholder because no photo was supplied.
- Add a verified public email or YouTube channel URL to `src/data.ts` when available. The contact UI keeps these details out until configured.
- Edit the employment date and role copy in `src/App.tsx` only after confirming the details.
- Update the domain metadata in `index.html`, `public/robots.txt`, and `public/sitemap.xml` if the site is hosted elsewhere.

The Lab terminal accepts only `help`, `about`, `skills`, `projects`, and `contact`. It is a local simulation and does not run shell commands.


## Search visibility

The production build pre-renders the portfolio into `dist/index.html`, so the main profile content is in the initial HTML for crawlers that do not run JavaScript. It also emits Person/ProfilePage structured data, canonical and social metadata, `robots.txt`, `sitemap.xml`, a PNG sharing card, and `llms.txt`. `llms.txt` is supplementary guidance, not a standardized search ranking signal.

After deploying to `https://parat.space/`, verify the domain in Google Search Console and Bing Webmaster Tools, submit `https://parat.space/sitemap.xml`, and inspect the rendered page. Crawl/index eligibility does not guarantee indexing or rankings.

`robots.txt` allows search-oriented crawlers including Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, and PerplexityBot. It blocks GPTBot and ClaudeBot training crawlers. Google-Extended is also disallowed: that control does not affect Google Search, but it does affect Gemini Apps training and grounding. Change the corresponding rule only if you want to permit those uses.
