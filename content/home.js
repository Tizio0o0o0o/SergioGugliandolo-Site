/* =====================================================================
   HOME PAGE CONTENT
   ===================================================================== */
window.HOME = {
	title: { en: "Sergio Gugliandolo · Mechatronics engineer", it: "Sergio Gugliandolo · Ingegnere meccatronico" },
	description: {
		en: "Mechatronics engineer, co-founder & CPO of BrainTex. Robots, 3D printing, electronics, code, wood, resin and metal: every project is a skill.",
		it: "Ingegnere meccatronico, co-founder e CPO di BrainTex. Robot, stampa 3D, elettronica, codice, legno, resina e metallo: ogni progetto è una skill.",
	},
	eyebrow: { en: "Mechatronics engineer · Co-founder @ BrainTex", it: "Ingegnere meccatronico · Co-founder @ BrainTex" },

	// "I build things that ___" — the words rotate with a typing effect
	rotatorPrefix: { en: "I build things that", it: "Costruisco cose che" },
	rotatorWords: {
		en: ["move.", "sense.", "think.", "come out of a 3D printer.", "(occasionally) work."],
		it: ["si muovono.", "sentono.", "pensano.", "escono da una stampante 3D.", "(a volte) funzionano."],
	},
	intro: {
		en: "Biomedical engineer turned mechatronics engineer. I love the moment a drawing becomes an object, and the one right after, when the object doesn't work and I have to find out why.",
		it: "Ingegnere biomedico diventato ingegnere meccatronico. Amo il momento in cui un disegno diventa un oggetto, e quello subito dopo, quando l'oggetto non funziona e devo capire perché.",
	},
	ctaProjects: { en: "See the projects", it: "Guarda i progetti" },
	ctaLinks: { en: "Links & contacts", it: "Link e contatti" },

	// the photo, drawn like a technical drawing
	photoAlt: { en: "Sergio at his desk, a robot open in CAD", it: "Sergio alla scrivania, con un robot aperto nel CAD" },
	dimTop: { en: "1 engineer", it: "1 ingegnere" },
	dimSide: { en: "100% curiosity", it: "100% curiosità" },
	titleBlock: {
		drawn: { en: "Drawn by", it: "Disegnato da" },
		scale: { en: "Scale", it: "Scala" },
		rev: { en: "Rev.", it: "Rev." },
		caption: {
			en: "FIG. 1 — Engineer in his natural habitat. CAD open, coffee nearby.",
			it: "FIG. 1 — Ingegnere nel suo habitat naturale. CAD aperto, caffè a portata di mano.",
		},
	},

	/* ---------- "Now" section ---------- */
	nowEyebrow: { en: "What I'm doing now", it: "Cosa faccio adesso" },
	nowTitle: { en: "Co-founder & CPO at BrainTex", it: "Co-founder e CPO di BrainTex" },
	nowText: {
		en: "We teach machines to spot defects in fabric, the kind a trained eye would miss. I take care of the hardware that has to survive the factory floor, the patents, the servers and a good share of everything else a young startup needs.",
		it: "Insegniamo alle macchine a trovare i difetti nei tessuti, anche quelli che sfuggono a un occhio esperto. Io mi occupo dell'hardware che deve sopravvivere in fabbrica, dei brevetti, dei server e di buona parte di tutto il resto che serve a una giovane startup.",
	},
	nowCta: { en: "Discover BrainTex", it: "Scopri BrainTex" },
	scanHud: { en: "SCANNING FABRIC…", it: "ANALISI TESSUTO…" },

	/* ---------- about ---------- */
	aboutEyebrow: { en: "About me", it: "Chi sono" },
	aboutTitle: { en: "Learning by building", it: "Imparare costruendo" },
	about: {
		en: [
			"Hi, I'm Sergio. Sicilian, living in Turin, mechatronics engineer with a biomedical degree in my back pocket.",
			"I learn by building: first badly, then a bit better, then (sometimes) well. My projects mix 3D printing, electronics, code, wood, resin and metal, and each one taught me something no book could.",
			"These days most of my energy goes into BrainTex, the startup I co-founded. Before that I spent three years in Team ISAAC, building search-and-rescue robots with 35+ other students and, eventually, leading them.",
			"My other projects are paused, not abandoned. They're waiting for a free weekend. Any day now.",
		],
		it: [
			"Ciao, sono Sergio. Siciliano trapiantato a Torino, ingegnere meccatronico con una laurea in biomedica nel taschino.",
			"Imparo costruendo: prima male, poi un po' meglio, poi (a volte) bene. I miei progetti mescolano stampa 3D, elettronica, codice, legno, resina e metallo, e ognuno mi ha insegnato qualcosa che nessun libro poteva insegnarmi.",
			"Oggi quasi tutte le mie energie vanno in BrainTex, la startup che ho co-fondato. Prima ho passato tre anni nel Team ISAAC, costruendo robot per il soccorso con più di 35 altri studenti e, alla fine, guidandoli.",
			"Gli altri progetti sono in pausa, non abbandonati. Aspettano un weekend libero. Arriverà, prima o poi.",
		],
	},
	sumLabel: { en: "My skills?", it: "Le mie competenze?" },
	sumValue: { en: "−0.08(3)", it: "−0,08(3)" },
	sumTry: { en: "…or at least I try. Click to find out why.", it: "…o almeno ci provo. Clicca per scoprire perché." },
	stats: [
		{ value: "{projects}", label: { en: "projects, each one a lesson", it: "progetti, ognuno una lezione" } },
		{ value: "35+", label: { en: "teammates led at Team ISAAC", it: "compagni guidati nel Team ISAAC" } },
		{ value: "1", label: { en: "startup co-founded (so far)", it: "startup co-fondata (per ora)" } },
		{ value: { en: "1.5", it: "1,5" }, label: { en: "engineering degrees (the .5 is still loading)", it: "lauree in ingegneria (lo 0,5 sta ancora caricando)" } },
	],

	/* ---------- selected projects ----------
	   which ones: put  home: true  on them in content/projects.js */
	selEyebrow: { en: "Selected projects", it: "Progetti scelti" },
	selTitle: { en: "Every project taught me something", it: "Ogni progetto mi ha insegnato qualcosa" },
	selText: {
		en: "Here are three. The others are on the projects page, sorted by the skill they taught me.",
		it: "Eccone tre. Gli altri sono nella pagina progetti, divisi per la skill che mi hanno insegnato.",
	},
	selSkills: { en: "Browse by skill", it: "Sfoglia per skill" },
	selCta: { en: "All projects", it: "Tutti i progetti" },

	/* ---------- timeline (oldest first) ---------- */
	pathEyebrow: { en: "Path", it: "Percorso" },
	pathTitle: { en: "How I got here", it: "Come sono arrivato qui" },
	timeline: [
		{
			when: { en: "2019 → 2023", it: "2019 → 2023" },
			title: { en: "B.Sc. Biomedical Engineering", it: "Laurea triennale in Ingegneria Biomedica" },
			where: { en: "Politecnico di Torino", it: "Politecnico di Torino" },
			text: {
				en: "Thesis on diagnosing and treating conduction blocks in motor nerves. So yes, I know exactly how to get on your nerves. Scientifically.",
				it: "Tesi sui blocchi di conduzione nei nervi motori. Quindi sì, so esattamente come farti saltare i nervi. Scientificamente.",
			},
		},
		{
			when: { en: "2022 → 2025", it: "2022 → 2025" },
			title: { en: "Team ISAAC", it: "Team ISAAC" },
			where: { en: "Team leader & Head of mechanics", it: "Team leader e responsabile meccanica" },
			text: {
				en: "Search-and-rescue robots with 35+ students, from the first prototype to Maker Faire Rome.",
				it: "Robot per il soccorso con oltre 35 studenti, dal primo prototipo alla Maker Faire di Roma.",
			},
		},
		{
			when: { en: "2023 → now", it: "2023 → oggi" },
			title: { en: "M.Sc. Mechatronics Engineering", it: "Laurea magistrale in Ingegneria Meccatronica" },
			where: { en: "Politecnico di Torino", it: "Politecnico di Torino" },
			text: {
				en: "Robotics, robust control, model-based software design and electronics.",
				it: "Robotica, controllo robusto, progettazione software model-based ed elettronica.",
			},
		},
		{
			when: { en: "2024", it: "2024" },
			title: { en: "Startup Academy", it: "Startup Academy" },
			where: { en: "I3P, Turin", it: "I3P, Torino" },
			text: {
				en: "From complete beginner to confident novice entrepreneur. Lessons, pitch simulations and honest mentors.",
				it: "Da principiante assoluto a imprenditore alle prime armi, ma consapevole. Lezioni, simulazioni di pitch e mentor sinceri.",
			},
		},
		{
			when: { en: "2024 → now", it: "2024 → oggi" },
			now: true,
			title: { en: "BrainTex", it: "BrainTex" },
			where: { en: "Co-founder & CPO", it: "Co-founder e CPO" },
			text: {
				en: "AI quality control for textiles. Hardware, patents, servers and a lot of pitching.",
				it: "Controllo qualità tessile con l'IA. Hardware, brevetti, server e tanti pitch.",
			},
		},
	],
	cvCta: { en: "Full CV (PDF)", it: "CV completo (PDF)" },

	/* ---------- contact band ---------- */
	contactEyebrow: { en: "Say hi", it: "Scrivimi" },
	contactTitle: { en: "Let's talk", it: "Parliamone" },
	contactText: {
		en: "Fastest: Telegram. Slower: email. Slowest: LinkedIn (sorry, the inbox is on fire).",
		it: "Il più veloce: Telegram. Più lento: email. Il più lento: LinkedIn (scusa, la inbox è in fiamme).",
	},
	contactAll: { en: "All links", it: "Tutti i link" },
};
