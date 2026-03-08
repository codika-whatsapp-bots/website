/**
 * Calendly popup integration service.
 *
 * Centralizes the Calendly URL, brand colors, and popup trigger so every
 * CTA across the site opens a consistently-styled scheduling modal.
 */

declare global {
	interface Window {
		Calendly?: {
			initPopupWidget(options: {
				url: string;
				prefill?: { name?: string; email?: string };
			}): void;
		};
	}
}

const CALENDLY_URL =
	'https://calendly.com/d/cw7n-35f-tpb/codika-team-20-minute-meeting';

const BRAND_PARAMS = new URLSearchParams({
	primary_color: '075E54',
	text_color: '111113',
	background_color: 'F7F7F2',
	hide_gdpr_banner: '1',
});

export interface CalendlyOptions {
	name?: string;
	email?: string;
}

export function openCalendly(options?: CalendlyOptions): void {
	if (!window.Calendly) {
		// Fallback: open in a new tab if the widget script hasn't loaded
		window.open(`${CALENDLY_URL}?${BRAND_PARAMS}`, '_blank');
		return;
	}

	window.Calendly.initPopupWidget({
		url: `${CALENDLY_URL}?${BRAND_PARAMS}`,
		prefill: options,
	});
}
