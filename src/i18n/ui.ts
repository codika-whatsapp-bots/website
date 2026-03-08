export const languages = {
	en: 'English',
	fr: 'Francais',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
	en: {
		// Site
		'site.title': 'WhatsApp Bots by Codika — AI-Powered Community Management',
		'site.description':
			'Custom AI-powered WhatsApp bots for community management. Automate messaging, events, members, and more — with a full admin dashboard.',

		// Navigation
		'nav.home': 'Home',
		'nav.features': 'Features',
		'nav.howItWorks': 'How it works',
		'nav.useCases': 'Use cases',
		'nav.cta': 'Book a demo',
		'lang.switch': 'FR',

		// Hero
		'hero.title.line1': 'Your community,',
		'hero.title.line2': 'automated on WhatsApp',
		'hero.subtitle':
			'We build custom AI-powered WhatsApp bots that manage your members, answer questions, handle events, and send notifications — so you can focus on what matters.',
		'hero.cta': 'Book a demo',
		'hero.cta.secondary': 'See how it works',

		// Hero chat mockup
		'hero.chat.user1': 'When is the next community event?',
		'hero.chat.bot1': 'The next event is "Spring Meetup" on March 22nd at 7 PM. Would you like me to register you?',
		'hero.chat.user2': 'Yes, sign me up!',
		'hero.chat.bot2': "Done! You're registered. I'll send you a reminder the day before.",

		// Social proof
		'socialProof.stat1.number': '30+',
		'socialProof.stat1.label': 'AI-powered tools',
		'socialProof.stat2.number': '59',
		'socialProof.stat2.label': 'Automated workflows',
		'socialProof.stat3.number': '100%',
		'socialProof.stat3.label': 'Official WhatsApp API',

		// Features
		'features.eyebrow': 'Features',
		'features.title': 'Everything your community needs, built into WhatsApp',
		'features.1.title': 'AI-Powered Bot',
		'features.1.description':
			'Intelligent agents that understand context, remember conversations, and route queries based on member roles — admin, resident, or community.',
		'features.2.title': 'Community Management',
		'features.2.description':
			'Manage members, organizations, events, invitations, and feedback — all through natural WhatsApp conversations with the bot.',
		'features.3.title': 'Smart Knowledge Base',
		'features.3.description':
			'Connect your Notion docs, Google Drive, or any data source. The bot answers questions by searching your synced knowledge base automatically.',
		'features.4.title': 'Admin Dashboard',
		'features.4.description':
			'A full management interface to oversee members, messages, broadcasts, events, templates, and community analytics.',
		'features.5.title': 'Official WhatsApp API',
		'features.5.description':
			'Built on Twilio and Meta\'s official WhatsApp Business API. Legal, stable, and production-ready with template messaging and broadcast support.',
		'features.6.title': 'Group Chat Support',
		'features.6.description':
			'Optionally extend the bot to WhatsApp groups with our self-hosted connector. The bot responds when mentioned, right in your group conversations.',

		// How it works
		'howItWorks.eyebrow': 'How it works',
		'howItWorks.title': 'From idea to live bot in days, not months',
		'howItWorks.1.number': '01',
		'howItWorks.1.title': 'Tell us about your community',
		'howItWorks.1.description':
			'We understand your members, your workflows, and the questions they ask. You share your knowledge base and we map out the bot\'s capabilities.',
		'howItWorks.2.number': '02',
		'howItWorks.2.title': 'We build your bot',
		'howItWorks.2.description':
			'Our platform generates a custom AI agent with your knowledge base, tools, and member roles. We set up the workflows, the dashboard, and the WhatsApp integration.',
		'howItWorks.3.number': '03',
		'howItWorks.3.title': 'Launch and manage',
		'howItWorks.3.description':
			'Your bot goes live on your official WhatsApp Business number. You control everything from the admin dashboard — members, messages, events, and more.',

		// Use cases
		'useCases.eyebrow': 'Use cases',
		'useCases.title': 'Built for communities of all kinds',
		'useCases.1.title': 'Associations & Nonprofits',
		'useCases.1.bullet1': 'Automated member onboarding and invitations',
		'useCases.1.bullet2': 'Event reminders with instant RSVP via WhatsApp',
		'useCases.1.bullet3': 'FAQ bot connected to your association\'s documents',
		'useCases.2.title': 'Co-working & Communities',
		'useCases.2.bullet1': 'Announcements and targeted broadcasts by group',
		'useCases.2.bullet2': 'Feedback collection and suggestion tracking',
		'useCases.2.bullet3': 'Group chat moderation with @bot mentions',
		'useCases.3.title': 'Schools & Training Centers',
		'useCases.3.bullet1': 'Schedule and enrollment inquiries answered instantly',
		'useCases.3.bullet2': 'Parent and student communication hub',
		'useCases.3.bullet3': 'Automated notifications for deadlines and events',

		// Dashboard
		'dashboard.eyebrow': 'Dashboard',
		'dashboard.title': 'Everything in one place',
		'dashboard.description':
			'Your admin dashboard gives you full control over your community and the bot — no technical skills required.',
		'dashboard.bullet1': 'Manage members, organizations, and roles',
		'dashboard.bullet2': 'View and search all conversation history',
		'dashboard.bullet3': 'Send targeted broadcasts and track delivery',
		'dashboard.bullet4': 'Create and manage events with participant tracking',
		'dashboard.bullet5': 'Monitor WhatsApp message templates and approvals',

		// Final CTA
		'finalCta.title': 'Ready to automate your community?',
		'finalCta.subtitle':
			'Book a demo and see how a custom WhatsApp bot can transform how you manage your community.',
		'finalCta.cta': 'Book a demo',

		// Footer
		'footer.tagline': 'AI-powered WhatsApp bots for communities',
		'footer.product': 'Product',
		'footer.product.features': 'Features',
		'footer.product.howItWorks': 'How it works',
		'footer.product.useCases': 'Use cases',
		'footer.company': 'Company',
		'footer.company.contact': 'Contact',
		'footer.company.codika': 'Codika',
		'footer.legal': 'Legal',
		'footer.legal.privacy': 'Privacy',
		'footer.legal.terms': 'Terms',
		'footer.copyright': '2026 Codika. All rights reserved.',
	},
	fr: {
		// Site
		'site.title': 'Bots WhatsApp par Codika — Gestion de communaute par IA',
		'site.description':
			'Bots WhatsApp sur mesure propulses par l\'IA pour la gestion de communaute. Automatisez la messagerie, les evenements, les membres et plus — avec un tableau de bord complet.',

		// Navigation
		'nav.home': 'Accueil',
		'nav.features': 'Fonctionnalites',
		'nav.howItWorks': 'Comment ca marche',
		'nav.useCases': 'Cas d\'usage',
		'nav.cta': 'Reserver une demo',
		'lang.switch': 'EN',

		// Hero
		'hero.title.line1': 'Votre communaute,',
		'hero.title.line2': 'automatisee sur WhatsApp',
		'hero.subtitle':
			'Nous creons des bots WhatsApp sur mesure, propulses par l\'IA, qui gerent vos membres, repondent aux questions, organisent les evenements et envoient des notifications — pour que vous puissiez vous concentrer sur l\'essentiel.',
		'hero.cta': 'Reserver une demo',
		'hero.cta.secondary': 'Comment ca marche',

		// Hero chat mockup
		'hero.chat.user1': 'C\'est quand le prochain evenement ?',
		'hero.chat.bot1': 'Le prochain evenement est le "Meetup Printemps" le 22 mars a 19h. Voulez-vous que je vous inscrive ?',
		'hero.chat.user2': 'Oui, inscris-moi !',
		'hero.chat.bot2': 'C\'est fait ! Vous etes inscrit(e). Je vous enverrai un rappel la veille.',

		// Social proof
		'socialProof.stat1.number': '30+',
		'socialProof.stat1.label': 'Outils IA integres',
		'socialProof.stat2.number': '59',
		'socialProof.stat2.label': 'Workflows automatises',
		'socialProof.stat3.number': '100%',
		'socialProof.stat3.label': 'API WhatsApp officielle',

		// Features
		'features.eyebrow': 'Fonctionnalites',
		'features.title': 'Tout ce dont votre communaute a besoin, integre dans WhatsApp',
		'features.1.title': 'Bot propulse par l\'IA',
		'features.1.description':
			'Des agents intelligents qui comprennent le contexte, retiennent les conversations et orientent les demandes selon le role du membre — admin, resident ou communaute.',
		'features.2.title': 'Gestion de communaute',
		'features.2.description':
			'Gerez les membres, organisations, evenements, invitations et retours — le tout par des conversations naturelles sur WhatsApp avec le bot.',
		'features.3.title': 'Base de connaissances',
		'features.3.description':
			'Connectez vos documents Notion, Google Drive ou toute autre source. Le bot repond aux questions en parcourant automatiquement votre base synchronisee.',
		'features.4.title': 'Tableau de bord admin',
		'features.4.description':
			'Une interface complete pour gerer les membres, messages, diffusions, evenements, modeles et statistiques de votre communaute.',
		'features.5.title': 'API WhatsApp officielle',
		'features.5.description':
			'Base sur Twilio et l\'API officielle WhatsApp Business de Meta. Legal, stable et pret pour la production avec messagerie par modeles et diffusions.',
		'features.6.title': 'Support des groupes',
		'features.6.description':
			'Etendez le bot aux groupes WhatsApp avec notre connecteur auto-heberge. Le bot repond quand il est mentionne, directement dans vos conversations de groupe.',

		// How it works
		'howItWorks.eyebrow': 'Comment ca marche',
		'howItWorks.title': 'De l\'idee au bot en production en quelques jours',
		'howItWorks.1.number': '01',
		'howItWorks.1.title': 'Parlez-nous de votre communaute',
		'howItWorks.1.description':
			'Nous comprenons vos membres, vos processus et les questions qu\'ils posent. Vous partagez votre base de connaissances et nous definissons les capacites du bot.',
		'howItWorks.2.number': '02',
		'howItWorks.2.title': 'Nous construisons votre bot',
		'howItWorks.2.description':
			'Notre plateforme genere un agent IA personnalise avec votre base de connaissances, vos outils et les roles de vos membres. Nous configurons les workflows, le tableau de bord et l\'integration WhatsApp.',
		'howItWorks.3.number': '03',
		'howItWorks.3.title': 'Lancez et gerez',
		'howItWorks.3.description':
			'Votre bot est actif sur votre numero WhatsApp Business officiel. Vous controlez tout depuis le tableau de bord — membres, messages, evenements et plus encore.',

		// Use cases
		'useCases.eyebrow': 'Cas d\'usage',
		'useCases.title': 'Concu pour tous types de communautes',
		'useCases.1.title': 'Associations & ONG',
		'useCases.1.bullet1': 'Inscription automatique des membres et invitations',
		'useCases.1.bullet2': 'Rappels d\'evenements avec RSVP instantane via WhatsApp',
		'useCases.1.bullet3': 'Bot FAQ connecte aux documents de votre association',
		'useCases.2.title': 'Coworking & Communautes',
		'useCases.2.bullet1': 'Annonces et diffusions ciblees par groupe',
		'useCases.2.bullet2': 'Collecte de retours et suivi des suggestions',
		'useCases.2.bullet3': 'Moderation des groupes avec mentions @bot',
		'useCases.3.title': 'Ecoles & Centres de formation',
		'useCases.3.bullet1': 'Reponses instantanees aux questions d\'inscription et d\'horaires',
		'useCases.3.bullet2': 'Hub de communication parents-eleves',
		'useCases.3.bullet3': 'Notifications automatiques pour les echeances et evenements',

		// Dashboard
		'dashboard.eyebrow': 'Tableau de bord',
		'dashboard.title': 'Tout au meme endroit',
		'dashboard.description':
			'Votre tableau de bord admin vous donne un controle total sur votre communaute et le bot — aucune competence technique requise.',
		'dashboard.bullet1': 'Gerez les membres, organisations et roles',
		'dashboard.bullet2': 'Consultez et recherchez tout l\'historique des conversations',
		'dashboard.bullet3': 'Envoyez des diffusions ciblees et suivez la livraison',
		'dashboard.bullet4': 'Creez et gerez des evenements avec suivi des participants',
		'dashboard.bullet5': 'Surveillez les modeles de messages WhatsApp et leurs validations',

		// Final CTA
		'finalCta.title': 'Pret a automatiser votre communaute ?',
		'finalCta.subtitle':
			'Reservez une demo et decouvrez comment un bot WhatsApp sur mesure peut transformer la gestion de votre communaute.',
		'finalCta.cta': 'Reserver une demo',

		// Footer
		'footer.tagline': 'Bots WhatsApp propulses par l\'IA pour les communautes',
		'footer.product': 'Produit',
		'footer.product.features': 'Fonctionnalites',
		'footer.product.howItWorks': 'Comment ca marche',
		'footer.product.useCases': 'Cas d\'usage',
		'footer.company': 'Entreprise',
		'footer.company.contact': 'Contact',
		'footer.company.codika': 'Codika',
		'footer.legal': 'Legal',
		'footer.legal.privacy': 'Confidentialite',
		'footer.legal.terms': 'Conditions',
		'footer.copyright': '2026 Codika. Tous droits reserves.',
	},
} as const;
