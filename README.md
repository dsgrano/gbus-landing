# GBUS Landing (Next.js + Tailwind) — Ready for Vercel

A lightweight landing page for **Google Business Update Services (GBUS)** with a working contact form API.

## Quick Start (Local)

1. Install deps:
   ```bash
   npm i
   ```
2. Run dev:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy on Vercel (recommended)

1. Push this folder to a GitHub repo (e.g., `gbus-landing`).
2. Go to https://vercel.com → **New Project** → import the repo → **Deploy**.
3. (Optional) Set environment variables to enable email via Resend:
   - `RESEND_API_KEY` = your API key
   - `TO_EMAIL` = where to receive form submissions
4. Add a domain (e.g., `gbus.yourdomain.com`) in Vercel → **Domains**.

## Form Submissions

- The contact form POSTs to `/api/contact`.
- If `RESEND_API_KEY` and `TO_EMAIL` are set, it will email you each submission.
- If not set, submissions still succeed; they’re just logged by the server (sufficient for testing).

## Stack

- Next.js (App Router)
- Tailwind CSS
- Vercel‑friendly API route
