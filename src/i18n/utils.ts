import { ui, defaultLang, languages, languageFlags, type Lang } from './ui';

/**
 * Get the current language from an Astro locale string.
 * Falls back to defaultLang if the locale is not supported.
 */
export function getLangFromLocale(locale: string | undefined): Lang {
	if (locale && locale in ui) {
		return locale as Lang;
	}
	return defaultLang;
}

/**
 * Returns a translation function for the given language.
 * Usage: const t = useTranslations('fr'); t('hero.title')
 */
export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/**
 * Get the path for a given locale.
 * For the default locale, returns the root path.
 * For other locales, prefixes with the locale code.
 */
export function getLocalePath(lang: Lang, path: string = ''): string {
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;
	if (lang === defaultLang) {
		return `/${cleanPath}`;
	}
	return `/${lang}/${cleanPath}`;
}

/**
 * Get all supported language codes.
 */
export function getAllLanguages(): Lang[] {
	return Object.keys(languages) as Lang[];
}

/**
 * Get all languages except the given one (for language selector).
 */
export function getAlternateLanguages(lang: Lang): Lang[] {
	return getAllLanguages().filter((l) => l !== lang);
}

/**
 * Get the flag image path for a language.
 */
export function getLanguageFlag(lang: Lang): string {
	return languageFlags[lang];
}

/**
 * Get the display name for a language.
 */
export function getLanguageLabel(lang: Lang): string {
	return languages[lang];
}
