/* =====================================================================
   "-0.08(3)" PAGE CONTENT  (the "My skills?" joke)
   ===================================================================== */
window.SUM = {
	title: { en: "−0.08(3) · My skills", it: "−0,08(3) · Le mie competenze" },
	description: {
		en: "My skills? −0.08(3). Or at least I try. A short trip into 1 + 2 + 3 + … = −1/12.",
		it: "Le mie competenze? −0,08(3). O almeno ci provo. Un breve viaggio dentro 1 + 2 + 3 + … = −1/12.",
	},
	value: { en: "−0.08(3)", it: "−0,08(3)" },
	sub: { en: "My skills. Or at least I try.", it: "Le mie competenze. O almeno ci provo." },
	replay: { en: "Add them up again", it: "Risomma tutto" },
	intro: {
		en: "In the world of numbers there's a curious one: −0.08(3). It looks like an ordinary decimal, but it's hiding one of the most famous (and most abused) results in maths. Before the explanation, three quick questions. Feel free to skip them.",
		it: "Nel mondo dei numeri ce n'è uno curioso: −0,08(3). Sembra un decimale qualunque, ma nasconde uno dei risultati più famosi (e più maltrattati) della matematica. Prima della spiegazione, tre domande veloci. Puoi anche saltarle.",
	},
	q1: "1 + 2 + 3 =",
	q2: "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 =",
	q3: { en: "1 + 2 + 3 + 4 + … (up to infinity) =", it: "1 + 2 + 3 + 4 + … (fino all'infinito) =" },
	submit: { en: "Check", it: "Verifica" },
	skip: { en: "Skip the questions", it: "Salta le domande" },
	infinityWords: ["infinity", "infinite", "inf", "∞", "infinito", "+∞", "+infinity", "+infinito"],
	minusWords: ["-0.08(3)", "−0.08(3)", "-0,08(3)", "−0,08(3)", "-1/12", "−1/12", "-0.0833", "-0,0833"],
	fb: {
		ok1: { en: "Easy. Now with a few more numbers.", it: "Facile. Ora con qualche numero in più." },
		ko1: { en: "Not quite: it's 6. Let's pretend that didn't happen.", it: "Non proprio: fa 6. Facciamo finta di niente." },
		ok2: { en: "Gauss would be proud. Now the real one.", it: "Gauss sarebbe fiero. Ora quella vera." },
		ko2: {
			en: "It's 45. Gauss's trick: pair the first and last numbers, then the second and second-to-last… (1+9) + (2+8) + (3+7) + (4+6) + 5 = 10 + 10 + 10 + 10 + 5.",
			it: "Fa 45. Il trucco di Gauss: somma il primo e l'ultimo, poi il secondo e il penultimo… (1+9) + (2+8) + (3+7) + (4+6) + 5 = 10 + 10 + 10 + 10 + 5.",
		},
		inf: { en: "Correct! The answer is infinity!… or is it?", it: "Esatto! La risposta è infinito!… o no?" },
		minus: { en: "Yesss, that's what I wanted to hear. I like you. But… is it really the right answer?", it: "Sììì, è quello che volevo sentire. Mi piaci. Ma… è davvero la risposta giusta?" },
		other: { en: "Nice try. The answer is… let's see.", it: "Bel tentativo. La risposta è… vediamo." },
		skipped: { en: "Not into quizzes? No problem, the explanation works anyway.", it: "Niente quiz? Nessun problema, la spiegazione funziona lo stesso." },
	},
	// The explanation. MathML is allowed (<math>…</math>).
	explanation: {
		en: [
			"<h2>Unveiling −0.08(3)</h2>",
			"First of all, −0.08(3) is just another way to write −0.08333… (the 3 goes on forever), which is exactly <math><mo>−</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></math>. So the real question is:",
			"<h3>What is <math><mo>−</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></math>?</h3>",
			"The famous answer: it's the sum of all natural numbers. <strong>1 + 2 + 3 + 4 + … = −1/12</strong>.",
			'There are a couple of popular ways to "prove" it. The first is easier and you can watch it in <a href="https://www.youtube.com/watch?v=w-I6XTVZXww">this video</a> (I won\'t copy it here). The second is much more serious and goes through the Riemann zeta function (<a href="https://www.youtube.com/watch?v=sD0NjbwqlYw">this video</a> explains it).',
			"<h3>The best part: it's not true.</h3>",
			'The first video uses a trick: it shuffles and adds infinite series as if they were normal sums. That\'s only allowed for <em>convergent</em> series. If you fell for it, don\'t worry: with the same trick you could prove that anything equals anything else (<a href="https://www.youtube.com/watch?v=oaZKaV-oZ-g&t=249s">here\'s why</a>).',
			"And it makes sense: if you keep adding positive numbers that keep getting bigger, the result can't be a small negative fraction. The series diverges. The sum is infinite.",
			"<h3>…except it's not that simple either.</h3>",
			'The Riemann zeta function is <math><mi>ζ</mi><mo>(</mo><mi>s</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mn>1</mn><mi>s</mi></msup></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>s</mi></msup></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mn>3</mn><mi>s</mi></msup></mfrac><mo>+</mo><mo>…</mo></math>, and that series only makes sense when Re(s) &gt; 1. Plug in s = −1 and you get 1 + 2 + 3 + …, which diverges. But there\'s a unique way to extend ζ to (almost) the whole complex plane, called <em>analytic continuation</em>, and that extended function gives ζ(−1) = −1/12. <a href="https://www.youtube.com/watch?v=YuIIjLr6vUA&t=2139s">This video</a> explains it beautifully.',
			"So the sum of all natural numbers is not −1/12… even though, in a very precise sense, it is.",
		],
		it: [
			"<h2>Svelando −0,08(3)</h2>",
			"Prima di tutto, −0,08(3) è solo un altro modo di scrivere −0,08333… (il 3 continua all'infinito), che è esattamente <math><mo>−</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></math>. Quindi la vera domanda è:",
			"<h3>Che cos'è <math><mo>−</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></math>?</h3>",
			"La risposta famosa: è la somma di tutti i numeri naturali. <strong>1 + 2 + 3 + 4 + … = −1/12</strong>.",
			'Ci sono un paio di modi popolari per "dimostrarlo". Il primo è più semplice e lo trovi in <a href="https://www.youtube.com/watch?v=w-I6XTVZXww">questo video</a> (non lo copio qui). Il secondo è molto più serio e passa dalla funzione zeta di Riemann (<a href="https://www.youtube.com/watch?v=sD0NjbwqlYw">questo video</a> la spiega).',
			"<h3>La parte migliore: non è vero.</h3>",
			'Il primo video usa un trucco: rimescola e somma serie infinite come se fossero somme normali. Si può fare solo con le serie <em>convergenti</em>. Se ci sei cascato, tranquillo: con lo stesso trucco potresti dimostrare che qualsiasi cosa è uguale a qualsiasi altra (<a href="https://www.youtube.com/watch?v=oaZKaV-oZ-g&t=249s">ecco perché</a>).',
			"E ha senso: se continui a sommare numeri positivi sempre più grandi, il risultato non può essere una piccola frazione negativa. La serie diverge. La somma è infinita.",
			"<h3>…solo che non è neanche così semplice.</h3>",
			'La funzione zeta di Riemann è <math><mi>ζ</mi><mo>(</mo><mi>s</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mn>1</mn><mi>s</mi></msup></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>s</mi></msup></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mn>3</mn><mi>s</mi></msup></mfrac><mo>+</mo><mo>…</mo></math>, e quella serie ha senso solo quando Re(s) &gt; 1. Metti s = −1 e ottieni 1 + 2 + 3 + …, che diverge. Però esiste un modo unico di estendere ζ a (quasi) tutto il piano complesso, chiamato <em>prolungamento analitico</em>, e quella funzione estesa dà ζ(−1) = −1/12. <a href="https://www.youtube.com/watch?v=YuIIjLr6vUA&t=2139s">Questo video</a> lo spiega benissimo.',
			"Quindi la somma di tutti i numeri naturali non è −1/12… anche se, in un senso molto preciso, lo è.",
		],
	},

	// The point of it all, in a highlighted box: easy to find for whoever skips the maths
	skipToPoint: { en: "Too much maths? Skip to the point ↓", it: "Troppa matematica? Salta al punto ↓" },
	mathEnd: { en: "End of the maths. You survived.", it: "Fine della matematica. Sei sopravvissuto." },
	whyEyebrow: { en: "The point", it: "Il punto" },
	why: {
		en: [
			"<h2>So why am I telling you all this?</h2>",
			"Because it's the perfect description of my skill set. On paper it looks impossible. With the right tools, it kind of works. And the closer you look, the more interesting it gets.",
			"// So yes: my skills? −0.08(3). Or at least I try.",
		],
		it: [
			"<h2>E perché ti sto raccontando tutto questo?</h2>",
			"Perché è la descrizione perfetta delle mie competenze. Sulla carta sembra impossibile. Con gli strumenti giusti, più o meno funziona. E più guardi da vicino, più diventa interessante.",
			"// Quindi sì: le mie competenze? −0,08(3). O almeno ci provo.",
		],
	},
};
