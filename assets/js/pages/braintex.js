/* BRAINTEX PAGE — my part in BrainTex. Texts in content/braintex.js */
(function () {
	"use strict";
	var t = App.t, ui = App.ui, icon = App.icon, asset = App.asset, url = App.url;
	var B = window.BRAINTEX;
	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var hinted = false;

	function render() {
		App.setTitle(t(B.title), t(B.lead));
		var c = B.compare;

		var head =
			'<div class="wrap"><section class="project-head">' +
			'<nav class="crumbs"><a href="' + url("projects") + '">' + icon("arrowLeft") + ui("allProjects") + "</a><span>/</span><span>BrainTex</span></nav>" +
			'<div class="meta-row" style="margin-top:1.4rem">' + App.statusBadge("wip") + '<span class="years">' + B.years + "</span></div>" +
			'<div class="bt-title reveal"><img src="' + asset("img/braintex/logo.webp") + '" alt="" width="64" height="68"><h1>' + t(B.headline) + "</h1></div>" +
			'<p class="lead reveal">' + t(B.lead) + "</p>" +
			"</section></div>";

		var intro =
			'<section class="section-tight"><div class="wrap grid-2">' +
			'<div class="reveal"><span class="eyebrow">' + t(B.introEyebrow) + "</span>" +
			'<div class="prose" style="margin-top:.8rem">' + App.paras(B.intro) + "</div>" +
			'<a class="btn" href="' + B.site + '" target="_blank" rel="noopener">' + icon("globe") + t(B.ctaSite) + icon("arrowUpRight") + "</a></div>" +
			'<div class="reveal">' +
			'<div class="compare" style="--pos:50%">' +
			'<img src="' + asset(c.before) + '" alt="' + App.esc(t(c.beforeLabel)) + '" width="860" height="860">' +
			'<img class="after" src="' + asset(c.after) + '" alt="' + App.esc(t(c.afterLabel)) + '" width="860" height="860">' +
			'<span class="lbl l">' + t(c.beforeLabel) + '</span><span class="lbl r">' + t(c.afterLabel) + "</span>" +
			'<div class="handle"></div>' +
			'<input type="range" min="0" max="100" value="50" aria-label="' + App.esc(t(c.beforeLabel) + " / " + t(c.afterLabel)) + '">' +
			"</div>" +
			'<p class="compare-caption">' + t(c.caption) + "</p>" +
			"</div></div></section>";

		var role =
			'<section class="section"><div class="wrap role-grid">' +
			'<figure class="mvp reveal" style="margin:0"><img src="' + asset("img/braintex/mvp.webp") + '" alt="' + App.esc(t(B.mvpCaption)) + '" loading="lazy"><figcaption>' + t(B.mvpCaption) + "</figcaption></figure>" +
			"<div>" +
			'<div class="reveal"><span class="eyebrow">' + t(B.roleEyebrow) + "</span><h2>" + t(B.roleTitle) + '</h2><p class="lead">' + t(B.roleIntro) + "</p></div>" +
			'<ul class="duties">' +
			B.duties.map(function (d) {
				return '<li class="reveal">' + icon(d.icon) + "<div><b>" + t(d.title) + "</b><span>" + t(d.text) + "</span></div></li>";
			}).join("") +
			"</ul></div></div></section>";

		var learn =
			'<section class="section-tight"><div class="wrap grid-2" style="align-items:start">' +
			'<div class="skillbox reveal"><span class="eyebrow">' + ui("skillUnlocked") + "</span><h2>" + t(B.learnTitle) + "</h2>" +
			"<ul>" + t(B.learn).map(function (l) { return "<li>" + l + "</li>"; }).join("") + "</ul></div>" +
			'<div class="reveal">' +
			'<div class="meme" style="margin-top:0">' + t(B.meme) + "</div>" +
			'<span class="eyebrow" style="margin:1.4rem 0 .8rem">' + t(B.teamEyebrow) + "</span>" +
			'<div class="team">' +
			B.team.map(function (m) {
				return '<div class="member' + (m.me ? " is-me" : "") + '"><b>' + m.name + "</b><span>" + m.role + (m.me ? " · " + t(B.me) : "") + "</span></div>";
			}).join("") +
			"</div></div></div></section>";

		var more =
			'<section class="section-tight"><div class="wrap"><div class="card contact-band reveal">' +
			"<div><h2>" + t(B.moreTitle) + "</h2><p>" + t(B.moreText) + "</p></div>" +
			'<div class="btn-row">' +
			'<a class="btn btn-primary" href="' + B.site + '" target="_blank" rel="noopener">' + icon("globe") + t(B.ctaSite) + "</a>" +
			'<a class="btn" href="' + B.linkedin + '" target="_blank" rel="noopener">' + icon("linkedin") + "LinkedIn</a>" +
			'<a class="btn" href="mailto:' + B.email + '">' + icon("mail") + t(B.ctaMail) + "</a>" +
			"</div></div></div></section>";

		return head + intro + role + learn + more;
	}

	function setupCompare(main) {
		var box = main.querySelector(".compare");
		if (!box) return;
		var input = box.querySelector("input");
		var dragging = false;
		function set(v) {
			v = Math.max(0, Math.min(100, v));
			box.style.setProperty("--pos", v + "%");
			input.value = v;
		}
		function fromEvent(e) {
			var r = box.getBoundingClientRect();
			set(((e.clientX - r.left) / r.width) * 100);
		}
		input.style.pointerEvents = "none";
		input.addEventListener("input", function () { set(+input.value); });
		box.addEventListener("pointerdown", function (e) {
			dragging = true;
			box.setPointerCapture(e.pointerId);
			fromEvent(e);
		});
		box.addEventListener("pointermove", function (e) { if (dragging) fromEvent(e); });
		box.addEventListener("pointerup", function () { dragging = false; });
		box.addEventListener("pointercancel", function () { dragging = false; });

		// a little "wiggle" the first time it's visible, to show it can be dragged
		if (reduceMotion || hinted || !("IntersectionObserver" in window)) return;
		var io = new IntersectionObserver(function (entries) {
			if (!entries[0].isIntersecting) return;
			io.disconnect();
			hinted = true;
			var t0 = performance.now();
			(function step(now) {
				if (dragging) return;
				var k = (now - t0) / 1800;
				if (k >= 1) return set(50);
				set(50 + Math.sin(k * Math.PI * 2) * 28 * (1 - k));
				requestAnimationFrame(step);
			})(t0);
		}, { threshold: 0.6 });
		io.observe(box);
	}

	App.page(render, setupCompare);
})();
