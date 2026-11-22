/* =====================================================================
   SITE-WIDE CONTENT
   Every text has an English (en) and Italian (it) version.
   They don't need to be literal translations: jokes can (and should)
   change between languages.
   ===================================================================== */
window.SITE = {
	repo: "https://github.com/Tizio0o0o0o/SergioGugliandolo-Site",
	siteUrl: "https://sergiogugliandolo.com",

	/* ---------- top menu ---------- */
	nav: [
		{ id: "home", href: "home", label: { en: "Home", it: "Home" } },
		{ id: "projects", href: "projects", label: { en: "Projects", it: "Progetti" } },
		{ id: "links", href: "links", label: { en: "Links", it: "Link" } },
	],

	/* ---------- icons in the footer ---------- */
	social: [
		{ icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-gugliandolo/" },
		{ icon: "github", label: "GitHub", href: "https://github.com/Tizio0o0o0o" },
		{ icon: "telegram", label: "Telegram", href: "https://t.me/Tizio0o0o0o" },
		{ icon: "mail", label: "Email", href: "mailto:gugliandolosergio@gmail.com" },
	],

	/* ---------- project status labels ---------- */
	status: {
		wip: {
			label: { en: "In progress", it: "In corso" },
			hint: { en: "Happening right now", it: "Sta succedendo adesso" },
		},
		paused: {
			label: { en: "Paused", it: "In pausa" },
			hint: { en: "Parked, not abandoned. The engine is still warm.", it: "Parcheggiato, non abbandonato. Il motore è ancora caldo." },
		},
		done: {
			label: { en: "Done", it: "Finito" },
			hint: { en: "Finished. Yes, it happens.", it: "Finito. Sì, ogni tanto succede." },
		},
		solo: {
			label: { en: "Rolling on its own", it: "Cammina con le sue gambe" },
			hint: {
				en: "I pushed it as far as I could. Now it's mature enough to keep going without me.",
				it: "L'ho spinto più lontano che potevo. Ora è abbastanza maturo da andare avanti senza di me.",
			},
		},
	},

	/* ---------- skill families (used for the filters) ---------- */
	skills: {
		print3d: { en: "3D printing", it: "Stampa 3D" },
		cad: { en: "CAD & design", it: "CAD e progettazione" },
		electronics: { en: "Electronics", it: "Elettronica" },
		code: { en: "Programming", it: "Programmazione" },
		wood: { en: "Wood & resin", it: "Legno e resina" },
		metal: { en: "Metalworking", it: "Lavorazione metalli" },
		team: { en: "Teamwork & leadership", it: "Team e leadership" },
		clients: { en: "Real clients", it: "Clienti veri" },
		startup: { en: "Startup life", it: "Vita da startup" },
	},

	/* ---------- small interface texts ---------- */
	ui: {
		skip: { en: "Skip to content", it: "Vai al contenuto" },
		menu: { en: "Menu", it: "Menu" },
		language: { en: "Language", it: "Lingua" },
		toDark: { en: "Switch to dark theme", it: "Passa al tema scuro" },
		toLight: { en: "Switch to light theme", it: "Passa al tema chiaro" },
		backToTop: { en: "Back to top", it: "Torna su" },
		close: { en: "Close", it: "Chiudi" },
		prev: { en: "Previous", it: "Precedente" },
		next: { en: "Next", it: "Successivo" },
		copied: { en: "Link copied!", it: "Link copiato!" },
		copyThis: { en: "Copy this link:", it: "Copia questo link:" },
		skillUnlocked: { en: "Skill unlocked", it: "Skill sbloccata" },
		footerLine: {
			en: "Mechatronics engineer. Co-founder & CPO at BrainTex. Turin, Italy.",
			it: "Ingegnere meccatronico. Co-founder e CPO di BrainTex. Torino.",
		},
		footerJoke: {
			en: "No frameworks were harmed in the making of this website.",
			it: "Nessun framework è stato maltrattato durante la realizzazione di questo sito.",
		},
		footerSource: { en: "Source code on GitHub · help welcome", it: "Codice su GitHub · aiuti benvenuti" },
		footerCV: { en: "Download my CV (PDF)", it: "Scarica il mio CV (PDF)" },

		// project pages
		allProjects: { en: "Projects", it: "Progetti" },
		whatILearned: { en: "What I learned", it: "Cosa ho imparato" },
		open3d: { en: "Open the 3D model", it: "Apri il modello 3D" },
		open3dHint: { en: "Fusion 360 viewer, new tab", it: "Visualizzatore Fusion 360, nuova scheda" },
		downloadPdf: { en: "Download the PDF", it: "Scarica il PDF" },
		sourceCode: { en: "Source code on GitHub", it: "Codice sorgente su GitHub" },
		peekCode: { en: "Peek at the code", it: "Sbircia il codice" },
		loading: { en: "Loading…", it: "Caricamento…" },
		loadError: { en: "Couldn't load the code. It's on GitHub anyway!", it: "Non sono riuscito a caricare il codice. Tanto è su GitHub!" },
		versionsTitle: { en: "Every version, every mistake", it: "Ogni versione, ogni errore" },
		problemsFound: { en: "Problems I found", it: "Problemi trovati" },
		nextVersion: { en: "Next version", it: "Versione successiva" },
		prevProject: { en: "Previous", it: "Precedente" },
		nextProject: { en: "Next", it: "Successivo" },
		zoom: { en: "Open full screen", it: "Apri a schermo intero" },
		notFound: { en: "Project not found.", it: "Progetto non trovato." },
	},

	/* ---------- projects page ---------- */
	projectsPage: {
		title: { en: "Projects · Sergio Gugliandolo", it: "Progetti · Sergio Gugliandolo" },
		description: {
			en: "One project, one skill: robots, 3D printing, electronics, code, wood, resin and metal. Biggest builds first.",
			it: "Un progetto, una skill: robot, stampa 3D, elettronica, codice, legno, resina e metallo. Prima i progetti più grossi.",
		},
		eyebrow: { en: "Workshop log", it: "Diario d'officina" },
		heading: { en: "One project, one skill", it: "Un progetto, una skill" },
		lead: {
			en: "Every project here taught me at least one thing. Biggest builds first, weekend projects last. Pick a skill to filter, or just scroll and judge.",
			it: "Ogni progetto qui mi ha insegnato almeno una cosa. Prima i progetti più grossi, in fondo quelli da weekend. Scegli una skill per filtrare, o scorri e giudica.",
		},
		all: { en: "All", it: "Tutti" },
		more: {
			en: 'More projects are hiding somewhere around here. <a href="{blank}">Want to see them?</a>',
			it: 'Altri progetti si nascondono da qualche parte. <a href="{blank}">Vuoi vederli?</a>',
		},
	},

	/* ---------- 404 and the "secret" page ---------- */
	errors: {
		notFound: {
			title: { en: "404 · Page not found", it: "404 · Pagina non trovata" },
			heading: { en: "This page is on pause.", it: "Questa pagina è in pausa." },
			text: {
				en: "Like half of my side projects. It might come back one day, but don't hold your breath.",
				it: "Come metà dei miei progetti. Forse un giorno tornerà, ma non trattenere il respiro.",
			},
		},
		blank: {
			title: { en: "Nothing here yet", it: "Niente qui, per ora" },
			heading: { en: "Nothing here yet. What were you looking for?", it: "Ancora niente qui. Cosa stavi cercando?" },
			text: {
				en: "While you're here, enjoy this totally unrelated video. Unmute it for the full experience 🔊",
				it: "Già che ci sei, goditi questo video che non c'entra niente. Alza il volume per l'esperienza completa 🔊",
			},
		},
		home: { en: "Go home", it: "Torna alla home" },
		projects: { en: "See the projects", it: "Guarda i progetti" },
	},
};
