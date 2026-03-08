import { ui, defaultLang, type Lang } from './ui';

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
 * Get the alternate locale (for language switcher with 2 languages).
 */
export function getAlternateLang(lang: Lang): Lang {
	return lang === 'en' ? 'fr' : 'en';
}
