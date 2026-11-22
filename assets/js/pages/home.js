/* HOME PAGE — texts in content/home.js */
(function () {
	"use strict";
	var t = App.t, ui = App.ui, icon = App.icon, url = App.url, asset = App.asset;
	var H = window.HOME;
	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var rotTimer = 0; // typing effect timeout
	var scanFrame = 0; // scanner animation frame

	function clearTimers() {
		clearTimeout(rotTimer);
		cancelAnimationFrame(scanFrame);
	}

	function hero() {
		var tb = H.titleBlock;
		return (
			'<section class="hero"><div class="wrap hero-grid">' +
			"<div>" +
			'<span class="eyebrow reveal">' + t(H.eyebrow) + "</span>" +
			'<h1 class="reveal">Sergio<br>Gugliandolo<span class="cursor" aria-hidden="true"></span></h1>' +
			'<p class="rotator reveal">' + t(H.rotatorPrefix) + ' <span class="word" data-rotator></span><span class="caret" aria-hidden="true"></span></p>' +
			'<p class="lead reveal">' + t(H.intro) + "</p>" +
			'<div class="btn-row reveal">' +
			'<a class="btn btn-primary" href="' + url("projects") + '">' + t(H.ctaProjects) + icon("arrowRight", "i-move") + "</a>" +
			'<a class="btn" href="' + url("links") + '">' + t(H.ctaLinks) + "</a>" +
			"</div>" +
			"</div>" +
			'<div class="reveal" style="padding:24px 28px 0 0">' +
			'<figure class="sheet" style="margin:0">' +
			'<span class="dim dim-top">' + t(H.dimTop) + "</span>" +
			'<span class="dim dim-side">' + t(H.dimSide) + "</span>" +
			'<div class="sheet-img"><img src="' + asset("img/sergio.webp") + '" alt="' + App.esc(t(H.photoAlt)) + '" width="1080" height="720" fetchpriority="high"></div>' +
			'<figcaption class="titleblock">' +
			'<div><span class="k">' + t(tb.drawn) + "</span>S. Gugliandolo</div>" +
			'<div><span class="k">' + t(tb.scale) + "</span>1 : 1</div>" +
			'<div><span class="k">' + t(tb.rev) + "</span>" + new Date().getFullYear() + "</div>" +
			'<div class="wide">' + t(tb.caption) + "</div>" +
			"</figcaption></figure></div>" +
			"</div></section>"
		);
	}

	function now() {
		return (
			'<section class="section-tight"><div class="wrap">' +
			'<a class="card feature ticks reveal" href="' + url("projects/braintex") + '">' +
			'<div class="feature-body">' +
			'<span class="eyebrow">' + t(H.nowEyebrow) + "</span>" +
			'<div class="feature-logo"><img src="' + asset("projects/braintex/logo.webp") + '" alt="" width="52" height="58"><div><h2>BrainTex</h2>' + App.statusBadge("wip") + "</div></div>" +
			'<p style="color:var(--ink);font-weight:600">' + t(H.nowTitle) + "</p>" +
			"<p>" + t(H.nowText) + "</p>" +
			'<span class="btn btn-accent btn-sm">' + t(H.nowCta) + icon("arrowRight", "i-move") + "</span>" +
			"</div>" +
			'<div class="scanner" aria-hidden="true">' +
			'<img src="' + asset("projects/braintex/camera.webp") + '" alt="" loading="lazy">' +
			'<img class="detected" src="' + asset("projects/braintex/detected.webp") + '" alt="" loading="lazy">' +
			'<div class="beam"></div><div class="hud">' + t(H.scanHud) + "</div></div>" +
			"</a></div></section>"
		);
	}

	function about() {
		var stats = H.stats
			.map(function (s) {
				var v = s.value === "{projects}" ? String(window.PROJECTS.length) : String(t(s.value));
				var num = parseInt(v, 10);
				var suffix = v.replace(/^\d+/, "");
				return '<div class="stat reveal"><b data-count="' + num + '" data-suffix="' + suffix + '">' + v + "</b><span>" + t(s.label) + "</span></div>";
			})
			.join("");
		return (
			'<section class="section"><div class="wrap grid-2" style="align-items:start">' +
			'<div class="about-text reveal"><span class="eyebrow">' + t(H.aboutEyebrow) + "</span><h2>" + t(H.aboutTitle) + "</h2>" + App.paras(H.about) + "</div>" +
			"<div>" +
			'<a class="card sum-card tilt ticks reveal" href="' + url("-0.08(3)") + '">' +
			'<span class="eyebrow">' + t(H.sumLabel) + "</span>" +
			'<div class="big">' + t(H.sumValue) + "</div>" +
			'<div class="formula">1 + 2 + 3 + 4 + … = −1/12</div>' +
			'<p class="muted" style="margin:.9rem 0 0">' + t(H.sumTry) + "</p></a>" +
			'<div class="stats">' + stats + "</div>" +
			"</div></div></section>"
		);
	}

	// three hand-picked projects (home: true in content/projects.js) + shortcuts to the filtered projects page
	function selected() {
		var picks = window.PROJECTS.filter(function (p) { return p.home; });
		var counts = {};
		window.PROJECTS.forEach(function (p) {
			(p.tags || []).forEach(function (tag) { counts[tag] = (counts[tag] || 0) + 1; });
		});
		var chips = Object.keys(window.SITE.skills)
			.filter(function (k) { return counts[k]; })
			.map(function (k) {
				return '<a class="chip" href="' + url("projects#" + k) + '">' + App.skillName(k) + ' <span class="count">' + counts[k] + "</span></a>";
			})
			.join("");
		return (
			'<section class="section"><div class="wrap">' +
			'<div class="section-head reveal"><div><span class="eyebrow">' + t(H.selEyebrow) + "</span><h2>" + t(H.selTitle) + "</h2><p>" + t(H.selText) + "</p></div>" +
			'<a class="btn" href="' + url("projects") + '">' + t(H.selCta) + icon("arrowRight", "i-move") + "</a></div>" +
			'<div class="project-grid">' + picks.map(function (p) { return App.projectCard(p); }).join("") + "</div>" +
			'<div class="skill-links reveal"><span class="eyebrow">' + t(H.selSkills) + '</span><div class="chips">' + chips + "</div></div>" +
			"</div></section>"
		);
	}

	function path() {
		var items = H.timeline
			.map(function (e) {
				return (
					'<li class="reveal' + (e.now ? " is-now" : "") + '">' +
					'<span class="when">' + t(e.when) + "</span>" +
					"<h3>" + t(e.title) + "</h3>" +
					'<div class="where">' + t(e.where) + "</div>" +
					"<p>" + t(e.text) + "</p></li>"
				);
			})
			.join("");
		return (
			'<section class="section"><div class="wrap grid-2" style="align-items:start">' +
			'<div class="reveal"><span class="eyebrow">' + t(H.pathEyebrow) + "</span><h2>" + t(H.pathTitle) + "</h2>" +
			'<a class="btn" style="margin-top:1rem" href="' + asset("SergioGugliandoloCV.pdf") + '" target="_blank" rel="noopener">' + icon("file") + t(H.cvCta) + "</a></div>" +
			'<ol class="timeline">' + items + "</ol>" +
			"</div></section>"
		);
	}

	function contact() {
		return (
			'<section class="section-tight"><div class="wrap"><div class="card contact-band reveal">' +
			'<div><span class="eyebrow">' + t(H.contactEyebrow) + "</span><h2>" + t(H.contactTitle) + "</h2><p>" + t(H.contactText) + "</p></div>" +
			'<div class="btn-row">' +
			'<a class="btn btn-primary" href="https://t.me/Tizio0o0o0o">' + icon("telegram") + "Telegram</a>" +
			'<a class="btn" href="mailto:gugliandolosergio@gmail.com">' + icon("mail") + "Email</a>" +
			'<a class="btn" href="' + url("links") + '">' + t(H.contactAll) + icon("arrowRight", "i-move") + "</a>" +
			"</div></div></div></section>"
		);
	}

	function render() {
		App.setTitle(t(H.title), t(H.description));
		return hero() + now() + about() + selected() + path() + contact();
	}

	/* ---------- interactions ---------- */
	function startRotator(main) {
		var el = main.querySelector("[data-rotator]");
		var words = t(H.rotatorWords);
		if (!el || !words.length) return;
		if (reduceMotion) {
			el.textContent = words[0];
			return;
		}
		var w = 0, i = 0, deleting = false;
		(function tick() {
			var word = words[w];
			el.textContent = word.slice(0, i);
			var delay = deleting ? 32 : 70;
			if (!deleting && i === word.length) {
				deleting = true;
				delay = 1700;
			} else if (deleting && i === 0) {
				deleting = false;
				w = (w + 1) % words.length;
				delay = 300;
			} else {
				i += deleting ? -1 : 1;
			}
			rotTimer = setTimeout(tick, delay);
		})();
	}

	function startScanner(main) {
		var sc = main.querySelector(".scanner");
		if (!sc) return;
		if (reduceMotion) return sc.style.setProperty("--scan", "100%");
		var visible = false;
		new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(sc);
		var start = performance.now();
		(function frame(now) {
			var cycle = 5200, scan = 3600;
			var tt = (now - start) % cycle;
			if (visible) sc.style.setProperty("--scan", Math.min(100, (tt / scan) * 100).toFixed(2) + "%");
			scanFrame = requestAnimationFrame(frame);
		})(start);
	}

	function startCounters(main) {
		var els = main.querySelectorAll("[data-count]");
		if (reduceMotion || !("IntersectionObserver" in window)) return;
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (!e.isIntersecting) return;
				io.unobserve(e.target);
				var el = e.target, end = +el.getAttribute("data-count"), suf = el.getAttribute("data-suffix") || "";
				var t0 = performance.now();
				(function step(now) {
					var k = Math.min(1, (now - t0) / 1100);
					el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
					if (k < 1) requestAnimationFrame(step);
				})(t0);
			});
		}, { threshold: 0.6 });
		els.forEach(function (el) { io.observe(el); });
	}

	var timelineHandler = null;
	function startTimeline(main) {
		var tl = main.querySelector(".timeline");
		if (!tl) return;
		if (timelineHandler) window.removeEventListener("scroll", timelineHandler);
		timelineHandler = function () {
			var r = tl.getBoundingClientRect();
			var vh = window.innerHeight;
			var p = (vh * 0.7 - r.top) / r.height;
			tl.style.setProperty("--progress", Math.max(0, Math.min(1, p)).toFixed(3));
		};
		window.addEventListener("scroll", timelineHandler, { passive: true });
		timelineHandler();
	}

	function after(main) {
		clearTimers();
		startRotator(main);
		startScanner(main);
		startCounters(main);
		startTimeline(main);
	}

	App.page(render, after);
})();
