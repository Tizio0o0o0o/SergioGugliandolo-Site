/* =====================================================================
   BOOT — runs in <head>, before the page is painted.
   Decides theme + language as early as possible (no white flash),
   and sets up Google Analytics.
   ===================================================================== */
(function () {
	var root = document.documentElement;
	root.classList.add("js");

	function read(key) {
		try { return localStorage.getItem(key); } catch (e) { return null; }
	}
	function write(key, value) {
		try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
	}

	// ---- Theme: saved choice > device setting > light ----
	var savedTheme = read("theme");
	var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
	root.setAttribute("data-theme", savedTheme === "dark" || savedTheme === "light" ? savedTheme : prefersDark ? "dark" : "light");

	// ---- Language ----
	// On the real website every page has two addresses (so Google can index both languages):
	//     /projects      English
	//     /it/projects   Italian
	// The /it/ addresses exist thanks to one rule in _redirects, which works only on Cloudflare.
	// Everywhere else (local preview, double-clicked files) the language just switches in place.
	var SITE = "https://sergiogugliandolo.com";
	var PATH_LANG = /^https?:$/.test(location.protocol) && /(^|\.)sergiogugliandolo\.com$|\.pages\.dev$/.test(location.hostname);
	var SUPPORTED = ["en", "it"];
	var isBot = /bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent);
	var onItalianPath = /^\/it(\/|$)/.test(location.pathname);

	var fromQuery = null;
	try { fromQuery = new URLSearchParams(location.search).get("lang"); } catch (e) {}
	var lang = null;
	if (fromQuery && SUPPORTED.indexOf(fromQuery) > -1) {
		lang = fromQuery; // ?lang=it still works for old links
		write("lang", lang);
	} else if (PATH_LANG && onItalianPath) {
		lang = "it"; // the address says Italian
	} else if (PATH_LANG && isBot) {
		lang = "en"; // search engines read each address as it is
	} else {
		// saved choice > device languages > English
		var saved = read("lang");
		if (saved && SUPPORTED.indexOf(saved) > -1) lang = saved;
		var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
		for (var i = 0; i < list.length && !lang; i++) {
			var code = String(list[i]).toLowerCase().slice(0, 2);
			if (SUPPORTED.indexOf(code) > -1) lang = code;
		}
	}
	lang = lang || "en";
	root.setAttribute("lang", lang);
	window.SG_PATH_LANG = PATH_LANG; // read by core.js

	// tell search engines which address is the main one for this page + language
	if (PATH_LANG && !document.querySelector('meta[name="robots"][content*="noindex"]')) {
		var page = location.pathname.replace(/^\/it(\/|$)/, "/").replace(/\.html$/, "");
		var canonical = document.createElement("link");
		canonical.rel = "canonical";
		canonical.href = SITE + (lang === "it" ? "/it" : "") + (page === "/" ? "/links" : page);
		document.head.appendChild(canonical);
	}

	// ---- Google Analytics (consent handled by Cookiebot) ----
	window.dataLayer = window.dataLayer || [];
	window.gtag = function () { window.dataLayer.push(arguments); };
	window.gtag("js", new Date());
	window.gtag("config", "G-RS544LBE5K");
})();
