/* =====================================================================
   QR PAGE CONTENT
   This page is unlisted: it's not in the menu, the footer or the sitemap,
   and search engines are asked not to index it. Reach it at /QR.
   The QR codes are generated in the browser from "vcards" below:
   edit your details there and every QR updates.
   ===================================================================== */
window.QRPAGE = {
	/* ---------- contact cards ----------
	   Edit these and the QR codes update automatically.
	   They live only in this file, so your phone number is NOT loaded on the other pages. */
	vcards: {
		personal: {
			firstName: "Sergio",
			lastName: "Gugliandolo",
			email: "gugliandolosergio@gmail.com",
			url: "https://sergiogugliandolo.com",
			city: "Torino",
			country: "Italia",
		},
		personalFull: {
			firstName: "Sergio",
			lastName: "Gugliandolo",
			email: "gugliandolosergio@gmail.com",
			phone: "+39 349 708 9323",
			url: "https://sergiogugliandolo.com",
			city: "Torino",
			country: "Italia",
		},
		braintex: {
			firstName: "Sergio",
			lastName: "Gugliandolo",
			org: "BrainTex S.r.l.",
			title: "Co-founder & CPO",
			email: "sergio.gugliandolo@braintex.it",
			phone: "+39 349 708 9323",
			url: "https://braintex.it",
		},
	},

	title: { en: "QR codes · Sergio Gugliandolo", it: "QR code · Sergio Gugliandolo" },
	eyebrow: { en: "Scan me", it: "Inquadrami" },
	heading: { en: "QR codes", it: "QR code" },
	lead: {
		en: "Tap a code to show it full screen (handy when someone wants to scan it from your phone). You can also save the contact straight to your address book, or download the image.",
		it: "Tocca un codice per mostrarlo a schermo intero (comodo quando qualcuno deve inquadrarlo dal tuo telefono). Puoi anche salvare il contatto direttamente in rubrica, o scaricare l'immagine.",
	},
	save: { en: "Save contact", it: "Salva contatto" },
	png: { en: "PNG", it: "PNG" },
	open: { en: "Open", it: "Apri" },
	share: { en: "Share", it: "Condividi" },
	cards: [
		{
			type: "url",
			url: "https://sergiogugliandolo.com",
			title: { en: "This website", it: "Questo sito" },
			text: { en: "Opens my links page. The one to put on slides and posters.", it: "Apre la pagina dei miei link. Quello da mettere su slide e poster." },
		},
		{
			type: "vcard",
			vcard: "personal",
			title: { en: "Contact · minimal", it: "Contatto · essenziale" },
			text: { en: "Name, email and website. No phone number.", it: "Nome, email e sito. Niente numero di telefono." },
		},
		{
			type: "vcard",
			vcard: "personalFull",
			title: { en: "Contact · full", it: "Contatto · completo" },
			text: { en: "Everything, phone number included.", it: "Tutto, compreso il numero di telefono." },
		},
		{
			type: "vcard",
			vcard: "braintex",
			title: { en: "BrainTex", it: "BrainTex" },
			text: { en: "My work contact as Co-founder & CPO.", it: "Il mio contatto di lavoro da Co-founder e CPO." },
		},
	],
};
