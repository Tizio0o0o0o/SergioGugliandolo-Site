/* "-0.08(3)" PAGE — texts in content/sum.js */
(function () {
	"use strict";
	var t = App.t, icon = App.icon;
	var S = window.SUM;
	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	// quiz progress survives a language switch
	var state = { step: 1, solved: {}, feedback: null, explained: false };
	var counterFrame = 0;

	function render() {
		App.setTitle(t(S.title), t(S.description));
		var row = function (n, label, type) {
			var solved = state.solved[n];
			return (
				'<div class="card quiz-row' + (solved ? " is-solved" : "") + '" data-q="' + n + '"' + (state.step < n ? " hidden" : "") + ">" +
				'<label for="q' + n + '">' + (solved ? solved : t(label)) + "</label>" +
				(solved
					? ""
					: '<input id="q' + n + '" type="' + type + '" inputmode="' + (type === "number" ? "numeric" : "text") + '" autocomplete="off" required>' +
					  '<button type="submit" class="btn btn-sm btn-primary" data-submit="' + n + '">' + t(S.submit) + "</button>") +
				"</div>"
			);
		};
		return (
			'<section class="sum-hero"><div class="wrap wrap-narrow">' +
			'<span class="eyebrow reveal">Σ n</span>' +
			'<div class="huge reveal">' + t(S.value) + "</div>" +
			'<p class="lead reveal">' + t(S.sub) + "</p>" +
			'<div class="card counter reveal" aria-hidden="true">' +
			'<div class="series">1 + 2 + 3 + …</div>' +
			'<div class="total">= 1</div>' +
			'<button type="button" class="btn btn-sm" data-replay>' + icon("replay") + t(S.replay) + "</button>" +
			"</div></div></section>" +
			'<section class="section-tight"><div class="wrap wrap-narrow">' +
			'<p class="lead">' + t(S.intro) + "</p>" +
			'<form class="quiz" novalidate>' +
			row(1, S.q1, "number") + row(2, S.q2, "number") + row(3, S.q3, "text") +
			"</form>" +
			'<p class="feedback" aria-live="polite">' + (state.feedback ? t(S.fb[state.feedback]) : "") + "</p>" +
			(state.explained ? "" : '<button type="button" class="btn btn-sm" data-skip>' + t(S.skip) + "</button>") +
			'<div class="explanation"' + (state.explained ? "" : " hidden") + ' style="margin-top:2rem">' +
			'<a class="skip-to-point" href="#why">' + t(S.skipToPoint) + "</a>" +
			'<div class="prose">' + App.paras(S.explanation) + "</div>" +
			'<p class="math-end">' + t(S.mathEnd) + "</p>" +
			'<section id="why" class="why-card prose"><span class="eyebrow">' + t(S.whyEyebrow) + "</span>" + App.paras(S.why) + "</section>" +
			"</div>" +
			"</div></section>"
		);
	}

	function normalize(s) {
		return String(s).trim().toLowerCase().replace(/\s+/g, "");
	}

	function check(n, main) {
		var input = main.querySelector("#q" + n);
		if (!input) return;
		var v = input.value;
		if (n === 1) {
			if (+v === 6) {
				state.solved[1] = "1 + 2 + 3 = 6";
				state.step = 2;
				state.feedback = "ok1";
			} else state.feedback = "ko1";
		} else if (n === 2) {
			if (+v === 45) {
				state.solved[2] = "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45";
				state.step = 3;
				state.feedback = "ok2";
			} else state.feedback = "ko2";
		} else {
			var a = normalize(v);
			state.feedback = S.infinityWords.indexOf(a) > -1 ? "inf" : S.minusWords.map(normalize).indexOf(a) > -1 ? "minus" : "other";
			state.solved[3] = "1 + 2 + 3 + 4 + … = ?";
			state.explained = true;
		}
		App.refresh();
		var next = document.querySelector("#q" + state.step);
		if (next && !state.explained) next.focus();
		if (state.explained) document.querySelector(".feedback").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
	}

	function skip() {
		state.solved = { 1: "1 + 2 + 3 = 6", 2: "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45", 3: "1 + 2 + 3 + 4 + … = ????" };
		state.step = 3;
		state.feedback = "skipped";
		state.explained = true;
		App.refresh();
	}

	// 1 + 2 + 3 + … climbs to astronomic numbers, then glitches into -1/12
	function runCounter(main) {
		var total = main.querySelector(".counter .total");
		var series = main.querySelector(".counter .series");
		cancelAnimationFrame(counterFrame);
		var locale = App.lang === "it" ? "it-IT" : "en-US";
		var finalText = "= −1/12 = " + t(S.value);
		total.classList.remove("is-glitch");
		if (reduceMotion || typeof BigInt === "undefined") {
			series.textContent = "1 + 2 + 3 + 4 + …";
			total.textContent = finalText;
			return;
		}
		var k = 0;
		var start = performance.now();
		(function frame(now) {
			var elapsed = now - start;
			if (elapsed < 3200) {
				k = elapsed / 3200;
				var n = BigInt(Math.max(1, Math.floor(Math.pow(10, k * 15))));
				var sum = (n * (n + BigInt(1))) / BigInt(2);
				series.textContent = "1 + 2 + 3 + … + " + n.toLocaleString(locale);
				total.textContent = "= " + sum.toLocaleString(locale);
				counterFrame = requestAnimationFrame(frame);
			} else if (elapsed < 4000) {
				total.textContent = "= ∞ ?";
				counterFrame = requestAnimationFrame(frame);
			} else {
				series.textContent = "1 + 2 + 3 + 4 + …";
				total.textContent = finalText;
				total.classList.add("is-glitch");
			}
		})(start);
	}

	function after(main) {
		var form = main.querySelector(".quiz");
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			check(state.step, main);
		});
		var skipBtn = main.querySelector("[data-skip]");
		if (skipBtn) skipBtn.addEventListener("click", skip);
		main.querySelector("[data-replay]").addEventListener("click", function () { runCounter(main); });
		runCounter(main);
	}

	App.page(render, after);
})();
