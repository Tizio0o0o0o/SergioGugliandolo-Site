/* =====================================================================
   CORE — shared by every page.
   - language (EN/IT) + theme (light/dark)
   - header, footer, background animation
   - small helpers used by the page scripts in assets/js/pages/
   You normally don't need to touch this file to change texts:
   texts live in /content.
   ===================================================================== */
(function () {
	"use strict";

	var root = document.documentElement;
	var body = document.body;
	var ROOT = body.getAttribute("data-root") || ""; // "../" for pages inside /projects
	var IS_FILE = location.protocol === "file:";
	// true on the real website: Italian pages live at /it/... (see boot.js)
	var PATH_LANG = !!window.SG_PATH_LANG;
	var IT_PATH = /^\/it(\/|$)/;
	// absolute address of the site's root folder, without the /it/ part
	var SITE_ROOT = new URL(ROOT || "./", location.href);
	SITE_ROOT = IS_FILE ? SITE_ROOT.href : SITE_ROOT.pathname;
	if (PATH_LANG && IT_PATH.test(location.pathname)) SITE_ROOT = SITE_ROOT.replace(/it\/$/, "");
	var SITE = window.SITE;
	var PROJECTS = window.PROJECTS || [];
	var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

	var App = (window.App = {});
	App.lang = root.getAttribute("lang") === "it" ? "it" : "en";

	/* ---------------- helpers ---------------- */

	// t({en, it}) -> text in the current language (falls back to English)
	App.t = function (v) {
		if (v == null) return "";
		if (typeof v === "string" || typeof v === "number" || Array.isArray(v)) return v;
		return v[App.lang] != null ? v[App.lang] : v.en != null ? v.en : "";
	};
	// ui("key") -> UI string from content/site.js
	App.ui = function (key) {
		var v = SITE.ui[key];
		return v == null ? key : App.t(v);
	};
	// url("projects/reseq") -> link to a page of this site, in the current language
	// (online: /it/projects/reseq in Italian; locally: projects/reseq.html)
	App.url = function (page) {
		if (/^(https?:|mailto:|tel:|#)/.test(page)) return page;
		var parts = page.split("#");
		var path = parts[0];
		var isFile = /\.\w+$/.test(path);
		if (IS_FILE && path && !isFile) path += ".html";
		var prefix = PATH_LANG && App.lang === "it" && !isFile ? "it/" : "";
		return SITE_ROOT + prefix + path + (parts[1] ? "#" + parts[1] : "");
	};
	// asset("img/logo.webp") -> path to a file of this site (same for both languages)
	App.asset = function (p) {
		return /^(https?:|mailto:|tel:|data:|blob:)/.test(p) ? p : SITE_ROOT + p;
	};
	App.esc = function (s) {
		return String(s).replace(/[&<>"']/g, function (c) {
			return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
		});
	};
	App.isExternal = function (href) {
		return /^https?:\/\//.test(href) && href.indexOf(location.host || "@@") === -1;
	};
	// icon("arrowRight") or icon("github")
	App.icon = function (name, cls) {
		cls = cls || "";
		var ui = window.ICONS.ui[name];
		if (ui) return '<svg class="i i-stroke ' + cls + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + ui + '"/></svg>';
		var brand = window.ICONS.brands[name];
		if (brand) return '<svg class="i i-fill ' + cls + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + brand.path + '"/></svg>';
		return "";
	};
	// paragraphs: plain strings become <p>, strings starting with "<" are raw HTML,
	// strings starting with "//" become a meme box
	App.paras = function (list) {
		return (App.t(list) || [])
			.map(function (p) {
				p = String(p).trim();
				if (p.indexOf("//") === 0) return '<div class="meme">' + p.slice(2).trim() + "</div>";
				if (p.charAt(0) === "<") return p;
				return "<p>" + p + "</p>";
			})
			.join("");
	};
	App.projectUrl = function (p) {
		return App.url(p.page || "projects/" + p.id);
	};
	App.projectImg = function (p, file) {
		return App.asset(file.indexOf("/") > -1 ? file : "projects/" + p.id + "/" + file);
	};
	App.findProject = function (id) {
		for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return PROJECTS[i];
		return null;
	};
	App.statusBadge = function (status) {
		var s = SITE.status[status] || SITE.status.done;
		return '<span class="badge status-' + status + '" title="' + App.esc(App.t(s.hint)) + '"><span class="dot"></span>' + App.t(s.label) + "</span>";
	};
	App.skillName = function (key) {
		return SITE.skills[key] ? App.t(SITE.skills[key]) : key;
	};
	App.extAttrs = function (href) {
		return App.isExternal(href) ? ' target="_blank" rel="noopener"' : "";
	};

	// project card, used on home + projects page
	App.projectCard = function (p, opts) {
		opts = opts || {};
		var cover = App.projectImg(p, p.cover || p.photos[0]);
		return (
			'<a class="card pcard tilt ticks reveal' + (opts.featured ? " is-featured" : "") + '" href="' + App.projectUrl(p) + '" data-tags="' + (p.tags || []).join(" ") + '">' +
			'<div class="plate">' + App.statusBadge(p.status) +
			'<img src="' + cover + '" alt="' + App.esc(App.t(p.title)) + '" loading="lazy"' + (p.coverFill ? ' class="cover-fill"' : "") + "></div>" +
			'<div class="pcard-body">' +
			'<div class="meta-row">' + (p.years ? '<span class="years mono">' + p.years + "</span>" : "") + "</div>" +
			"<" + (opts.h || "h3") + ' class="pcard-title">' + App.t(p.title) + "</" + (opts.h || "h3") + ">" +
			'<p class="pcard-tagline">' + App.t(p.tagline) + "</p>" +
			'<div class="skill-line"><span class="k">' + App.ui("skillUnlocked") + "</span><span>" + App.t(p.skill) + "</span></div>" +
			"</div></a>"
		);
	};

	/* ---------------- language ---------------- */
	App.setLang = function (lang) {
		if (lang === App.lang) return;
		App.lang = lang;
		root.setAttribute("lang", lang);
		try { localStorage.setItem("lang", lang); } catch (e) {}
		syncAddress();
		App.refresh();
	};

	// keep the address bar in sync with the language: /page <-> /it/page
	// (also drops the old ?lang= parameter). No page reload.
	function syncAddress() {
		if (!history.replaceState) return;
		var search = location.search.replace(/([?&])lang=[^&]*&?/, "$1").replace(/[?&]$/, "");
		var path = location.pathname;
		if (PATH_LANG) {
			var page = path.replace(IT_PATH, "/");
			path = App.lang === "it" ? "/it" + page : page;
			var canonical = document.querySelector('link[rel="canonical"]');
			if (canonical) canonical.href = "https://sergiogugliandolo.com" + (App.lang === "it" ? "/it" : "") + page;
		}
		if (path !== location.pathname || search !== location.search) history.replaceState(null, "", path + search + location.hash);
	}

	/* ---------------- theme ---------------- */
	var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
	App.theme = function () {
		return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
	};
	function applyTheme(theme) {
		root.setAttribute("data-theme", theme);
		var meta = document.querySelector('meta[name="theme-color"]');
		if (!meta) {
			meta = document.createElement("meta");
			meta.name = "theme-color";
			document.head.appendChild(meta);
		}
		meta.content = theme === "dark" ? "#08101c" : "#f2f5f9";
		var btn = document.querySelector(".theme-btn");
		if (btn) {
			btn.innerHTML = App.icon(theme === "dark" ? "sun" : "moon");
			btn.setAttribute("aria-label", App.ui(theme === "dark" ? "toLight" : "toDark"));
		}
		if (App.onThemeChange) App.onThemeChange(theme);
	}
	App.toggleTheme = function () {
		var next = App.theme() === "dark" ? "light" : "dark";
		var system = darkQuery.matches ? "dark" : "light";
		// if the choice equals the device setting, forget it and keep following the device
		try {
			if (next === system) localStorage.removeItem("theme");
			else localStorage.setItem("theme", next);
		} catch (e) {}
		applyTheme(next);
	};
	var onSystemTheme = function (e) {
		var saved = null;
		try { saved = localStorage.getItem("theme"); } catch (err) {}
		if (!saved) applyTheme(e.matches ? "dark" : "light");
	};
	if (darkQuery.addEventListener) darkQuery.addEventListener("change", onSystemTheme);
	else if (darkQuery.addListener) darkQuery.addListener(onSystemTheme);

	/* ---------------- header & footer ---------------- */
	function headerHTML() {
		var current = body.getAttribute("data-nav");
		var links = SITE.nav
			.map(function (n) {
				var cur = n.id === current ? ' aria-current="page"' : "";
				var dot = n.dot ? '<span class="dot pulse" style="--c:var(--signal)"></span>' : "";
				return '<a href="' + App.url(n.href) + '"' + cur + ">" + App.t(n.label) + dot + "</a>";
			})
			.join("");
		var mobile = SITE.nav
			.map(function (n) {
				var cur = n.id === current ? ' aria-current="page"' : "";
				return '<a href="' + App.url(n.href) + '"' + cur + ">" + App.t(n.label) + App.icon("arrowRight") + "</a>";
			})
			.join("");
		var theme = App.theme();
		return (
			'<a class="skip-link" href="#app">' + App.ui("skip") + "</a>" +
			'<div class="wrap header-inner">' +
			'<a class="brand" href="' + App.url("home") + '"><img src="' + App.asset("img/logo.webp") + '" alt="" width="30" height="30" class="gear">' +
			'<span class="brand-full">Sergio Gugliandolo</span><span class="brand-short">Sergio G.</span></a>' +
			'<nav class="nav" aria-label="' + App.ui("menu") + '">' + links + "</nav>" +
			'<div class="tools">' +
			'<div class="seg" role="group" aria-label="' + App.ui("language") + '">' +
			'<button type="button" data-lang="en" aria-pressed="' + (App.lang === "en") + '" title="English">EN</button>' +
			'<button type="button" data-lang="it" aria-pressed="' + (App.lang === "it") + '" title="Italiano">IT</button></div>' +
			'<button type="button" class="icon-btn theme-btn" aria-label="' + App.ui(theme === "dark" ? "toLight" : "toDark") + '">' + App.icon(theme === "dark" ? "sun" : "moon") + "</button>" +
			'<button type="button" class="icon-btn menu-btn" aria-expanded="false" aria-label="' + App.ui("menu") + '">' + App.icon("menu") + "</button>" +
			"</div></div>" +
			'<nav class="mobile-nav" aria-label="' + App.ui("menu") + '">' + mobile + "</nav>"
		);
	}

	function footerHTML() {
		var social = SITE.social
			.map(function (s) {
				return '<a class="icon-btn" href="' + s.href + '"' + App.extAttrs(s.href) + ' aria-label="' + s.label + '" title="' + s.label + '">' + App.icon(s.icon) + "</a>";
			})
			.join("");
		return (
			'<div class="wrap footer-inner">' +
			"<div>" +
			'<a class="brand" href="' + App.url("home") + '"><img src="' + App.asset("img/logo.webp") + '" alt="" width="26" height="26" class="gear">Sergio Gugliandolo</a>' +
			"<p>" + App.ui("footerLine") + "</p>" +
			'<p class="footer-joke">' + App.ui("footerJoke") + "</p>" +
			"</div>" +
			'<div class="footer-meta">' +
			'<a href="' + SITE.repo + '" target="_blank" rel="noopener">' + App.ui("footerSource") + "</a>" +
			'<a href="' + App.asset("SergioGugliandoloCV.pdf") + '" target="_blank" rel="noopener">' + App.ui("footerCV") + "</a>" +
			'<a href="' + SITE.repo + '/blob/main/LICENSE" target="_blank" rel="noopener">GPL-3.0 · © ' + new Date().getFullYear() + " Sergio Gugliandolo</a>" +
			"</div>" +
			'<div class="footer-social">' + social + "</div>" +
			"</div>"
		);
	}

	var header, footer, main, toTop;
	function renderChrome() {
		if (!header) {
			header = document.createElement("header");
			header.className = "site-header";
			body.insertBefore(header, body.firstChild);
		}
		header.innerHTML = headerHTML();
		if (body.getAttribute("data-footer") !== "none") {
			if (!footer) {
				footer = document.createElement("footer");
				footer.className = "site-footer";
				body.appendChild(footer);
			}
			footer.innerHTML = footerHTML();
		}
		if (!toTop) {
			toTop = document.createElement("button");
			toTop.className = "icon-btn to-top";
			toTop.type = "button";
			toTop.innerHTML = App.icon("arrowUp");
			toTop.addEventListener("click", function () {
				window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
			});
			body.appendChild(toTop);
		}
		toTop.setAttribute("aria-label", App.ui("backToTop"));

		header.querySelectorAll("[data-lang]").forEach(function (b) {
			b.addEventListener("click", function () {
				App.setLang(b.getAttribute("data-lang"));
			});
		});
		header.querySelector(".theme-btn").addEventListener("click", App.toggleTheme);
		var menuBtn = header.querySelector(".menu-btn");
		menuBtn.addEventListener("click", function () {
			var open = header.classList.toggle("is-open");
			menuBtn.setAttribute("aria-expanded", open);
			menuBtn.innerHTML = App.icon(open ? "close" : "menu");
		});
	}

	/* ---------------- page rendering ---------------- */
	var pageRender = null;
	var pageAfter = null;

	// Page scripts call: App.page(function render() { return "<html>" }, function after(main) { ... })
	App.page = function (render, after) {
		pageRender = render;
		pageAfter = after;
		App.refresh();
	};

	App.refresh = function () {
		main = document.getElementById("app");
		renderChrome();
		if (pageRender) {
			main.innerHTML = pageRender();
			if (pageAfter) pageAfter(main);
		}
		enhance(main);
		applyTheme(App.theme());
	};

	App.setTitle = function (title, description) {
		document.title = title;
		if (description) {
			var m = document.querySelector('meta[name="description"]');
			if (m) m.setAttribute("content", description);
		}
	};

	/* ---------------- enhancements ---------------- */
	var revealObserver =
		"IntersectionObserver" in window
			? new IntersectionObserver(
					function (entries) {
						entries.forEach(function (e) {
							if (e.isIntersecting) {
								e.target.classList.add("is-in");
								revealObserver.unobserve(e.target);
							}
						});
					},
					{ rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
			  )
			: null;

	function enhance(scope) {
		// open external links in a new tab
		document.querySelectorAll('a[href^="http"]').forEach(function (a) {
			if (App.isExternal(a.href)) {
				a.target = "_blank";
				a.rel = "noopener";
			}
		});
		// scroll reveal, with a small stagger for siblings
		scope.querySelectorAll(".reveal").forEach(function (el, i) {
			if (!revealObserver || reduceMotion) return el.classList.add("is-in");
			if (!el.style.getPropertyValue("--delay")) {
				var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
				el.style.setProperty("--delay", Math.min(idx, 6) * 0.06 + "s");
			}
			revealObserver.observe(el);
		});
		// 3D tilt on cards (mouse only)
		if (finePointer && !reduceMotion) {
			scope.querySelectorAll(".tilt").forEach(function (el) {
				el.addEventListener("pointermove", function (e) {
					var r = el.getBoundingClientRect();
					var x = (e.clientX - r.left) / r.width - 0.5;
					var y = (e.clientY - r.top) / r.height - 0.5;
					el.style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
					el.style.setProperty("--ry", (x * 6).toFixed(2) + "deg");
				});
				el.addEventListener("pointerleave", function () {
					el.style.setProperty("--rx", "0deg");
					el.style.setProperty("--ry", "0deg");
				});
			});
		}
	}

	// header shadow, rotating gear, back-to-top
	var ticking = false;
	window.addEventListener(
		"scroll",
		function () {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(function () {
				var y = window.scrollY;
				if (header) header.classList.toggle("is-scrolled", y > 8);
				if (toTop) toTop.classList.toggle("is-visible", y > 700);
				if (!reduceMotion) {
					document.querySelectorAll(".gear").forEach(function (g) {
						g.style.transform = "rotate(" + (y * 0.25).toFixed(1) + "deg)";
					});
				}
				ticking = false;
			});
		},
		{ passive: true }
	);

	/* ---------------- background: interactive dot grid ---------------- */
	function startBackground() {
		if (body.getAttribute("data-bg") === "none") return;
		var canvas = document.createElement("canvas");
		canvas.id = "bg";
		canvas.setAttribute("aria-hidden", "true");
		body.insertBefore(canvas, body.firstChild);
		var ctx = canvas.getContext("2d");
		if (!ctx) return;
		var GAP = 26;
		var RADIUS = 170;
		var w = 0, h = 0, dpr = 1;
		var rgb = "36, 98, 184";
		var target = { x: -1, y: -1, active: false, last: 0 };
		var cur = { x: 0, y: 0 };
		var start = performance.now();
		var lastFrame = 0;
		var running = true;

		function readColor() {
			rgb = getComputedStyle(root).getPropertyValue("--dot").trim() || rgb;
		}
		function resize() {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			draw(performance.now());
		}
		function draw(now) {
			var t = (now - start) / 1000;
			// when nobody is pointing, a soft "light" drifts around by itself
			var idle = !target.active || now - target.last > 2500;
			var tx = idle ? w * (0.5 + 0.38 * Math.sin(t * 0.11)) : target.x;
			var ty = idle ? h * (0.35 + 0.25 * Math.sin(t * 0.17 + 1.3)) : target.y;
			if (reduceMotion) {
				tx = -9999;
				ty = -9999;
			}
			cur.x += (tx - cur.x) * (idle ? 0.03 : 0.16);
			cur.y += (ty - cur.y) * (idle ? 0.03 : 0.16);

			ctx.clearRect(0, 0, w, h);
			var offset = reduceMotion ? 0 : -((window.scrollY * 0.12) % GAP);
			var r2 = RADIUS * RADIUS;
			var near = [];
			ctx.fillStyle = "rgba(" + rgb + ",0.20)";
			ctx.beginPath();
			for (var y = offset + GAP / 2; y < h + GAP; y += GAP) {
				for (var x = GAP / 2; x < w; x += GAP) {
					var dx = x - cur.x, dy = y - cur.y;
					var d2 = dx * dx + dy * dy;
					if (d2 < r2) near.push(x, y, d2);
					else ctx.rect(x - 0.6, y - 0.6, 1.2, 1.2);
				}
			}
			ctx.fill();
			for (var i = 0; i < near.length; i += 3) {
				var d = Math.sqrt(near[i + 2]);
				var k = 1 - d / RADIUS;
				var e = k * k;
				var px = near[i] + ((near[i] - cur.x) / (d + 1)) * e * 7;
				var py = near[i + 1] + ((near[i + 1] - cur.y) / (d + 1)) * e * 7;
				var s = 1.2 + e * 2.2;
				ctx.fillStyle = "rgba(" + rgb + "," + (0.2 + e * 0.65).toFixed(3) + ")";
				ctx.fillRect(px - s / 2, py - s / 2, s, s);
			}
		}
		function loop(now) {
			if (!running) return;
			requestAnimationFrame(loop);
			if (now - lastFrame < 32) return; // ~30 fps is plenty for a background
			lastFrame = now;
			draw(now);
		}
		function onPointer(e) {
			target.x = e.clientX;
			target.y = e.clientY;
			target.active = true;
			target.last = performance.now();
		}
		readColor();
		cur.x = window.innerWidth / 2;
		cur.y = window.innerHeight / 3;
		resize();
		window.addEventListener("resize", resize);
		if (!reduceMotion) {
			window.addEventListener("pointermove", onPointer, { passive: true });
			window.addEventListener("pointerdown", onPointer, { passive: true });
			document.addEventListener("visibilitychange", function () {
				running = !document.hidden;
				if (running) requestAnimationFrame(loop);
			});
			requestAnimationFrame(loop);
		} else {
			window.addEventListener("scroll", function () { draw(performance.now()); }, { passive: true });
		}
		var prev = App.onThemeChange;
		App.onThemeChange = function (theme) {
			if (prev) prev(theme);
			readColor();
			draw(performance.now());
		};
	}

	/* ---------------- overlays ---------------- */
	function openOverlay(cls, inner, onKey) {
		var ov = document.createElement("div");
		ov.className = "overlay " + cls;
		ov.setAttribute("role", "dialog");
		ov.setAttribute("aria-modal", "true");
		ov.innerHTML = '<button type="button" class="icon-btn close" aria-label="' + App.ui("close") + '">' + App.icon("close") + "</button>" + inner;
		var lastFocus = document.activeElement;
		function close() {
			ov.remove();
			document.removeEventListener("keydown", key);
			body.style.overflow = "";
			if (lastFocus && lastFocus.focus) lastFocus.focus();
		}
		function key(e) {
			if (e.key === "Escape") close();
			else if (onKey) onKey(e);
		}
		ov.addEventListener("click", function (e) {
			if (e.target === ov || e.target.closest(".close")) close();
		});
		document.addEventListener("keydown", key);
		body.appendChild(ov);
		body.style.overflow = "hidden";
		ov.querySelector(".close").focus();
		return { el: ov, close: close };
	}

	// Full-screen photo viewer with arrows, keyboard and swipe
	App.lightbox = function (images, index, alt) {
		var i = index || 0;
		var ov = openOverlay(
			"lightbox",
			'<img alt="">' +
				(images.length > 1
					? '<button type="button" class="icon-btn prev" aria-label="' + App.ui("prev") + '">' + App.icon("chevronLeft") + "</button>" +
					  '<button type="button" class="icon-btn next" aria-label="' + App.ui("next") + '">' + App.icon("chevronRight") + "</button>"
					: "") +
				'<div class="count"></div>',
			function (e) {
				if (e.key === "ArrowLeft") go(-1);
				if (e.key === "ArrowRight") go(1);
			}
		);
		var img = ov.el.querySelector("img");
		var count = ov.el.querySelector(".count");
		function show() {
			img.src = images[i];
			img.alt = alt || "";
			count.textContent = images.length > 1 ? i + 1 + " / " + images.length : "";
		}
		function go(d) {
			i = (i + d + images.length) % images.length;
			show();
		}
		if (images.length > 1) {
			ov.el.querySelector(".prev").addEventListener("click", function () { go(-1); });
			ov.el.querySelector(".next").addEventListener("click", function () { go(1); });
			App.swipe(ov.el, go);
		}
		show();
	};

	// swipe left/right on touch screens
	App.swipe = function (el, cb) {
		var x0 = null, y0 = null;
		el.addEventListener("touchstart", function (e) {
			x0 = e.touches[0].clientX;
			y0 = e.touches[0].clientY;
		}, { passive: true });
		el.addEventListener("touchend", function (e) {
			if (x0 === null) return;
			var dx = e.changedTouches[0].clientX - x0;
			var dy = e.changedTouches[0].clientY - y0;
			if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) cb(dx < 0 ? 1 : -1);
			x0 = null;
		}, { passive: true });
	};

	App.toast = function (msg) {
		var t = document.createElement("div");
		t.className = "toast";
		t.setAttribute("role", "status");
		t.textContent = msg;
		body.appendChild(t);
		setTimeout(function () { t.remove(); }, 2700);
	};

	App.loadScript = function (src) {
		return new Promise(function (resolve, reject) {
			var s = document.createElement("script");
			s.src = App.asset(src);
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		});
	};

	/* ---------------- QR codes & contacts ---------------- */
	// Build a vCard (contact file) from an object in content/qr.js -> vcards
	App.vcard = function (v) {
		return [
			"BEGIN:VCARD",
			"VERSION:3.0",
			"N:" + v.lastName + ";" + v.firstName + ";;;",
			"FN:" + v.firstName + " " + v.lastName,
			v.org && "ORG:" + v.org,
			v.title && "TITLE:" + v.title,
			v.phone && "TEL;TYPE=CELL:" + v.phone,
			v.email && "EMAIL;TYPE=INTERNET:" + v.email,
			v.url && "URL:" + v.url,
			v.city && "ADR;TYPE=WORK:;;;" + v.city + ";;;" + (v.country || ""),
			"END:VCARD",
		]
			.filter(Boolean)
			.join("\r\n");
	};
	App.downloadContact = function (v, filename) {
		var blob = new Blob([App.vcard(v)], { type: "text/vcard;charset=utf-8" });
		var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = (filename || "Sergio-Gugliandolo") + ".vcf";
		body.appendChild(a);
		a.click();
		setTimeout(function () {
			URL.revokeObjectURL(a.href);
			a.remove();
		}, 1500);
	};
	function qrMatrix(text) {
		/* global qrcode */
		qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
		var qr = qrcode(0, "M");
		qr.addData(text);
		qr.make();
		return qr;
	}
	// returns a Promise of an <svg> string (loads the QR library only when needed)
	App.qrSvg = function (text) {
		return (window.qrcode ? Promise.resolve() : App.loadScript("assets/vendor/qrcode.js")).then(function () {
			var qr = qrMatrix(text);
			var n = qr.getModuleCount();
			var d = "";
			for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) d += "M" + c + " " + r + "h1v1h-1z";
			return '<svg viewBox="-2 -2 ' + (n + 4) + " " + (n + 4) + '" shape-rendering="crispEdges" role="img" aria-label="QR code"><rect x="-2" y="-2" width="' + (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + d + '" fill="#0d1520"/></svg>';
		});
	};
	App.qrPng = function (text, filename) {
		return App.qrSvg(text).then(function () {
			var qr = qrMatrix(text);
			var n = qr.getModuleCount();
			var scale = 16, margin = 4;
			var size = (n + margin * 2) * scale;
			var c = document.createElement("canvas");
			c.width = c.height = size;
			var ctx = c.getContext("2d");
			ctx.fillStyle = "#fff";
			ctx.fillRect(0, 0, size, size);
			ctx.fillStyle = "#0d1520";
			for (var r = 0; r < n; r++) for (var col = 0; col < n; col++) if (qr.isDark(r, col)) ctx.fillRect((col + margin) * scale, (r + margin) * scale, scale, scale);
			var a = document.createElement("a");
			a.href = c.toDataURL("image/png");
			a.download = (filename || "qr") + ".png";
			body.appendChild(a);
			a.click();
			a.remove();
		});
	};
	App.showQR = function (text, title) {
		App.qrSvg(text).then(function (svg) {
			openOverlay("qr-overlay", '<div><div class="qr-big">' + svg + '</div><div class="qr-title">' + App.esc(title || "") + "</div></div>");
		});
	};
	App.share = function (url, title) {
		if (navigator.share) {
			navigator.share({ title: title, url: url }).catch(function () {});
		} else if (navigator.clipboard) {
			navigator.clipboard.writeText(url).then(function () { App.toast(App.ui("copied")); });
		} else {
			window.prompt(App.ui("copyThis"), url);
		}
	};

	/* ---------------- start ---------------- */
	syncAddress();
	startBackground();
})();
