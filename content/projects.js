/* =====================================================================
   PROJECTS
   ---------------------------------------------------------------------
   The order here is the order on the website: biggest builds first,
   weekend projects last (it works as a timeline without dates).

   Every project:
     id        folder name in /projects and name of projects/<id>.html
     home      optional: true = also shown in "Selected projects" on the home page
     status    "wip" (in progress) | "paused" | "done" | "closed"
     years     optional, e.g. "2024 →" or "2022 – 2025"
     tags      skill families from content/site.js -> skills (used by filters)
     cover     image for the cards (file inside projects/<id>/)
     photos    gallery images (file names inside projects/<id>/)
     title, tagline, skill, learned, body   -> { en: ..., it: ... }
     specs     optional little boxes with key facts
     links     optional buttons: 3D model, PDF, code, external sites
     versions  optional step-by-step history (see the photo frame)
     code      optional raw file URL shown in a "peek at the code" box

   Writing tips for "body":
     - each string is a paragraph
     - a string starting with "<" is raw HTML (e.g. "<h2>Title</h2>", lists)
     - a string starting with "//" becomes an orange meme box
   ===================================================================== */
window.PROJECTS = [
	/* ------------------------------------------------------------------ */
	{
		id: "braintex",
		page: "braintex", // has its own special page
		status: "wip",
		years: "2024 →",
		featured: true,
		tags: ["startup", "cad", "electronics", "team"],
		cover: "img/braintex/detected.webp",
		coverFill: true,
		photos: ["img/braintex/mvp.webp"],
		title: { en: "BrainTex", it: "BrainTex" },
		tagline: {
			en: "The startup I co-founded: AI that finds fabric defects your eyes would miss. I'm the CPO, and the one who makes sure the hardware survives the factory floor.",
			it: "La startup che ho co-fondato: un'IA che trova nei tessuti i difetti che all'occhio sfuggono. Sono il CPO, e quello che fa sopravvivere l'hardware in fabbrica.",
		},
		skill: { en: "Turning an idea into a company", it: "Trasformare un'idea in un'azienda" },
	},

	/* ------------------------------------------------------------------ */
	{
		id: "reseq",
		home: true,
		status: "closed",
		years: "2022 – 2025",
		tags: ["team", "cad"],
		cover: "reseq-02.webp",
		coverFill: true,
		photos: ["reseq-01.webp", "reseq-02.webp", "reseq-03.webp", "reseq-04.webp", "reseq-05.webp", "reseq-06.webp", "reseq-07.webp", "reseq-08.webp"],
		title: { en: "Rese.Q · Team ISAAC", it: "Rese.Q · Team ISAAC" },
		tagline: {
			en: "A search-and-rescue robot built by 35+ students. I started by fixing its tracks and ended up leading the whole team.",
			it: "Un robot per la ricerca e il soccorso costruito da oltre 35 studenti. Ho iniziato sistemando i cingoli e ho finito a guidare tutto il team.",
		},
		skill: { en: "Building, growing and leading a team", it: "Costruire, far crescere e guidare un team" },
		learned: {
			en: [
				"Leading 35+ volunteers: nobody is paid, so motivation has to come from the project, the people and a clear plan.",
				"Delegating for real: choosing what to let go of, then trusting people to do it their way.",
				"Handover: a student team changes every year, so knowledge has to live in documents, not in heads.",
				"Talking to sponsors and turning a university project into something companies want to support.",
				"Mechanical design with real constraints: tracks, arms and parts that break in front of an audience.",
			],
			it: [
				"Guidare più di 35 volontari: nessuno è pagato, quindi la motivazione deve arrivare dal progetto, dalle persone e da un piano chiaro.",
				"Delegare davvero: scegliere cosa lasciare andare e poi fidarsi che gli altri lo facciano a modo loro.",
				"Passaggio di consegne: un team studentesco cambia ogni anno, quindi il sapere deve stare nei documenti, non nelle teste.",
				"Parlare con gli sponsor e trasformare un progetto universitario in qualcosa che le aziende vogliono sostenere.",
				"Progettazione meccanica con vincoli veri: cingoli, bracci robotici e pezzi che si rompono davanti al pubblico.",
			],
		},
		specs: [
			{ k: { en: "Role", it: "Ruolo" }, v: { en: "Team leader & Head of mechanics", it: "Team leader e responsabile meccanica" } },
			{ k: { en: "Team", it: "Team" }, v: { en: "35+ students", it: "35+ studenti" } },
			{ k: { en: "Shown at", it: "Presentato a" }, v: "A&T Turin 2023 · Maker Faire Rome 2023" },
			{ k: { en: "Tools", it: "Strumenti" }, v: "SolidWorks · Matlab / Simulink · ROS · Python" },
		],
		body: {
			en: [
				"ISAAC is a student team at Politecnico di Torino. Its main project is <strong>Rese.Q</strong>, a family of tracked robots for <em>Search And Rescue</em>: machines that go into collapsed buildings or fires to look for survivors and collect data, so rescuers don't have to risk their lives first.",
				"<h2>From mechanic to team leader</h2>",
				"I joined the mechanical department in October 2022 and started by fixing what wasn't working on the first robot, the Mk1: I designed a dynamic tensioner for the tracks, improved the traction motor support and worked on the redesign of the robotic arm. The Mk1 was presented at A&T Turin 2023.",
				"Then I became Head of the Mechanical Department and we rethought the robot from scratch. The Mk2 got better terrain handling, a new traction system, a more capable arm, easier maintenance and a friendlier controller. It made its debut at Maker Faire Rome 2023.",
				"Finally I became Team Leader: 35+ students from different courses, sponsors to find, deadlines to meet. In November 2025 I left the team to focus on BrainTex. Leaving well is a skill too: the goal was for everything to keep working without me.",
				"// 35+ engineering students, zero salaries, one robot. Basically herding cats, except the cats have SolidWorks licences and strong opinions about fillet radii.",
				'Want to know more? Have a look at the <a href="https://teamisaac.polito.it/">ISAAC website</a>, <a href="https://www.linkedin.com/company/team-isaac-polito/">LinkedIn</a> or <a href="https://www.instagram.com/team_isaac_polito/">Instagram</a>.',
			],
			it: [
				"ISAAC è un team studentesco del Politecnico di Torino. Il progetto principale è <strong>Rese.Q</strong>, una famiglia di robot cingolati per il <em>Search And Rescue</em>: macchine che entrano in edifici crollati o incendi per cercare superstiti e raccogliere dati, così i soccorritori non devono rischiare la vita per primi.",
				"<h2>Da meccanico a team leader</h2>",
				"Sono entrato nel reparto meccanico a ottobre 2022 e ho iniziato sistemando quello che non andava sul primo robot, l'Mk1: ho progettato un tenditore dinamico per i cingoli, migliorato il supporto dei motori di trazione e lavorato al nuovo braccio robotico. L'Mk1 è stato presentato ad A&T Torino 2023.",
				"Poi sono diventato responsabile del reparto meccanico e abbiamo ripensato il robot da zero. L'Mk2 ha una migliore gestione dei terreni, un nuovo sistema di trazione, un braccio più capace, manutenzione più semplice e un controller più amichevole. Ha debuttato alla Maker Faire di Roma 2023.",
				"Infine sono diventato Team Leader: oltre 35 studenti di corsi diversi, sponsor da trovare, scadenze da rispettare. A novembre 2025 ho lasciato il team per concentrarmi su BrainTex. Anche andarsene bene è una competenza: l'obiettivo era che tutto continuasse a funzionare senza di me.",
				"// Oltre 35 studenti di ingegneria, zero stipendi, un robot. In pratica un'assemblea di condominio durata tre anni, ma con più file CAD.",
				'Vuoi saperne di più? Dai un\'occhiata al <a href="https://teamisaac.polito.it/">sito di ISAAC</a>, a <a href="https://www.linkedin.com/company/team-isaac-polito/">LinkedIn</a> o a <a href="https://www.instagram.com/team_isaac_polito/">Instagram</a>.',
			],
		},
		links: [
			{ icon: "globe", href: "https://teamisaac.polito.it/", label: { en: "ISAAC website", it: "Sito di ISAAC" } },
			{ icon: "linkedin", href: "https://www.linkedin.com/company/team-isaac-polito/", label: { en: "Team ISAAC on LinkedIn", it: "Team ISAAC su LinkedIn" } },
		],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "analog_digital_photo_frame",
		status: "paused",
		tags: ["electronics", "code", "cad", "print3d"],
		cover: "analog_digital_photo_frame-01.webp",
		photos: ["analog_digital_photo_frame-01.webp"],
		title: { en: "Analog-digital photo frame", it: "Cornice analogico-digitale" },
		tagline: {
			en: "A robotic frame that flips through your printed photos by itself. Eight versions so far, each one less wrong than the last.",
			it: "Una cornice robotica che sfoglia da sola le tue foto stampate. Otto versioni finora, ognuna un po' meno sbagliata della precedente.",
		},
		skill: { en: "Electronics & low-level programming", it: "Elettronica e programmazione a basso livello" },
		learned: {
			en: [
				"Driving motors from a microcontroller: from 9 g servos to quieter, more precise 28BYJ-48 steppers.",
				"Homing with a hall-effect sensor and a magnet, so the machine always knows where it is.",
				"Controlling air: a suction cup and a mini solenoid valve that grab a photo without any pump.",
				"Squeezing everything into a tiny Arduino Pro Micro hidden inside the moving arm.",
				"Iterating in public: eight versions, each with a list of problems (and readers suggesting fixes).",
			],
			it: [
				"Pilotare motori da un microcontrollore: dai servo da 9 g ai più silenziosi e precisi stepper 28BYJ-48.",
				"L'azzeramento con un sensore a effetto Hall e una calamita, così la macchina sa sempre dov'è.",
				"Controllare l'aria: una ventosa e una mini elettrovalvola che afferrano una foto senza bisogno di pompe.",
				"Far stare tutto in un minuscolo Arduino Pro Micro nascosto nel braccio mobile.",
				"Iterare in pubblico: otto versioni, ognuna con la sua lista di problemi (e lettori che suggeriscono soluzioni).",
			],
		},
		body: {
			en: [
				"With a smartphone you can scroll through thousands of photos anytime, anywhere. What we lost is the feeling of a printed memory that lasts. Some would call printed photos bulky and useless; I'd rather give a second life to the boxes of them forgotten in the basement.",
				"The idea: a frame that holds a pile of printed photos and, every now and then, moves the one on top so a new one is on display. Simple to say. Eight versions later, still not simple to build.",
				"Below you can step through every version, with the problems I found in each one. The last problem is always \"…\" on purpose: if you spot one I missed (or a solution), write me.",
				"// Eight versions later, the photos in the middle of the pile still show up more often than the others. Finally, a win for middle children everywhere.",
			],
			it: [
				"Con uno smartphone scorri migliaia di foto quando e dove vuoi. Quello che abbiamo perso è la sensazione di un ricordo stampato, che dura. C'è chi direbbe che le foto stampate sono ingombranti e inutili; io preferisco dare una seconda vita alle scatole di foto dimenticate in cantina.",
				"L'idea: una cornice che contiene una pila di foto stampate e, ogni tanto, sposta quella in cima per mostrarne una nuova. Facile a dirsi. Otto versioni dopo, ancora non facile da costruire.",
				"Qui sotto puoi scorrere tutte le versioni, con i problemi che ho trovato in ognuna. L'ultimo problema è sempre \"…\" apposta: se ne trovi uno che mi è sfuggito (o una soluzione), scrivimi.",
				"// Otto versioni dopo, le foto in mezzo alla pila escono ancora più spesso delle altre. Finalmente una rivincita per tutti i figli di mezzo.",
			],
		},
		versions: [
			{
				name: "V1",
				model3d: "https://a360.co/3ZsBmeu",
				text: {
					en: "Two frames side by side and a small robotic arm (9 g servos) with a suction cup. The vacuum comes from a syringe moved by another servo. The arm picks a photo from one pile and drops it on the other.",
					it: "Due cornici affiancate e un piccolo braccio robotico (servo da 9 g) con una ventosa. Il vuoto lo crea una siringa mossa da un altro servo. Il braccio prende una foto da una pila e la posa sull'altra.",
				},
				problems: {
					en: ["Very big", "Photos in the middle of the pile are shown more often than the first and last ones", "Too many motors (6): more things that can break, and noisy", "…"],
					it: ["Molto ingombrante", "Le foto in mezzo alla pila escono più spesso della prima e dell'ultima", "Troppi motori (6): più cose che si rompono, e rumorosi", "…"],
				},
			},
			{
				name: "V2",
				model3d: "https://a360.co/3GpYeCm",
				text: {
					en: "New strategy: take the top photo and slide it under the pile, so every photo is shown exactly once per cycle. A long linear actuator with a rubber tip drags the photo, a small ramp lets it slip underneath. Only 3 motors.",
					it: "Nuova strategia: prendere la foto in cima e infilarla sotto la pila, così ogni foto si vede una sola volta per ciclo. Un lungo attuatore lineare con la punta in gomma trascina la foto, una piccola rampa la fa scivolare sotto. Solo 3 motori.",
				},
				problems: {
					en: ["Very big", "How do I actually finish this design?", "Will it work almost vertical, hanging on a wall?", "…"],
					it: ["Molto ingombrante", "Come lo finisco davvero questo progetto?", "Funzionerà quasi in verticale, appeso al muro?", "…"],
				},
			},
			{
				name: "V3",
				model3d: "https://a360.co/3X97Po7",
				text: {
					en: "A bridge-style actuator (like a tiny gantry crane) picks the top photo with a vacuum gripper and places it where the V2 arm can push it under the pile.",
					it: "Un attuatore a ponte (come un mini carroponte) prende la foto in cima con una pinza a vuoto e la posa dove il braccio della V2 può spingerla sotto la pila.",
				},
				problems: {
					en: ["Very big", "Too many motors again (6)", "…"],
					it: ["Molto ingombrante", "Di nuovo troppi motori (6)", "…"],
				},
			},
			{
				name: "V4",
				model3d: "https://a360.co/3CrWpni",
				text: {
					en: "V3 made me reconsider V1: a bridge-style actuator could fix its worst problem, the number of motors. So I gave the original idea a second chance.",
					it: "La V3 mi ha fatto ripensare alla V1: un attuatore a ponte poteva risolvere il suo problema peggiore, il numero di motori. Così ho dato una seconda possibilità all'idea originale.",
				},
				problems: {
					en: ["Very big", "Photos in the middle of the pile are shown more often", "…"],
					it: ["Molto ingombrante", "Le foto in mezzo alla pila escono più spesso", "…"],
				},
			},
			{
				name: "V5",
				model3d: "https://a360.co/317xpi6",
				text: {
					en: "2 mm plexiglass as the main material: transparent things look smaller than they are. As suggested by a reader, the big bridge became a single-sided one. Two boxes hide cables and electronics.",
					it: "Plexiglass da 2 mm come materiale principale: le cose trasparenti sembrano più piccole di quello che sono. Su suggerimento di un lettore, il grande ponte è diventato a sbalzo, su un solo lato. Due scatole nascondono cavi ed elettronica.",
				},
				problems: {
					en: ["Big", "Photos in the middle of the pile are shown more often", "Is it strong enough?", "…"],
					it: ["Ingombrante", "Le foto in mezzo alla pila escono più spesso", "Sarà abbastanza robusto?", "…"],
				},
			},
			{
				name: "V6",
				model3d: "https://a360.co/3nkuJIl",
				text: {
					en: "Strength solved with 3D-printed linear bearings sliding on 8 mm steel rods. Servos replaced by 28BYJ-48 stepper motors: still cheap, but quieter and more precise. A hall-effect sensor and a magnet give each axis an absolute zero.",
					it: "Robustezza risolta con cuscinetti lineari stampati in 3D che scorrono su barre d'acciaio da 8 mm. I servo lasciano il posto a motori passo-passo 28BYJ-48: sempre economici, ma più silenziosi e precisi. Un sensore Hall e una calamita danno a ogni asse uno zero assoluto.",
				},
				problems: {
					en: ["Big", "Photos in the middle of the pile are shown more often", "How should the suction cup work?", "…"],
					it: ["Ingombrante", "Le foto in mezzo alla pila escono più spesso", "Come deve funzionare la ventosa?", "…"],
				},
			},
			{
				name: "V7",
				model3d: "https://a360.co/3XacK8b",
				text: {
					en: "All the electronics (microcontroller and motor drivers) moved inside the arm, so the frame is only plexiglass and the boxes are gone. The suction cup sits at the end of the vertical arm, connected to a mini solenoid valve: open while pressing on the photo to let air out, closed while carrying it. No pump needed, and tests showed it's strong enough to lift and quick enough to let go.",
					it: "Tutta l'elettronica (microcontrollore e driver dei motori) si è spostata dentro il braccio: la cornice è solo plexiglass e le scatole spariscono. La ventosa è in fondo al braccio verticale, collegata a una mini elettrovalvola: aperta mentre preme sulla foto per far uscire l'aria, chiusa mentre la trasporta. Niente pompa, e dai test tiene abbastanza per sollevare e molla al momento giusto.",
				},
				problems: {
					en: ["Photos in the middle of the pile are shown more often", "…"],
					it: ["Le foto in mezzo alla pila escono più spesso", "…"],
				},
			},
			{
				name: "V8",
				model3d: "https://a360.co/49s2df8",
				text: {
					en: "After real tests: proper 8 mm linear bearings (smoother, no wobble, no noise), a frame optimised for laser-cut 2 mm plexiglass with a 3D-printed divider, an organic-shaped arm and a smaller Arduino Pro Micro. This is where the project is parked.",
					it: "Dopo i test veri: cuscinetti lineari da 8 mm veri (più fluidi, niente giochi, niente rumore), una cornice ottimizzata per il taglio laser del plexiglass da 2 mm con un divisore stampato in 3D, un braccio dalla forma organica e un Arduino Pro Micro più piccolo. Il progetto è parcheggiato qui.",
				},
				problems: {
					en: ["Photos in the middle of the pile are shown more often", "…"],
					it: ["Le foto in mezzo alla pila escono più spesso", "…"],
				},
			},
		],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "3d_mouse",
		status: "paused",
		tags: ["electronics", "code", "cad", "print3d"],
		cover: "3d_mouse.webp",
		photos: ["3d_mouse.webp"],
		title: { en: "3D Mouse", it: "Mouse 3D" },
		tagline: {
			en: "A DIY 'space mouse' to spin CAD models as if you were holding them. Six hall-effect sensors instead of an arm and a leg.",
			it: "Uno 'space mouse' fai-da-te per girare i modelli CAD come se li avessi in mano. Sei sensori Hall invece di un rene.",
		},
		skill: { en: "Hardware + software, from low-level to high-level code", it: "Hardware e software, dal firmware all'applicazione" },
		learned: {
			en: [
				"Hall-effect sensors: turning six raw magnetic readings into 6 degrees of freedom (move and rotate on three axes).",
				"Low-level code: firmware on a microcontroller that has to be fast and ignore noise.",
				"High-level code: making the computer understand the device and talk to CAD software.",
				"Mechanical design for a hand-held device: compact, portable and 3D-printable at home.",
			],
			it: [
				"Sensori a effetto Hall: trasformare sei letture magnetiche grezze in 6 gradi di libertà (traslare e ruotare su tre assi).",
				"Codice a basso livello: firmware su microcontrollore che deve essere veloce e ignorare il rumore.",
				"Codice ad alto livello: far capire il dispositivo al computer e farlo dialogare con i software CAD.",
				"Progettazione meccanica di un oggetto da tenere in mano: compatto, portatile e stampabile in 3D a casa.",
			],
		},
		body: {
			en: [
				"Professional 3D mice let you move a CAD model as if it were in your hand. They're great. They also cost an arm and a leg.",
				'My version started from the <a href="https://www.instructables.com/Space-Mushroom-Full-6-DOFs-Controller-for-CAD-Appl/">Space Mushroom</a> by <a href="https://www.instructables.com/member/shiura/">Shiura</a>, which uses three joysticks arranged in a triangle. I replaced the joysticks with six hall-effect sensors and magnets: no mechanical wear on the sensors, and a much more compact, portable body.',
				"It's the perfect excuse to touch every layer of a product: mechanics, electronics, firmware close to the metal and the software on the PC side. The base might need some extra weight to stay put. It's paused for now, because my free time is currently invested in BrainTex.",
				"// Commercial 3D mice cost an arm and a leg. Mine costs six hall sensors, a few magnets and every free evening I had. Turns out that's also expensive.",
			],
			it: [
				"I mouse 3D professionali ti fanno muovere un modello CAD come se lo avessi in mano. Sono fantastici. E costano un rene.",
				'La mia versione parte dallo <a href="https://www.instructables.com/Space-Mushroom-Full-6-DOFs-Controller-for-CAD-Appl/">Space Mushroom</a> di <a href="https://www.instructables.com/member/shiura/">Shiura</a>, che usa tre joystick disposti a triangolo. Ho sostituito i joystick con sei sensori a effetto Hall e delle calamite: niente usura meccanica sui sensori e un corpo molto più compatto e portatile.',
				"È la scusa perfetta per toccare ogni strato di un prodotto: meccanica, elettronica, firmware vicino all'hardware e software lato PC. La base forse avrà bisogno di un po' di peso in più per stare ferma. Per ora è in pausa, perché il mio tempo libero adesso è investito in BrainTex.",
				"// I mouse 3D in commercio costano un rene. Il mio costa sei sensori Hall, qualche calamita e tutte le serate libere che avevo. Alla fine costa un rene pure lui.",
			],
		},
		links: [{ type: "model3d", href: "https://a360.co/3OZkhoN" }],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "outdoor_kitchen",
		status: "paused",
		tags: ["wood", "cad", "clients"],
		cover: "outdoor_kitchen-01.webp",
		photos: ["outdoor_kitchen-01.webp", "outdoor_kitchen-02.webp", "outdoor_kitchen-03.webp", "outdoor_kitchen-04.webp", "outdoor_kitchen-05.webp", "outdoor_kitchen-06.webp", "outdoor_kitchen-07.webp", "outdoor_kitchen-08.webp"],
		title: { en: "Outdoor kitchen", it: "Cucina da esterno" },
		tagline: {
			en: "A custom outdoor kitchen for a tight space, built in five days. The pop-up beer tap? Waiting for good resin weather.",
			it: "Una cucina da esterno su misura per uno spazio stretto, montata in cinque giorni. La spillatrice a scomparsa? Aspetta il meteo giusto per la resina.",
		},
		skill: { en: "Resin finishing & designing for someone else", it: "Finiture in resina e progettare per qualcun altro" },
		learned: {
			en: [
				"Listening first: turning a client's wishes and a small space into a layout that actually fits.",
				"Designing for someone else's hands: drawings a woodworker could cut in 2 days and the client could assemble in 3.",
				"Resin coatings: protecting wood outdoors, and accepting that temperature and humidity are the real bosses of curing.",
				"Mechanisms in a hostile place: bringing a beer tap up to the counter without opening holes for the rain.",
			],
			it: [
				"Prima ascoltare: trasformare i desideri di un cliente e uno spazio piccolo in una disposizione che ci stia davvero.",
				"Progettare per le mani di altri: disegni che un falegname ha tagliato in 2 giorni e il cliente ha montato in 3.",
				"Rivestimenti in resina: proteggere il legno all'aperto, e accettare che i veri capi della catalisi sono temperatura e umidità.",
				"Meccanismi in un ambiente ostile: portare una spillatrice fino al piano senza aprire buchi per la pioggia.",
			],
		},
		body: {
			en: [
				"A client came to me with a clear wish and a not-so-generous space: a proper outdoor kitchen where, on paper, there was room for a barbecue and not much else.",
				"We started from a 3D model and revised it until every centimetre had a job. Then a skilled woodworker cut all the pieces in just 2 days, and the client assembled them in 3, like a big puzzle. A final coat of resin protects the wood and gives it weight and character.",
				"The part list is censored (it's the client's kitchen, after all), but if you need help with something similar, write me.",
				"<h2>Part two: the beer tap</h2>",
				"The client also wanted a beer tap that rises up to the counter on demand. It's an outdoor kitchen, so cutting holes in the top for the tap to come through was not an option. The design is almost finished; it's waiting for the right temperature and humidity for the resin, and for me to have a free weekend. Both are rare.",
				"// Lesson learned: resin doesn't care about your deadlines. It cures when it wants to.",
			],
			it: [
				"Un cliente è venuto da me con un'idea chiara e uno spazio non proprio generoso: una vera cucina da esterno dove, sulla carta, ci stava un barbecue e poco altro.",
				"Siamo partiti da un modello 3D e l'abbiamo rivisto finché ogni centimetro non aveva un compito. Poi un falegname bravo ha tagliato tutti i pezzi in soli 2 giorni, e il cliente li ha montati in 3, come un grande puzzle. Una mano finale di resina protegge il legno e gli dà peso e carattere.",
				"La distinta dei pezzi è censurata (la cucina è del cliente, dopotutto), ma se ti serve una mano per qualcosa di simile, scrivimi.",
				"<h2>Seconda parte: la spillatrice</h2>",
				"Il cliente voleva anche una spillatrice che salisse fino al piano quando serve. È una cucina da esterno, quindi fare buchi nel piano per farla uscire non era un'opzione. Il progetto è quasi finito; aspetta la temperatura e l'umidità giuste per la resina, e un mio weekend libero. Entrambi rari.",
				"// Lezione imparata: alla resina delle tue scadenze non importa nulla. Catalizza quando le pare.",
			],
		},
		links: [
			{ type: "model3d", href: "https://a360.co/3WWY7oA", label: { en: "3D model: the kitchen", it: "Modello 3D: la cucina" } },
			{ type: "model3d", href: "https://a360.co/3wB69vH", label: { en: "3D model: beer tap lift", it: "Modello 3D: spillatrice" } },
			{ type: "pdf", href: "projects/outdoor_kitchen/outdoor_kitchen.pdf", label: { en: "Drawings (PDF, 3 MB)", it: "Disegni (PDF, 3 MB)" } },
		],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "river_epoxy_metal_extendable_table",
		home: true,
		status: "done",
		tags: ["wood", "metal", "cad", "clients"],
		cover: "river_epoxy_metal_extendable_table-02.webp",
		coverFill: true,
		photos: ["river_epoxy_metal_extendable_table-02.webp", "river_epoxy_metal_extendable_table-01.webp"],
		title: { en: "River table", it: "Tavolo river" },
		tagline: {
			en: "Book-matched walnut, a black resin river and an iron base. Designed around one very precious slab.",
			it: "Noce aperto a libro, un fiume di resina nera e una base in ferro. Progettato attorno a un'unica, preziosissima tavola.",
		},
		skill: { en: "Resin, wood & metal working", it: "Resina, legno e metallo" },
		learned: {
			en: [
				"Designing around a natural material: every cut was optimised on that specific walnut slab. No second chances.",
				"Designing for epoxy: a resin river between two live edges, with the grain still continuous when the table opens.",
				"Designing for metal: a base of eight iron tubes that merge in the centre, with adjustable feet for uneven floors.",
				"Hidden mechanisms: an extension system recessed under the top, invisible until you need it.",
			],
			it: [
				"Progettare attorno a un materiale naturale: ogni taglio è stato ottimizzato su quella specifica tavola di noce. Niente seconde possibilità.",
				"Progettare per la resina: un fiume di resina tra due bordi naturali, con la venatura continua anche a tavolo aperto.",
				"Progettare per il metallo: una base di otto tubolari in ferro che si fondono al centro, con piedini regolabili per pavimenti irregolari.",
				"Meccanismi nascosti: un sistema di allungamento incassato sotto il piano, invisibile finché non serve.",
			],
		},
		specs: [
			{ k: { en: "Top", it: "Piano" }, v: { en: "Solid Italian walnut, seasoned 10 years, 6 cm thick", it: "Noce nazionale massello, stagionato 10 anni, spessore 6 cm" } },
			{ k: { en: "River", it: "Fiume" }, v: { en: "Glossy black resin between two book-matched slabs", it: "Resina nera lucida tra due tavole aperte a libro" } },
			{ k: { en: "Base", it: "Base" }, v: { en: "Iron, 8 tubes 80 × 80 × 2 mm, matt black", it: "Ferro, 8 tubolari 80 × 80 × 2 mm, nero opaco" } },
			{ k: { en: "Length", it: "Lunghezza" }, v: { en: "160 → 220 cm (63 → 86.6 in)", it: "da 160 a 220 cm" } },
			{ k: { en: "Finish", it: "Finitura" }, v: { en: "Hard-wax oil: matt, food-safe, child-safe", it: "Olio-cera: opaca, adatta agli alimenti e ai bambini" } },
		],
		body: {
			en: [
				"A custom request from a client who knew exactly what he wanted. I designed it; he built it himself, which made the drawings even more important.",
				"The top is solid Italian walnut, naturally seasoned for 10 years and 6 cm thick: just two large slabs placed side by side in a book match (they were next to each other in the trunk), natural edges inside, joined by a strip of glossy black resin. The outer edge is smooth and tapered. The finish is a hard-wax oil: matt, silky, safe for food and children, resistant and easy to maintain.",
				"The iron base is made of eight tubes that merge seamlessly in the centre, painted matt black, with four retractable, adjustable feet for uneven floors. The extension mechanism is recessed under the top: in a few seconds the table goes from 160 to 220 cm, and the grain stays continuous, as if it were a single piece.",
				"// The walnut was seasoned for 10 years. That's longer than any of my side projects has ever spent being \"almost finished\".",
				'The table ended up on Etsy: you can see more photos <a href="https://www.etsy.com/it/listing/1349237241/river-epoxy-resin-table-with-metal-leg">here</a>.',
			],
			it: [
				"Una richiesta su misura da un cliente che sapeva esattamente cosa voleva. Io l'ho progettato, lui l'ha costruito: motivo in più per fare disegni chiari.",
				"Il piano è in noce nazionale massello, stagionato naturalmente per 10 anni, spesso 6 cm: solo due grandi tavole affiancate a libro (erano vicine nel tronco), con i bordi naturali all'interno, unite da una striscia di resina nera lucida. Il bordo esterno è liscio e rastremato. La finitura è un olio-cera: opaca, setosa, adatta agli alimenti e ai bambini, resistente e facile da curare.",
				"La base in ferro è fatta da otto tubolari che si fondono al centro, verniciati nero opaco, con quattro piedini a scomparsa regolabili per i pavimenti irregolari. Il meccanismo di allungamento è incassato sotto il piano: in pochi secondi il tavolo passa da 160 a 220 cm, e la venatura resta continua, come se fosse un pezzo unico.",
				"// Il noce è stagionato 10 anni, come un Parmigiano di lusso. Purtroppo questo non si grattugia.",
				'Il tavolo è finito su Etsy: trovi altre foto <a href="https://www.etsy.com/it/listing/1349237241/river-epoxy-resin-table-with-metal-leg">qui</a>.',
			],
		},
		links: [
			{ type: "model3d", href: "https://a360.co/3iaBnCV" },
			{ icon: "etsy", href: "https://www.etsy.com/it/listing/1349237241/river-epoxy-resin-table-with-metal-leg", label: { en: "See it on Etsy", it: "Guardalo su Etsy" } },
		],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "mastermind_telegram_bot",
		status: "done",
		tags: ["code"],
		cover: "mastermind-01.webp",
		photos: ["mastermind-01.webp"],
		title: { en: "Mastermind Telegram bot", it: "Bot Telegram di Mastermind" },
		tagline: {
			en: "The 1970 code-breaking board game, now in a Telegram chat. No tiny pegs lost under the sofa.",
			it: "Il gioco da tavolo del 1970 per decifrare codici, ora in una chat di Telegram. Niente più pioli persi sotto il divano.",
		},
		skill: { en: "Python & APIs", it: "Python e API" },
		learned: {
			en: [
				"Python beyond exercises: a real program that runs on its own and talks to strangers.",
				"Working with an API: receiving messages and replying through the Telegram Bot API.",
				"Keeping state: every chat is a separate game with its own secret code and attempts.",
				"Validating input from humans, who will type anything except what you expect.",
			],
			it: [
				"Python oltre gli esercizi: un programma vero che gira da solo e parla con sconosciuti.",
				"Lavorare con un'API: ricevere messaggi e rispondere tramite la Telegram Bot API.",
				"Gestire lo stato: ogni chat è una partita separata con il suo codice segreto e i suoi tentativi.",
				"Validare l'input degli umani, che scriveranno di tutto tranne quello che ti aspetti.",
			],
		},
		body: {
			en: [
				"Mastermind is a board game from 1970: one player hides a code of coloured pegs, the other has to crack it in as few guesses as possible, using only \"right colour, right place\" hints. I still love it every time I open that tiny box.",
				'So I turned it into a Telegram bot. Open a chat with <a href="https://t.me/mastermind_CS_bot">@mastermind_CS_bot</a>, type <code>help</code> for the rules, and play. If it doesn\'t answer, it\'s probably fighting a bug (or the server is taking a nap): be patient.',
				"The full code is on GitHub, and you can peek at it right here below.",
				"// Users will type anything except what you expect: \"help\", \"HELP\", \"hepl\", \"hello?\", a sticker of a cat…",
			],
			it: [
				"Mastermind è un gioco da tavolo del 1970: un giocatore nasconde un codice di pioli colorati, l'altro deve decifrarlo con meno tentativi possibile, usando solo indizi del tipo \"colore giusto, posto giusto\". Mi piace ancora ogni volta che apro quella scatolina.",
				'Così l\'ho trasformato in un bot di Telegram. Apri una chat con <a href="https://t.me/mastermind_CS_bot">@mastermind_CS_bot</a>, scrivi <code>help</code> per le regole, e gioca. Se non risponde, probabilmente sta combattendo con un bug (o il server fa un pisolino): porta pazienza.',
				"Il codice completo è su GitHub, e puoi sbirciarlo anche qui sotto.",
				"// Gli utenti scriveranno di tutto tranne quello che ti aspetti: \"help\", \"HELP\", \"aiuto\", \"ciao?\", lo sticker di un gatto…",
			],
		},
		code: "https://raw.githubusercontent.com/Tizio0o0o0o/Mastermind_TelegramBot/main/Main.py",
		links: [
			{ icon: "telegram", href: "https://t.me/mastermind_CS_bot", label: { en: "Play on Telegram", it: "Gioca su Telegram" } },
			{ type: "code", href: "https://github.com/Tizio0o0o0o/Mastermind_TelegramBot" },
		],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "willy_lamp",
		status: "done",
		tags: ["print3d", "cad", "electronics"],
		cover: "willy_lamp-01.webp",
		photos: ["willy_lamp.webp", "willy_lamp-01.webp", "willy_lamp-02.webp", "willy_lamp-03.webp", "willy_lamp-04.webp", "willy_lamp-05.webp"],
		title: { en: "Willy lamp", it: "Lampada Willy" },
		tagline: {
			en: "You've seen this lamp online. Mine turns on with a strangely familiar motion, prints without supports and runs on a phone charger.",
			it: "L'hai già vista online. La mia si accende con un gesto stranamente familiare, si stampa senza supporti e va con un caricatore del telefono.",
		},
		skill: { en: "3D printing for production", it: "Stampa 3D pensata per la produzione" },
		learned: {
			en: [
				"Design for manufacturing: no supports and max 196 mm tall, so it fits a standard printer and prints the same way every time.",
				"Ribs instead of solid walls: strong where it matters, cheap on filament.",
				"A mechanism that is the joke: a string pulls a limit switch when the cover moves.",
				"Safe by design: a 5 V LED ring powered by any phone charger, no mains voltage inside.",
			],
			it: [
				"Progettare per la produzione: niente supporti e massimo 196 mm di altezza, così entra in una stampante normale e viene uguale ogni volta.",
				"Nervature invece di pareti piene: robusta dove serve, parsimoniosa col filamento.",
				"Un meccanismo che è la battuta stessa: un filo tira un finecorsa quando muovi il cappuccio.",
				"Sicura per costruzione: un anello LED a 5 V alimentato da un qualsiasi caricatore del telefono, niente tensione di rete all'interno.",
			],
		},
		body: {
			en: [
				"You've probably stumbled upon one of these lamps online. It has… a certain shape. A shape that pushes boundaries and grabs attention.",
				"I didn't want a copy: I wanted one that <em>turns on</em> the way you'd expect from that shape. Inside, a string connects the cover to a limit switch: move the cover with a strangely familiar motion and the light comes on.",
				"The light is a 5 V LED ring, so it runs from a phone charger: no high voltage, no drama.",
				"The real work is the part you don't see. It's designed to print without supports, fits a standard printer (196 mm max height) and uses internal ribs to stay strong with less plastic. A lamp you could print ten times, ten times the same.",
				"// Probably the only lamp you'll ever describe to your friends using hand gestures.",
			],
			it: [
				"Probabilmente hai già incrociato una di queste lampade online. Ha… una certa forma. Una forma che non passa inosservata.",
				"Non volevo una copia: ne volevo una che si <em>accendesse</em> come ti aspetteresti da quella forma. Dentro, un filo collega il cappuccio a un finecorsa: muovi il cappuccio con un gesto stranamente familiare e la luce si accende.",
				"La luce è un anello LED a 5 V, quindi va con un caricatore del telefono: niente alta tensione, niente drammi.",
				"Il vero lavoro è quello che non si vede. È progettata per essere stampata senza supporti, entra in una stampante normale (196 mm di altezza massima) e ha nervature interne per restare robusta con meno plastica. Una lampada che puoi stampare dieci volte, dieci volte uguale.",
				"// Probabilmente l'unica lampada che descriverai agli amici a gesti.",
			],
		},
		links: [{ type: "model3d", href: "https://a360.co/3W1qGjT" }],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "tesseract_lamp",
		status: "done",
		tags: ["metal", "wood", "print3d"],
		cover: "tesseract_lamp-05.webp",
		coverFill: true,
		photos: ["tesseract_lamp-01.webp", "tesseract_lamp-02.webp", "tesseract_lamp-03.webp", "tesseract_lamp-04.webp", "tesseract_lamp-05.webp", "tesseract_lamp-06.webp"],
		title: { en: "Tesseract lamp", it: "Lampada Tesseract" },
		tagline: {
			en: "A 4D hypercube squeezed into 32 iron rods and planted on a wooden base. Lighting, but make it geometry.",
			it: "Un ipercubo a 4 dimensioni schiacciato in 32 tondini di ferro e piantato su una base di legno. Illuminazione, ma geometrica.",
		},
		skill: { en: "Iron welding (plus a bit of wood and 3D printing)", it: "Saldatura del ferro (più un po' di legno e stampa 3D)" },
		learned: {
			en: [
				"Welding thin iron rods so that a geometric shape actually stays geometric: 32 edges, 16 corners, very little forgiveness.",
				"Working a raw slab of wood: cutting, sanding and finishing a material that has its own ideas.",
				"Small 3D-printed parts where wood and metal need a hand to meet.",
				"Accepting imperfection: handmade means every joint is a little different.",
			],
			it: [
				"Saldare tondini di ferro sottili in modo che una forma geometrica resti davvero geometrica: 32 spigoli, 16 vertici, pochissimo margine.",
				"Lavorare una tavola di legno grezzo: tagliare, carteggiare e rifinire un materiale che ha le sue idee.",
				"Piccole parti stampate in 3D dove legno e metallo hanno bisogno di una mano per incontrarsi.",
				"Accettare l'imperfezione: fatto a mano vuol dire che ogni saldatura è un po' diversa.",
			],
		},
		body: {
			en: [
				"A tesseract is a cube's four-dimensional cousin. You can't build one in our three dimensions, but you can build its shadow: a cube inside a cube, with every corner connected to its twin.",
				"That shadow became a lamp: iron rods welded into the hypercube, a bulb floating right in the centre, a rope-style cable and a solid wooden base that keeps the whole thing anchored to our boring 3D world.",
				"Every detail is idiosyncratic, every inaccuracy is unique.",
				"// It's not crooked, it's a 3D projection of a 4D object. Any imperfection is just the fourth dimension leaking through.",
			],
			it: [
				"Il tesseract è il cugino a quattro dimensioni del cubo. Nelle nostre tre dimensioni non puoi costruirlo, ma puoi costruirne l'ombra: un cubo dentro un cubo, con ogni vertice collegato al suo gemello.",
				"Quell'ombra è diventata una lampada: tondini di ferro saldati a formare l'ipercubo, una lampadina sospesa proprio al centro, un cavo effetto corda e una base in legno massello che tiene tutto ancorato al nostro noioso mondo in 3D.",
				"Ogni dettaglio è particolare, ogni imprecisione è unica.",
				"// Non è storta, è la proiezione 3D di un oggetto 4D. Ogni imperfezione è solo la quarta dimensione che filtra.",
			],
		},
	},

	/* ------------------------------------------------------------------ */
	{
		id: "wallet_card",
		home: true,
		status: "done",
		tags: ["print3d", "cad"],
		cover: "wallet_card-02.webp",
		photos: ["wallet_card-01.webp", "wallet_card-02.webp", "wallet_card-03.webp", "wallet_card-04.webp"],
		title: { en: "Wallet card", it: "Wallet card" },
		tagline: {
			en: "Cards in an elastic band, plus a 5 mm 3D-printed card that holds keys, microSDs, adapters and two coins.",
			it: "Carte in una fascia elastica, più una card stampata in 3D da 5 mm che contiene chiavi, microSD, adattatori e due monete.",
		},
		skill: { en: "Precision 3D printing", it: "Stampa 3D di precisione" },
		learned: {
			en: [
				"Tolerances at the limit of a 0.4 mm nozzle: pockets that hold an object firmly but still let it out.",
				"Measuring everything with a caliper and designing around real objects, not ideal ones.",
				"Packing: nine different kinds of objects in 5 mm of thickness, big key included.",
				"Print settings matter as much as CAD: everything tuned for 0.2 mm layers.",
			],
			it: [
				"Tolleranze al limite di un ugello da 0,4 mm: tasche che tengono un oggetto ben saldo ma lo lasciano anche uscire.",
				"Misurare tutto col calibro e progettare attorno agli oggetti veri, non a quelli ideali.",
				"Ottimizzare lo spazio: nove tipi di oggetti in 5 mm di spessore, chiave grande compresa.",
				"Le impostazioni di stampa contano quanto il CAD: tutto calibrato per strati da 0,2 mm.",
			],
		},
		specs: [
			{ k: { en: "Thickness", it: "Spessore" }, v: "5 mm" },
			{ k: { en: "Print", it: "Stampa" }, v: { en: "0.4 mm nozzle · 0.2 mm layers", it: "ugello 0,4 mm · strati 0,2 mm" } },
			{ k: { en: "Keys", it: "Chiavi" }, v: { en: "1 big + 2 small", it: "1 grande + 2 piccole" } },
			{ k: { en: "Storage", it: "Memoria" }, v: { en: "4 microSD + USB stick", it: "4 microSD + chiavetta USB" } },
		],
		body: {
			en: [
				"Wallets are mostly made of… wallet. Card dividers, flaps and stitching: lots of thick stuff around a few thin cards.",
				"So I split the problem in two. The cards and notes are wrapped in a stretchy fabric band with rubber lining, so they stay put without any extra layer. Everything else goes into a single 3D-printed card, designed around the things I actually carry.",
				"<ul><li>2 coins</li><li>1 USB-A (female) to USB-C (male) adapter</li><li>1 USB stick</li><li>1 clip that holds the last two together</li><li>1 microSD to USB-C adapter</li><li>4 microSD cards</li><li>1 SIM tool</li><li>1 big key and 2 small keys</li></ul>",
				"All of that in 5 mm of thickness. Yes, even the chunky key slides in.",
				"// Engineering is just Tetris played with a caliper.",
			],
			it: [
				"I portafogli sono fatti soprattutto di… portafoglio. Divisori, alette e cuciture: tanta roba spessa attorno a poche carte sottili.",
				"Così ho diviso il problema in due. Carte e banconote stanno in una fascia di tessuto elastico con inserti in gomma, che le tiene ferme senza strati in più. Tutto il resto va in un'unica card stampata in 3D, progettata attorno a quello che porto davvero con me.",
				"<ul><li>2 monete</li><li>1 adattatore da USB-A (femmina) a USB-C (maschio)</li><li>1 chiavetta USB</li><li>1 clip che tiene insieme le ultime due</li><li>1 adattatore da microSD a USB-C</li><li>4 microSD</li><li>1 graffetta per la SIM</li><li>1 chiave grande e 2 piccole</li></ul>",
				"Tutto in 5 mm di spessore. Sì, ci sta pure la chiave del portone.",
				"// L'ingegneria è solo Tetris giocato col calibro.",
			],
		},
		links: [{ type: "model3d", href: "https://a360.co/3uQc27x" }],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "self_watering_vase",
		status: "done",
		tags: ["print3d", "cad"],
		cover: "self_watering_vase-01.webp",
		photos: ["self_watering_vase-01.webp", "self_watering_vase-02.webp", "self_watering_vase-03.webp", "self_watering_vase-04.webp"],
		title: { en: "Self-watering vase", it: "Vaso autoirrigante" },
		tagline: {
			en: "A one-piece, support-free, watertight planter that waters my basil while I forget to.",
			it: "Un vaso in un pezzo solo, senza supporti e a tenuta stagna, che annaffia il basilico mentre io me ne dimentico.",
		},
		skill: { en: "Waterproof 3D printing", it: "Stampa 3D a tenuta stagna" },
		learned: {
			en: [
				"Watertight prints: FDM parts leak by default. A slightly higher temperature and flow fuse the layers into a real tank.",
				"Printing a complex shape in one go, without supports, by designing the geometry around the printer.",
				"Watering by gravity: an upside-down bottle keeps the water level steady, no electronics needed.",
				"Keeping it simple enough that anyone can print it.",
			],
			it: [
				"Stampe a tenuta stagna: i pezzi FDM di base perdono. Temperatura e flusso un po' più alti fondono gli strati in un vero serbatoio.",
				"Stampare una forma complessa in una volta sola, senza supporti, progettando la geometria attorno alla stampante.",
				"Irrigare per gravità: una bottiglia capovolta tiene costante il livello dell'acqua, senza elettronica.",
				"Tenerlo abbastanza semplice da poterlo stampare chiunque.",
			],
		},
		body: {
			en: [
				"I'm no gardener. I just have a few green friends in my room and a real talent for forgetting to water them. Big plants forgive. Small ones don't.",
				"Someday I'll build a fully automated greenhouse. Today, I needed something small, easy to reproduce and easy to use: a single print, no supports, no fancy settings. An upside-down bottle feeds a little \"river\" (pebbles optional, but elegant) and the plant drinks when it needs to.",
				"The trick is making plastic hold water. FDM prints are full of microscopic gaps between layers: bumping the temperature and flow a little closes them, and the reservoir stays watertight.",
				"// The basil is thriving. It's the most stable relationship I've ever had with a plant.",
			],
			it: [
				"Non sono un giardiniere. Ho solo qualche amico verde in camera e un vero talento per dimenticarmi di annaffiarlo. Le piante grandi perdonano. Quelle piccole no.",
				"Un giorno costruirò una serra completamente automatica. Oggi mi serviva qualcosa di piccolo, facile da riprodurre e da usare: una sola stampa, niente supporti, niente impostazioni strane. Una bottiglia capovolta alimenta un piccolo \"fiume\" (sassolini facoltativi, ma eleganti) e la pianta beve quando ne ha bisogno.",
				"Il trucco è far tenere l'acqua alla plastica. Le stampe FDM sono piene di micro-fessure tra gli strati: alzando un po' temperatura e flusso si chiudono, e il serbatoio resta stagno.",
				"// Il basilico non è mai stato così bene. Mia nonna sarebbe fiera (di lui, non di me).",
			],
		},
	},

	/* ------------------------------------------------------------------ */
	{
		id: "johnnie_holder",
		status: "done",
		tags: ["cad"],
		cover: "johnnie_holder.webp",
		photos: ["johnnie_holder.webp"],
		title: { en: "Johnnie holder", it: "Porta-goldoni" },
		tagline: {
			en: "A cardboard dispenser for rubber johnnies, designed with CAD sheet-metal tools. Print, cut, fold, be prepared.",
			it: "Un dispenser di cartone per goldoni, progettato con gli strumenti CAD per la lamiera. Stampa, taglia, piega, sii previdente.",
		},
		skill: { en: "Folding: sheet-metal design, but in cardboard", it: "Piegatura: progettazione lamiera, ma in cartone" },
		learned: {
			en: [
				"Sheet-metal design in CAD: flanges, bends and flat patterns, the same tools used for steel, applied to cardboard.",
				"Material thickness changes the flat pattern, even when the material is cardboard.",
				"Making a template anyone can use: a PDF to print at 100% scale, with reference dimensions to check it.",
				"Writing instructions for people who have never opened a CAD program.",
			],
			it: [
				"Progettazione lamiera in CAD: flange, pieghe e sviluppi in piano, gli stessi strumenti usati per l'acciaio, applicati al cartone.",
				"Lo spessore del materiale cambia lo sviluppo in piano, anche quando il materiale è cartone.",
				"Creare una dima che possa usare chiunque: un PDF da stampare in scala 100%, con quote di riferimento per verificarlo.",
				"Scrivere istruzioni per chi non ha mai aperto un programma CAD.",
			],
		},
		body: {
			en: [
				"Tired of digging through your wallet or a drawer for a johnnie when the moment strikes? Say hello to the cardboard holder.",
				"It's not just a box: it's a celebration of CAD and of the sheet-metal feature, used on a material that would make any steel part laugh. And you can build one too: all you need is cardboard, glue, scissors and the PDF below. No CAD skills required.",
				"<h2>Instructions</h2>",
				"<ol><li>Download the PDF.</li><li>Print it at 100% scale (there are reference dimensions to check it).</li><li>Cut out the rough shape and glue the pages together where they meet.</li><li>Place it on a cardboard sheet and cut along the outline.</li><li>Fold along the scored lines.</li><li>Glue the flaps and let it dry completely.</li><li>Fill it. Probably with more than you'll ever need.</li></ol>",
				"// Because nothing says \"I'm prepared\" like a dispenser you engineered yourself.",
			],
			it: [
				"Stanco di frugare nel portafoglio o in un cassetto in cerca di un goldone nel momento meno opportuno? Ecco a te il porta-goldoni in cartone.",
				"Non è una semplice scatola: è un omaggio al CAD e allo strumento lamiera, usato su un materiale che farebbe ridere qualsiasi pezzo d'acciaio. E puoi costruirlo anche tu: ti servono cartone, colla, forbici e il PDF qui sotto. Nessuna competenza CAD richiesta.",
				"<h2>Istruzioni</h2>",
				"<ol><li>Scarica il PDF.</li><li>Stampalo in scala 100% (ci sono delle quote per verificarlo).</li><li>Ritaglia la forma in modo grossolano e incolla i fogli dove si incontrano.</li><li>Appoggialo su un foglio di cartone e taglia lungo il contorno.</li><li>Piega lungo le linee segnate.</li><li>Incolla le alette e lascia asciugare bene.</li><li>Riempilo. Probabilmente con più di quanti ne userai mai.</li></ol>",
				"// Perché niente dice \"sono previdente\" come un dispenser progettato da te.",
			],
		},
		links: [
			{ type: "pdf", href: "projects/johnnie_holder/johnnie_holder.pdf", label: { en: "Printable template (PDF)", it: "Dima da stampare (PDF)" } },
			{ type: "model3d", href: "https://a360.co/3SVe4v5" },
		],
	},

	/* ------------------------------------------------------------------ */
	{
		id: "auto_hotkey",
		status: "done",
		tags: ["code"],
		cover: "auto_hotkey.webp",
		photos: ["auto_hotkey.webp", "auto_hotkey-01.webp", "auto_hotkey-02.webp"],
		title: { en: "AutoHotkey scripts", it: "Script AutoHotkey" },
		tagline: {
			en: "Small Windows scripts that save me a few seconds, a hundred times a day.",
			it: "Piccoli script per Windows che mi fanno risparmiare qualche secondo, cento volte al giorno.",
		},
		skill: { en: "Automation & scripting", it: "Automazione e scripting" },
		learned: {
			en: [
				"Automating the boring stuff: if I do it twice a day, a script can do it for me.",
				"Remapping hardware: two side buttons of a cheap mouse became Ctrl and Shift, perfect for CAD.",
				"Fixing the Italian keyboard by adding back the symbols it forgot.",
				"Reading and adapting other people's code: some scripts are mine, some modified, some borrowed.",
			],
			it: [
				"Automatizzare le cose noiose: se la faccio due volte al giorno, può farla uno script al posto mio.",
				"Rimappare l'hardware: due tasti laterali di un mouse economico sono diventati Ctrl e Shift, perfetti per il CAD.",
				"Sistemare la tastiera italiana, aggiungendo i simboli che si è dimenticata.",
				"Leggere e adattare il codice degli altri: alcuni script sono miei, alcuni modificati, alcuni presi in prestito.",
			],
		},
		body: {
			en: [
				'If you use Windows, you should know <a href="https://www.autohotkey.com/">AutoHotkey</a>: a free, open-source scripting language for shortcuts, macros, form fillers, auto-clickers and every other small automation you can think of.',
				"This is my small collection. Some scripts I wrote, some I modified, some are entirely somebody else's.",
				'<ul><li><a href="https://github.com/Tizio0o0o0o/ahk/blob/main/MouseToShiftAndCtrl.ahk"><code>MouseToShiftAndCtrl.ahk</code></a>: my cheap mouse has two side buttons, now they are Ctrl and Shift. Extremely handy in Fusion 360 or SolidWorks.</li><li><a href="https://github.com/Tizio0o0o0o/ahk/blob/main/ItalianKeyboardLimits.ahk"><code>ItalianKeyboardLimits.ahk</code></a>: the Italian layout misses some useful keys. This adds back the ones I use the most (suggestions welcome).</li></ul>',
				"// Laziness is the mother of invention. Or at least of macros.",
			],
			it: [
				'Se usi Windows, dovresti conoscere <a href="https://www.autohotkey.com/">AutoHotkey</a>: un linguaggio di scripting gratuito e open source per scorciatoie, macro, compilatori automatici, auto-clicker e qualsiasi altra piccola automazione ti venga in mente.',
				"Questa è la mia piccola collezione. Alcuni script li ho scritti io, alcuni li ho modificati, altri sono interamente di qualcun altro.",
				'<ul><li><a href="https://github.com/Tizio0o0o0o/ahk/blob/main/MouseToShiftAndCtrl.ahk"><code>MouseToShiftAndCtrl.ahk</code></a>: il mio mouse economico ha due tasti laterali, ora sono Ctrl e Shift. Comodissimi in Fusion 360 o SolidWorks.</li><li><a href="https://github.com/Tizio0o0o0o/ahk/blob/main/ItalianKeyboardLimits.ahk"><code>ItalianKeyboardLimits.ahk</code></a>: al layout italiano mancano tasti utili. Questo aggiunge quelli che uso di più (suggerimenti benvenuti).</li></ul>',
				"// La pigrizia aguzza l'ingegno. O almeno le macro.",
			],
		},
		links: [{ type: "code", href: "https://github.com/Tizio0o0o0o/ahk" }],
	},
];
