export const languages = {
	en: 'English',
	fr: 'Français',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
	en: {
		'site.title': 'WhatsApp Bots by Codika',
		'site.description':
			'AI-powered WhatsApp bots for community management. Automate messaging, events, and member engagement.',
		'nav.home': 'Home',
		'nav.features': 'Features',
		'nav.pricing': 'Pricing',
		'nav.contact': 'Contact',
		'hero.title': 'AI-Powered WhatsApp Bots for Your Community',
		'hero.subtitle':
			'Automate member management, events, messaging, and more — all through WhatsApp.',
		'hero.cta': 'Get Started',
		'hero.cta.secondary': 'See Demo',
		'lang.switch': 'FR',
	},
	fr: {
		'site.title': 'Bots WhatsApp par Codika',
		'site.description':
			'Bots WhatsApp propulsés par l\'IA pour la gestion de communauté. Automatisez la messagerie, les événements et l\'engagement des membres.',
		'nav.home': 'Accueil',
		'nav.features': 'Fonctionnalités',
		'nav.pricing': 'Tarifs',
		'nav.contact': 'Contact',
		'hero.title': 'Bots WhatsApp propulsés par l\'IA pour votre communauté',
		'hero.subtitle':
			'Automatisez la gestion des membres, événements, messagerie et plus — le tout via WhatsApp.',
		'hero.cta': 'Commencer',
		'hero.cta.secondary': 'Voir la démo',
		'lang.switch': 'EN',
	},
} as const;
