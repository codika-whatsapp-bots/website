# Website SEO/GEO TODO

Everything that still needs to be created, designed, or configured after the initial SEO implementation.

---

## Assets to Create

### OG Image (Social Preview) — `og-image.png` (1200x630px)
- [ ] Design and replace current placeholder
- Used on: Facebook, LinkedIn, Slack, Discord, iMessage link previews
- Format: PNG, max 300KB

**AI Prompt:**
> Create a social media preview image (1200x630px) for a SaaS product called "WhatsApp Bots by Codika". The design should be clean, modern, and professional with a dark green background (#075E54). On the left side, show a stylized WhatsApp chat interface mockup with 3-4 chat bubbles — one from a user asking a question and the bot replying helpfully, showing AI-powered conversation. On the right side, place the text "WhatsApp Bots" in large white serif font and "AI-Powered Community Management" as a subtitle in smaller sans-serif with reduced opacity. Add a small "by Codika" label at the bottom right. Include a subtle green accent (#25D366) as a thin horizontal line or dot separator. The overall feel should be premium, trustworthy, and tech-forward. No stock photos, no people — just clean UI elements and typography. Flat design, no 3D.

### OG Images per Language (optional)
- [ ] `og-image-fr.png`, `og-image-nl.png`, `og-image-es.png`, `og-image-it.png`, `og-image-de.png`
- Would require updating Layout.astro to serve locale-specific images

**AI Prompt (French example — adapt for each language):**
> Same design as the English OG image, but replace text with: "Bots WhatsApp" (title), "Gestion de communaute par IA" (subtitle), "par Codika" (brand). Keep the chat bubbles in French too — user: "Quels sont les prochains evenements ?" / bot: "Voici les 3 prochains evenements de votre communaute...". Same colors, same layout, same dimensions (1200x630px).

### Apple Touch Icon — `apple-touch-icon.png` (180x180px)
- [ ] Design and replace current placeholder
- No transparency, iOS adds its own corner rounding
- Format: PNG, no alpha channel

**AI Prompt:**
> Create an app icon (180x180px, square, no rounded corners — the OS handles that) for a WhatsApp bot product. Dark green background (#075E54) filling the entire square. Center a white WhatsApp phone icon (the classic speech bubble with phone handset silhouette). The icon should be slightly smaller than the full square, leaving ~15% padding on each side. Clean, minimal, flat design. No text, no gradients, no shadows. Just the white icon on solid green. PNG format, no transparency.

### Android Chrome Icons — `android-chrome-192x192.png` + `android-chrome-512x512.png`
- [ ] Generate both sizes for PWA support
- [ ] Update `site.webmanifest` with entries

**AI Prompt (512x512, then downscale to 192x192):**
> Create a PWA app icon (512x512px, square) for a WhatsApp bot product. Dark green background (#075E54). Center a white WhatsApp-style speech bubble icon with a phone handset silhouette inside. The icon should have ~20% padding from the edges. Clean, flat, minimal design. No text, no gradients. PNG with no transparency. This will be used as an Android home screen icon and in PWA install prompts.

### Favicon Sizes — `favicon-16x16.png` + `favicon-32x32.png`
- [ ] Generate from existing `favicon.svg`
- These can be auto-generated from the SVG, no AI needed — just run:
  ```bash
  magick favicon.svg -resize 16x16 favicon-16x16.png
  magick favicon.svg -resize 32x32 favicon-32x32.png
  ```

### Safari Pinned Tab — `safari-pinned-tab.svg` (optional)
- [ ] Monochrome SVG version of the logo

**AI Prompt:**
> Create a single-color SVG icon for Safari's pinned tab feature. It must be a pure black (#000000) silhouette on transparent background of a WhatsApp-style speech bubble with a phone handset inside. No fills other than black, no gradients, no colors. Simple, recognizable at 16x16px. SVG format, single path preferred.

---

### Bonus: Blog Post Hero Images (for future blog section)

**AI Prompt template for blog post headers (1200x630px):**
> Create a blog post hero image (1200x630px) for an article titled "[ARTICLE TITLE]". Style: clean, modern, abstract illustration on a light beige background (#F7F7F2). Use dark green (#075E54) and accent green (#25D366) as primary colors. Include subtle geometric shapes or abstract icons related to [TOPIC]. No text on the image — the title will be overlaid by the website. Flat design, editorial illustration style, professional SaaS aesthetic.

---

## Content to Create

### Blog / Content Section
- [ ] Add a `/blog` section for SEO content marketing
  - Articles targeting long-tail keywords (e.g. "whatsapp bot for community management")
  - Use cases, tutorials, product updates
  - Astro Content Collections for blog posts
  - RSS feed (`@astrojs/rss`)

### Legal Pages
- [ ] `/privacy` — Privacy policy (required for GDPR, WhatsApp Business API compliance)
- [ ] `/terms` — Terms of service
- [ ] `/imprint` — Legal notice (required in Belgium/EU)
- [ ] Create these pages in all 6 languages

### Additional Landing Pages
- [ ] `/use-cases/co-living` — Dedicated page targeting co-living market
- [ ] `/use-cases/associations` — Dedicated page targeting associations/non-profits
- [ ] `/use-cases/sports-clubs` — Dedicated page targeting sports clubs
- [ ] `/pricing` — Standalone pricing page (currently only a section)
- [ ] These improve SEO by creating keyword-specific entry points

---

## Configuration & Accounts

### Google Search Console
- [ ] Register the domain in Google Search Console
- [ ] Add verification meta tag to Layout.astro: `<meta name="google-site-verification" content="..." />`
- [ ] Submit sitemap URL: `https://whatsbot.codika.io/sitemap-index.xml`
- [ ] Monitor indexing status and fix any crawl errors

### Google Analytics 4
- [ ] Create GA4 property for the website
- [ ] Add GA4 tracking script to Layout.astro (or use Astro integration)
- [ ] Set up conversion events: Calendly clicks, apply form submissions, CTA clicks
- [ ] Configure goals: demo bookings, apply form completions

### Bing Webmaster Tools
- [ ] Register in Bing Webmaster Tools
- [ ] Add verification meta tag
- [ ] Submit sitemap

### Social Media Profiles
- [ ] Create/verify `twitter:site` meta tag (add Twitter/X handle if exists)
- [ ] Verify LinkedIn company page URL in structured data

---

## Domain & Hosting

### Domain
- [ ] Confirm and configure production domain (currently placeholder: `whatsbot.codika.io`)
- [ ] Update `site` in `astro.config.mjs` with final domain
- [ ] Set up SSL certificate
- [ ] Configure www → non-www redirect (or vice versa)

### Headers & Caching
- [ ] Add security headers (via hosting platform config or `_headers` file):
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (basic policy)
- [ ] Configure cache headers:
  - Static assets (`_astro/*`): `Cache-Control: public, max-age=31536000, immutable`
  - HTML pages: `Cache-Control: public, max-age=3600`
  - Images: `Cache-Control: public, max-age=604800`

### Redirects
- [ ] Add `_redirects` file if using Netlify/Cloudflare Pages
- [ ] Or configure redirects in hosting platform dashboard

---

## Structured Data Enhancements

### Review/Testimonials Schema
- [ ] Add `Review` or `AggregateRating` schema to Testimonials component
  - Requires real testimonials with names and ratings (not placeholders)
  - Enables star ratings in Google search results

### BreadcrumbList Schema
- [ ] Add breadcrumb structured data for sub-pages (apply, blog posts, use cases)
  - Home > Apply, Home > Blog > Article Title, etc.

### LocalBusiness Schema
- [ ] If targeting local markets, add `LocalBusiness` schema with:
  - Address (Belgium)
  - Phone number
  - Operating hours
  - Service areas

---

## Accessibility Improvements

- [ ] Add skip-to-content link at top of Navigation component
- [ ] Audit color contrast ratios against WCAG AA standards
- [ ] Test keyboard navigation flow through all interactive elements
- [ ] Add `aria-current="page"` to active navigation links

---

## Performance Optimization

- [ ] Preload critical font files (Instrument Serif) with `<link rel="preload">`
- [ ] Consider self-hosting Google Fonts for privacy and performance
- [ ] Add `fetchpriority="high"` to above-the-fold images
- [ ] Audit with Lighthouse and fix any issues
- [ ] Test Core Web Vitals (LCP, FID, CLS) with PageSpeed Insights

---

## Monitoring & Validation

- [ ] Validate structured data at https://validator.schema.org
- [ ] Test with Google Rich Results Test
- [ ] Test social previews with Facebook Sharing Debugger
- [ ] Test social previews with Twitter/X Card Validator
- [ ] Test social previews with LinkedIn Post Inspector
- [ ] Monitor Google Search Console for indexing issues
- [ ] Set up uptime monitoring for the website
