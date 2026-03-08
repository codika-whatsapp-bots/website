# WhatsApp Bots Website

Landing page for the Codika WhatsApp Bots product.

**Stack:** Astro 5 + TypeScript (strict)
**Repo:** `codika-whatsapp-bots/website`

## i18n

The site supports multiple languages using Astro's built-in i18n routing.

**Languages:** English (default), French
**Routing:** `/` = English, `/fr/` = French (default locale has no prefix)

### Key Files

| File | Purpose |
|------|---------|
| `src/i18n/ui.ts` | All translation strings (typed). Single source of truth |
| `src/i18n/utils.ts` | Helpers: `useTranslations()`, `getLocalePath()`, `getLangFromLocale()`, `getAlternateLang()` |
| `astro.config.mjs` | i18n config (locales, defaultLocale) |

### Workflow

1. **Build pages in English first** — design, iterate, finalize content
2. **Never hardcode text in components** — always use `t('key.name')` from `useTranslations()`
3. **Add keys to `src/i18n/ui.ts`** — English first, then French
4. **Create the French page** — add the corresponding file under `src/pages/fr/`. The page itself is minimal (just imports the same layout/components). The locale is detected automatically via `Astro.currentLocale`

### Adding a New Page

```
# 1. Create English page
src/pages/pricing.astro

# 2. Create French page (same structure, locale auto-detected)
src/pages/fr/pricing.astro

# 3. Add any new strings to src/i18n/ui.ts (both en and fr)
```

### Adding a New Language

1. Add the locale to `astro.config.mjs` → `i18n.locales`
2. Add the language to `languages` in `src/i18n/ui.ts`
3. Add the translation object (copy `en` keys and translate)
4. Create the page folder `src/pages/<locale>/`
5. Update `getAlternateLang()` in `utils.ts` if more than 2 languages (switch to a dropdown or cycle logic)

### Using Translations in Components

```astro
---
import { getLangFromLocale, useTranslations, getLocalePath } from '../i18n/utils';

const lang = getLangFromLocale(Astro.currentLocale);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
<a href={getLocalePath(lang, 'pricing')}>{t('nav.pricing')}</a>
```

### Conventions

- All user-facing text goes through `t()` — no exceptions
- Translation keys use dot notation grouped by section: `hero.title`, `nav.home`, `pricing.plan.pro`
- The Layout component handles `<html lang>` and `hreflang` tags automatically
- Keep `ui.ts` organized: group keys by page/section with comments if it grows large
- When editing English copy, always update the French translation in the same commit
