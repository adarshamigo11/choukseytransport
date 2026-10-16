# Chouksey Transport Packers & Movers — Website

Next.js 14 (App Router) · Tailwind CSS · Lucide icons · built for Vercel.

## 1. Before going live (edit `lib/site.ts`)

All business details live in **one file**: `lib/site.ts`.

- `phoneIntl` / `phoneDisplay` — real phone number (digits only, starting `91`)
- `address`, `geo` — real office address and coordinates (right-click your pin in Google Maps to copy lat/lng)
- `url` — your domain, or set `NEXT_PUBLIC_SITE_URL` in Vercel
- Optional, **only with real numbers**: `rating`, `completedMoves`, `foundedYear`, `googleMapsUrl`
- Real customer reviews go in `lib/reviews.ts` (the reviews section stays hidden until something real is added)

## 2. Run locally

```bash
npm install
npm run dev
```

## 3. Deploy (GitHub → Vercel)

```bash
git init && git add . && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<you>/chouksey-packers.git
git push -u origin main
```

Then in Vercel: **Add New → Project → Import** the repo → Deploy (zero config).
Add `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.yourdomain.in`) under Settings → Environment Variables, then connect your custom domain.

## 4. What's included for SEO

- Metadata API: title, description, keywords, canonical, Open Graph, Twitter (`app/layout.tsx`)
- JSON-LD `MovingCompany` / `LocalBusiness` with NAP, geo, 24/7 hours, service radius, areas served (`lib/schema.ts`)
- `app/sitemap.ts`, `app/robots.ts`, generated OG image, favicon
- Semantic HTML: one `<h1>`, `<h2>` per section, `<h3>` per card

## 5. After launch (biggest local-ranking wins)

1. Submit `/sitemap.xml` in Google Search Console.
2. Claim and complete your Google Business Profile — same name, address and phone as in `lib/site.ts`.
3. Collect genuine Google reviews and mirror them in `lib/reviews.ts`.
4. Add a real photo set (trucks, team, loading) — Next `<Image>` is ready to use.
