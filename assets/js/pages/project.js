/* SINGLE PROJECT PAGE — which project is decided by <body data-project="..."> */
(function () {
	"use strict";
	var t = App.t, ui = App.ui, icon = App.icon, url = App.url;
	var id = document.body.getAttribute("data-project");
	var p = App.findProject(id);
	var photoIndex = 0;
	var versionIndex = 0;
	var codeCache = null;
	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var hinted = false;

	function photos() {
		return (p.photos || []).map(function (f) { return App.projectImg(p, f); });
	}

	function gallery() {
		var list = photos();
		if (!list.length) return "";
		var thumbs =
			list.length > 1
				? '<div class="thumbs">' +
				  list.map(function (src, i) {
						return '<button type="button" class="plate" data-i="' + i + '" aria-label="' + (i + 1) + '" aria-current="' + (i === photoIndex) + '"><img src="' + src + '" alt="" loading="lazy"></button>';
				  }).join("") +
				  "</div>"
				: "";
		var nav =
			list.length > 1
				? '<button type="button" class="icon-btn gallery-nav prev" aria-label="' + ui("prev") + '">' + icon("chevronLeft") + "</button>" +
				  '<button type="button" class="icon-btn gallery-nav next" aria-label="' + ui("next") + '">' + icon("chevronRight") + "</button>" +
				  '<span class="gallery-count">' + (photoIndex + 1) + " / " + list.length + "</span>"
				: "";
		return (
			'<div class="gallery reveal">' +
			'<div class="gallery-main plate" role="button" tabindex="0" aria-label="' + ui("zoom") + '">' +
			'<img src="' + list[photoIndex] + '" alt="' + App.esc(t(p.title)) + '">' + nav +
			"</div>" + thumbs + "</div>"
		);
	}

	function linkButton(l) {
		var label, hint = "", ic, href = App.asset(l.href);
		if (l.type === "model3d") {
			ic = "cube";
			label = l.label ? t(l.label) : ui("open3d");
			hint = ui("open3dHint");
		} else if (l.type === "pdf") {
			ic = "file";
			label = l.label ? t(l.label) : ui("downloadPdf");
		} else if (l.type === "code") {
			ic = "github";
			label = l.label ? t(l.label) : ui("sourceCode");
		} else {
			ic = l.icon || "arrowUpRight";
			label = t(l.label);
		}
		return (
			'<a class="btn" href="' + href + '"' + (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "") + ">" + icon(ic) +
			"<span>" + label + (hint ? '<br><small class="muted" style="font-weight:400">' + hint + "</small>" : "") + "</span>" +
			icon("arrowUpRight") + "</a>"
		);
	}

	function aside() {
		var learned = (t(p.learned) || []).map(function (l) { return "<li>" + l + "</li>"; }).join("");
		var tags = (p.tags || []).map(function (k) {
			return '<a class="tag" href="' + url("projects#" + k) + '">' + App.skillName(k) + "</a>";
		}).join("");
		var links = (p.links || []).map(linkButton).join("");
		return (
			'<aside class="project-aside">' +
			'<div class="skillbox reveal">' +
			'<span class="eyebrow">' + ui("skillUnlocked") + "</span>" +
			"<h2>" + t(p.skill) + "</h2>" +
			(learned ? '<p class="muted" style="font-size:.85rem;margin:-.3rem 0 .8rem">' + ui("whatILearned") + ":</p><ul>" + learned + "</ul>" : "") +
			'<div class="tags">' + tags + "</div>" +
			"</div>" +
			(links ? '<div class="aside-links reveal">' + links + "</div>" : "") +
			"</aside>"
		);
	}

	function specs() {
		if (!p.specs) return "";
		return '<ul class="specs">' + p.specs.map(function (s) { return "<li><b>" + t(s.k) + "</b>" + t(s.v) + "</li>"; }).join("") + "</ul>";
	}

	function versions() {
		if (!p.versions) return "";
		var tabs = p.versions.map(function (v, i) {
			return '<button type="button" role="tab" data-v="' + i + '" aria-selected="' + (i === versionIndex) + '">' + v.name + "</button>";
		}).join("");
		return (
			'<section class="versions reveal">' +
			"<h2>" + ui("versionsTitle") + "</h2>" +
			'<div class="version-tabs" role="tablist">' + tabs + "</div>" +
			'<div class="version-progress"><span></span></div>' +
			'<div class="card version-panel" role="tabpanel" aria-live="polite"></div>' +
			"</section>"
		);
	}

	function versionPanel() {
		var v = p.versions[versionIndex];
		var problems = (t(v.problems) || []).map(function (x) { return "<li>" + x + "</li>"; }).join("");
		var last = versionIndex === p.versions.length - 1;
		return (
			"<h3>" + v.name + "</h3>" +
			"<p>" + t(v.text) + "</p>" +
			'<span class="eyebrow">' + ui("problemsFound") + "</span>" +
			'<ul class="problems">' + problems + "</ul>" +
			'<div class="btn-row">' +
			(v.model3d ? '<a class="btn btn-sm" href="' + v.model3d + '" target="_blank" rel="noopener">' + icon("cube") + ui("open3d") + " " + v.name + "</a>" : "") +
			(!last ? '<button type="button" class="btn btn-sm btn-primary" data-next-version>' + ui("nextVersion") + icon("arrowRight", "i-move") + "</button>" : "") +
			"</div>"
		);
	}

	// before/after slider (optional "compare" field in content/projects.js)
	function compareBlock() {
		var c = p.compare;
		return (
			'<div class="reveal">' +
			'<div class="compare" style="--pos:50%">' +
			'<img src="' + App.projectImg(p, c.before) + '" alt="' + App.esc(t(c.beforeLabel)) + '">' +
			'<img class="after" src="' + App.projectImg(p, c.after) + '" alt="' + App.esc(t(c.afterLabel)) + '">' +
			'<span class="lbl l">' + t(c.beforeLabel) + '</span><span class="lbl r">' + t(c.afterLabel) + "</span>" +
			'<div class="handle"></div>' +
			'<input type="range" min="0" max="100" value="50" aria-label="' + App.esc(t(c.beforeLabel) + " / " + t(c.afterLabel)) + '">' +
			"</div>" +
			'<p class="compare-caption">' + t(c.caption) + "</p>" +
			"</div>"
		);
	}

	function codePeek() {
		if (!p.code) return "";
		return '<details class="code-peek reveal"><summary>' + icon("code") + ui("peekCode") + '</summary><pre><code>' + ui("loading") + "</code></pre></details>";
	}

	// "Building something similar? Write me" (skipped when the project has  contact: false)
	function contactBox() {
		if (p.contact === false) return "";
		var c = window.SITE.contact;
		var subject = encodeURIComponent(ui("similarSubject") + t(p.title));
		return (
			'<div class="card contact-band is-compact reveal">' +
			'<div><span class="eyebrow">' + ui("similarEyebrow") + "</span><h2>" + ui("similarTitle") + "</h2><p>" + ui("similarText") + "</p></div>" +
			'<div class="btn-row">' +
			'<a class="btn btn-primary" href="' + c.telegram + '" target="_blank" rel="noopener">' + icon("telegram") + "Telegram</a>" +
			'<a class="btn" href="mailto:' + c.email + "?subject=" + subject + '">' + icon("mail") + "Email</a>" +
			'<a class="btn" href="' + url("links") + '">' + ui("allLinks") + icon("arrowRight", "i-move") + "</a>" +
			"</div></div>"
		);
	}

	function pager() {
		var list = window.PROJECTS;
		var i = list.indexOf(p);
		var prev = list[(i - 1 + list.length) % list.length];
		var next = list[(i + 1) % list.length];
		return (
			'<nav class="pager">' +
			'<a class="card ticks" href="' + App.projectUrl(prev) + '"><span class="k">' + icon("arrowLeft") + ui("prevProject") + "</span><b>" + t(prev.title) + "</b></a>" +
			'<a class="card ticks next" href="' + App.projectUrl(next) + '"><span class="k">' + ui("nextProject") + icon("arrowRight") + "</span><b>" + t(next.title) + "</b></a>" +
			"</nav>"
		);
	}

	function render() {
		if (!p) return '<div class="wrap error-page"><p>' + ui("notFound") + '</p><a class="btn" href="' + url("projects") + '">' + ui("allProjects") + "</a></div>";
		App.setTitle(t(p.title) + " · Sergio Gugliandolo", t(p.tagline));
		return (
			'<div class="wrap">' +
			'<section class="project-head">' +
			'<nav class="crumbs"><a href="' + url("projects") + '">' + icon("arrowLeft") + ui("allProjects") + "</a><span>/</span><span>" + t(p.title) + "</span></nav>" +
			'<div class="meta-row" style="margin-top:1.4rem">' + App.statusBadge(p.status) + (p.years ? '<span class="years">' + p.years + "</span>" : "") + "</div>" +
			'<h1 class="reveal">' + t(p.title) + "</h1>" +
			'<p class="lead reveal">' + t(p.tagline) + "</p>" +
			"</section>" +
			'<div class="project-layout">' +
			'<div class="area-gallery">' + (p.compare ? compareBlock() : gallery()) + "</div>" +
			aside() +
			'<div class="area-body"><div class="prose reveal">' + specs() + App.paras(p.body) + "</div>" +
			(p.compare && p.photos && p.photos.length ? '<div class="after-gallery">' + gallery() + "</div>" : "") +
			versions() + codePeek() + contactBox() + pager() + "</div>" +
			"</div></div>"
		);
	}

	/* ---------- interactions ---------- */
	function setupGallery(main) {
		var list = photos();
		var box = main.querySelector(".gallery-main");
		if (!box) return;
		var img = box.querySelector("img");
		var count = box.querySelector(".gallery-count");
		var thumbs = main.querySelectorAll(".thumbs button");
		function show(i) {
			photoIndex = (i + list.length) % list.length;
			img.classList.add("is-leaving");
			setTimeout(function () {
				img.src = list[photoIndex];
				img.classList.remove("is-leaving");
			}, 150);
			if (count) count.textContent = photoIndex + 1 + " / " + list.length;
			thumbs.forEach(function (b, k) { b.setAttribute("aria-current", k === photoIndex); });
		}
		box.addEventListener("click", function (e) {
			if (e.target.closest(".prev")) return show(photoIndex - 1);
			if (e.target.closest(".next")) return show(photoIndex + 1);
			App.lightbox(list, photoIndex, t(p.title));
		});
		box.addEventListener("keydown", function (e) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				App.lightbox(list, photoIndex, t(p.title));
			}
			if (e.key === "ArrowLeft") show(photoIndex - 1);
			if (e.key === "ArrowRight") show(photoIndex + 1);
		});
		thumbs.forEach(function (b) {
			b.addEventListener("click", function () { show(+b.getAttribute("data-i")); });
		});
		if (list.length > 1) App.swipe(box, function (d) { show(photoIndex + d); });
	}

	function setupVersions(main) {
		if (!p.versions) return;
		var panel = main.querySelector(".version-panel");
		var tabs = main.querySelectorAll(".version-tabs button");
		var bar = main.querySelector(".version-progress span");
		function select(i, focus) {
			versionIndex = Math.max(0, Math.min(p.versions.length - 1, i));
			panel.innerHTML = versionPanel();
			tabs.forEach(function (b, k) {
				b.setAttribute("aria-selected", k === versionIndex);
				b.tabIndex = k === versionIndex ? 0 : -1;
			});
			if (focus) tabs[versionIndex].focus();
			bar.style.width = ((versionIndex + 1) / p.versions.length) * 100 + "%";
			var nextBtn = panel.querySelector("[data-next-version]");
			if (nextBtn) nextBtn.addEventListener("click", function () { select(versionIndex + 1, true); });
		}
		tabs.forEach(function (b) {
			b.addEventListener("click", function () { select(+b.getAttribute("data-v")); });
			b.addEventListener("keydown", function (e) {
				if (e.key === "ArrowRight") select(versionIndex + 1, true);
				if (e.key === "ArrowLeft") select(versionIndex - 1, true);
			});
		});
		select(versionIndex);
	}

	function setupCode(main) {
		var det = main.querySelector(".code-peek");
		if (!det) return;
		var code = det.querySelector("code");
		function fill() {
			code.textContent = codeCache;
		}
		if (codeCache) fill();
		det.addEventListener("toggle", function () {
			if (!det.open || codeCache) return;
			fetch(p.code)
				.then(function (r) {
					if (!r.ok) throw new Error(r.status);
					return r.text();
				})
				.then(function (txt) {
					codeCache = txt;
					fill();
				})
				.catch(function () {
					code.textContent = ui("loadError");
				});
		});
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
		input.style.pointerEvents = "none"; // the box handles mouse/touch, the input handles the keyboard
		input.addEventListener("input", function () { set(+input.value); });
		box.addEventListener("pointerdown", function (e) {
			dragging = true;
			box.setPointerCapture(e.pointerId);
			fromEvent(e);
		});
		box.addEventListener("pointermove", function (e) { if (dragging) fromEvent(e); });
		box.addEventListener("pointerup", function () { dragging = false; });
		box.addEventListener("pointercancel", function () { dragging = false; });
		// a little wiggle the first time it's visible, to show it can be dragged
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

	function after(main) {
		if (!p) return;
		setupGallery(main);
		setupVersions(main);
		setupCode(main);
		setupCompare(main);
	}

	App.page(render, after);
})();
