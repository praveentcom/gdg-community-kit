# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

GDG Community Kit Generator is a Next.js application that generates customized branding asset kits for Google Developer Group (GDG) communities. Users submit their community details via a form, and the system generates 100+ branded image variants (logos, banners, social media headers, etc.) using Puppeteer-based server-side rendering, packages them as a ZIP, and delivers a download link via email.

**Live URL:** https://gdg-community-kit.praveent.com

## Commands

- `npm run dev` — Start development server with Turbopack
- `npm run build` — Production build
- `npm start` — Start production server
- `npm run lint` — Run ESLint (extends `next/core-web-vitals` and `next/typescript`)
- `npm run pretty` — Run Prettier on all files

There are no test scripts configured.

## Architecture

### Tech Stack

- **Framework:** Next.js 15.5 (Pages Router, not App Router)
- **Language:** TypeScript (strict mode, target ES2017)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui (new-york style), Radix UI primitives
- **Database:** PostgreSQL via Prisma 6.5
- **Image Generation:** Puppeteer (headless Chromium) rendering React components to screenshots
- **Cloud Services:** Google Cloud Storage (ZIP hosting), Google Cloud Tasks (async job queue)
- **Email:** Resend with React Email templates
- **Image Upload:** Cloudinary via `next-cloudinary`
- **Rate Limiting:** Redis via ioredis
- **Bot Protection:** Cloudflare Turnstile CAPTCHA
- **Deployment:** PM2 on a VM, deployed via GitHub Actions SSH

### Request Flow

1. User fills out the form on the homepage (`src/pages/index.tsx` → `CommunityKitForm`)
2. Form submits to `POST /api/generate-request` — validates input, checks rate limits (Redis), creates a `KitRequest` DB record, enqueues a Cloud Task
3. Cloud Task calls `POST /api/generate-images` — launches Puppeteer, renders each brand component as HTML, screenshots them, zips all images, uploads to GCS, emails a signed download URL via Resend
4. `KitRequest` status transitions: `INITIATED` → `PROCESSING` → `CREATED` (or `FAILED`)

## Project Structure

```
src/
├── components/
│   ├── brand/                  # Image generation components (server-rendered to HTML)
│   │   ├── bevy-banner/        # Bevy platform banner
│   │   ├── blog-cover/         # Blog cover images (1024x512, 2500x744)
│   │   ├── email-header/       # Email header images
│   │   ├── landing-banners/    # Landing page banners (640x500, 1440x499, 2500x471)
│   │   ├── linkedin/           # LinkedIn banner
│   │   ├── logo/               # Logo variants (horizontal, stacked)
│   │   ├── twitter/            # Twitter/X banner
│   │   └── website-banners/    # Website banners (640x500, 1440x499, 2500x471)
│   ├── ui/                     # shadcn/ui components (button, card, form, input, label, select)
│   └── community-kit-form.tsx  # Main user-facing form
├── lib/
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
├── pages/
│   ├── _app.tsx                # App wrapper (Sonner toast provider)
│   ├── _document.tsx           # HTML document setup
│   ├── index.tsx               # Homepage
│   └── api/
│       ├── generate-request.ts # Validates input, creates DB record, enqueues task
│       └── generate-images.ts  # Generates images via Puppeteer, zips, uploads, emails
├── styles/
│   ├── globals.css             # Tailwind config, CSS variables, Google color tokens
│   └── fonts.css               # Google Sans font-face declarations
├── types/
│   ├── Color.ts                # EnumColorVariant, EnumColorHex
│   ├── Config.ts               # ImageGenerationConfig type
│   └── Image.ts                # ImageDimensions, EnumImageVariant
└── utils/
    ├── db.ts                   # Prisma client singleton
    ├── common/
    │   ├── generationConfigs.ts         # All image variant configurations (~1600 lines)
    │   ├── generateGoogleSansFontStyles.ts  # Font preload/styles for Puppeteer HTML
    │   ├── getPuppeteerBrowser.ts        # Browser launcher
    │   └── kit-request/
    │       ├── getKitRequestDetails.ts   # Fetch request from DB
    │       └── updateKitRequestStatus.ts # Update request status
    ├── emails/
    │   ├── constants/index.ts           # Email style constants
    │   └── templates/kit-generated.tsx   # Kit delivery email (HTML + text)
    └── google/
        ├── storage.ts           # GCS client (base64 credentials → temp file)
        └── tasks.ts             # Cloud Tasks client (base64 credentials → temp file)
```

## Key Conventions

### Code Style

- TypeScript with strict mode
- Path alias: `@/*` maps to `./src/*`
- Named exports for components; default exports for page components and brand generators
- No semicolons are enforced — the codebase uses semicolons consistently
- Double quotes for strings
- Tailwind CSS utility classes for all styling (no CSS modules)

### Brand Components Pattern

Each brand component in `src/components/brand/` follows this pattern:

1. A `CONFIG` object defines pixel positions, font sizes, and layout parameters
2. An `Element` function component renders the brand image using absolute positioning and inline styles
3. A default-exported `getBrand*` function calls `ReactDOMServer.renderToStaticMarkup()` to convert the component to an HTML string, wraps it in a full HTML document with proper viewport dimensions
4. The HTML string is loaded into Puppeteer for screenshot capture

Brand components use base images from `public/images/base/brand/` and overlay dynamic text (community location name) at configured positions. They do NOT use Tailwind — they use inline styles since they render outside the Next.js context.

### Image Generation Configs

`src/utils/common/generationConfigs.ts` defines arrays of `ImageGenerationConfig` objects. Each config specifies:
- `id`, `name`, `folder` — identification and output path
- `colorVariant` — one of: dark, light, blue, green, yellow, red
- `dimensions` — pixel width/height for the viewport
- `fontColor` — hex color for text overlay
- `imageVariant` — normal, custom_image_transparent, or custom_image_url
- `generator` — reference to the brand component function

### Color System

The project uses Google's brand colors defined in `EnumColorHex` and `EnumColorVariant`:
- Primary: blue (#4285f4), green (#34a853), yellow (#f9ab00), red (#ea4335)
- Halftone variants for each primary color
- Pastel variants for each primary color
- Greyscale: white (#f0f0f0), black (#1e1e1e)

Custom Tailwind theme tokens are defined in `globals.css` under `@theme` using the `--color-google-*` naming convention.

### Google Cloud Credentials

Both `storage.ts` and `tasks.ts` decode the `GOOGLE_APPLICATION_CREDENTIALS` env var from base64, write it to a temp file, and use `keyFilename` to authenticate. This pattern is repeated — each creates its own temp file.

### Database

Single model `KitRequest` in PostgreSQL via Prisma. The Prisma client is instantiated as a singleton in `src/utils/db.ts` using the global cache pattern to prevent multiple instances during development hot-reload.

## Environment Variables

Required for the application to function:

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection for rate limiting |
| `BASE_URL` | Application base URL (used for font loading in Puppeteer, email images) |
| `GOOGLE_APPLICATION_CREDENTIALS` | Base64-encoded GCP service account JSON |
| `GOOGLE_CLOUD_PROJECT_ID` | GCP project ID |
| `GOOGLE_CLOUD_TASKS_QUEUE` | Cloud Tasks queue name |
| `GOOGLE_CLOUD_TASKS_LOCATION` | GCP region for Cloud Tasks |
| `GOOGLE_CLOUD_STORAGE_BUCKET` | GCS bucket name for ZIP uploads |
| `CLOUDFLARE_TURNSTILE_SECRET_KEY` | Server-side Turnstile secret |
| `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` | Client-side Turnstile site key |
| `RESEND_API_KEY` | Resend email service API key |
| `NEXT_PUBLIC_GENERATE_REQUEST_API_URL` | Optional API endpoint override |

## Deployment

- GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `main`
- Deploys via SSH to a VM using `appleboy/ssh-action`
- Application runs under PM2 process manager (process name: `gdg-community-kit`)
- Deployment preserves `node_modules` and `.env` files on the VM
- Uses file locking (`/tmp/deploy-gdg-community-kit.lock`) to prevent concurrent deployments

## Adding New Brand Assets

To add a new brand image type:

1. Create a base image in `public/images/base/brand/<type>/<color>/base_image.png` (and optionally `base_image_transparent.png` for custom image variants)
2. Create a component in `src/components/brand/<type>/index.tsx` following the existing pattern (CONFIG, Element, default export generator function)
3. Add `ImageGenerationConfig` entries in `src/utils/common/generationConfigs.ts` for each color variant
4. Import and spread the new config array into `IMAGE_GENERATORS` in `src/pages/api/generate-images.ts`
