/* =====================================================================
   LINKS PAGE CONTENT  (sergiogugliandolo.com opens here)
   ---------------------------------------------------------------------
   Every link:
     title, sub   text (string, or { en, it })
     href         "home" / "braintex" for pages of this site, or a full URL
     icon         name from assets/js/icons.js (brand logos or ui icons)
     image        alternative to icon: a picture (e.g. "img/isaac.webp")
     color        tile background (brand logos use their own color by default)
     ink          icon color on the tile (default white)
     warn         true -> the subtitle is shown in amber
   ===================================================================== */
window.LINKS = {
	title: { en: "Sergio Gugliandolo · Links", it: "Sergio Gugliandolo · Link" },
	description: {
		en: "Mechatronics engineer, co-founder & CPO of BrainTex. All my links: contacts, CV, BrainTex, GitHub and more.",
		it: "Ingegnere meccatronico, co-founder e CPO di BrainTex. Tutti i miei link: contatti, CV, BrainTex, GitHub e altro.",
	},
	role: {
		en: "Mechatronics engineer, co-founder & CPO at BrainTex. I build robots, products and the occasional questionable lamp.",
		it: "Ingegnere meccatronico, co-founder e CPO di BrainTex. Costruisco robot, prodotti e ogni tanto qualche lampada discutibile.",
	},
	nowPill: { en: "<strong>Now:</strong> building BrainTex", it: "<strong>Adesso:</strong> sto costruendo BrainTex" },
	showQR: { en: "QR code", it: "QR code" },
	share: { en: "Share", it: "Condividi" },
	qrTitle: { en: "Scan to open my links", it: "Inquadra per aprire i miei link" },

	sections: [
		{
			title: { en: "Me", it: "Io" },
			items: [
				{ title: { en: "Website", it: "Sito web" }, sub: { en: "Projects, BrainTex and the rest of me", it: "Progetti, BrainTex e il resto di me" }, href: "home", image: "img/logo.webp" },
				{ title: "CV", sub: { en: "PDF, always up to date (almost)", it: "PDF, sempre aggiornato (quasi)" }, href: "SergioGugliandoloCV.pdf", icon: "file", color: "#e5484d" },
				{ title: "GitHub", sub: { en: "Code, this website included", it: "Codice, compreso questo sito" }, href: "https://github.com/Tizio0o0o0o", icon: "github" },
				{ title: "Instructables", sub: { en: "Some old projects got lots of views there", it: "Alcuni vecchi progetti lì hanno fatto parecchie visite" }, href: "https://www.instructables.com/member/gugliandolosergio/", icon: "instructables", ink: "#1b1b1b" },
			],
		},
		{
			title: { en: "Ventures", it: "Avventure" },
			items: [
				{ title: "BrainTex", sub: { en: "The startup I co-founded · CPO", it: "La startup che ho co-fondato · CPO" }, href: "braintex", image: "img/braintex/logo.webp" },
				{ title: "Team ISAAC", sub: { en: "The university team I led · 2022–2025", it: "Il team universitario che ho guidato · 2022–2025" }, href: "https://linktr.ee/team.ISAAC.polito", image: "img/isaac.webp", color: "#ffffff" },
			],
		},
		{
			title: { en: "Get in touch", it: "Contatti" },
			items: [
				{ title: "Telegram", sub: { en: "The fastest way: I reply within 24 hours", it: "Il modo più veloce: rispondo entro 24 ore" }, href: "https://t.me/Tizio0o0o0o", icon: "telegram" },
				{ title: "Gmail", sub: { en: "I reply within 48 hours", it: "Rispondo entro 48 ore" }, href: "mailto:gugliandolosergio@gmail.com", icon: "gmail" },
				{ title: { en: "PoliTo mail", it: "Mail PoliTo" }, sub: { en: "Politecnico di Torino · within 72 hours", it: "Politecnico di Torino · entro 72 ore" }, href: "mailto:sergio.gugliandolo@studenti.polito.it", icon: "cap", color: "#0b3d6e" },
				{ title: "Cal.com", sub: { en: "Book a coffee chat with me", it: "Prenota due chiacchiere davanti a un caffè" }, href: "https://cal.com/sergiogugliandolo/coffee-chat", icon: "calendar", color: "#292929" },
				{ title: "LinkedIn", sub: { en: "Inbox on fire 🔥 I'll reply… eventually. Sorry!", it: "Inbox in fiamme 🔥 Risponderò… prima o poi. Scusa!" }, href: "https://www.linkedin.com/in/sergio-gugliandolo/", icon: "linkedin", warn: true },
			],
		},
		{
			title: { en: "Buy me a coffee ☕", it: "Offrimi un caffè ☕" },
			items: [
				{ title: "PayPal", sub: { en: "Fuel for paused side projects", it: "Carburante per progetti in pausa" }, href: "https://paypal.me/gugliandolosergio?country.x=IT&locale.x=it_IT", icon: "paypal" },
				{ title: "Satispay", sub: { en: "An espresso, not a latte macchiato", it: "Al bar costa ancora poco, dai" }, href: "https://web.satispay.com/download/qrcode/S6Y-CON--56AE3285-209A-4EDA-8CB5-CDBF22466CD8", icon: "satispay", color: "#ef373f" },
			],
		},
	],
};
