# Ladd & Co. Home Page

Pixel-focused home page implementation based on the provided Figma directions.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict mode)
- Tailwind CSS 4
- shadcn/ui setup (New York style configuration)
- Lucide React icons
- pnpm

## Local Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start development server:

```bash
pnpm dev
```

3. Open:

```text
http://localhost:3000
```

## Scripts

- `pnpm dev` - run development server
- `pnpm build` - production build
- `pnpm start` - run production server
- `pnpm lint` - lint checks

## Project Notes

- Main page implementation: `src/app/page.tsx`
- Theme and color tokens: `src/app/globals.css`
- shadcn utility + button: `src/lib/utils.ts`, `src/components/ui/button.tsx`
- Brand-inspired visual assets: `public/images/*.svg`

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import repository in Vercel.
3. Framework preset: Next.js.
4. Build command: `pnpm build`.
5. Output settings: default Next.js.

After deployment, share both the repository URL and preview URL.
