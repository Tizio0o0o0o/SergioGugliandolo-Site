/* PROJECTS PAGE — projects in content/projects.js, texts in content/site.js -> projectsPage */
(function () {
	"use strict";
	var t = App.t;
	var P = window.SITE.projectsPage;
	// a skill can be preselected with a link like projects#print3d
	var active = (location.hash || "").slice(1) || null;
	if (active && !window.SITE.skills[active]) active = null;

	function render() {
		App.setTitle(t(P.title), t(P.description));
		var counts = {};
		window.PROJECTS.forEach(function (p) {
			(p.tags || []).forEach(function (tag) { counts[tag] = (counts[tag] || 0) + 1; });
		});
		var chips =
			'<button type="button" class="chip" data-skill="" aria-pressed="' + !active + '">' + t(P.all) + ' <span class="count">' + window.PROJECTS.length + "</span></button>" +
			Object.keys(window.SITE.skills)
				.filter(function (k) { return counts[k]; })
				.map(function (k) {
					return '<button type="button" class="chip" data-skill="' + k + '" aria-pressed="' + (active === k) + '">' + App.skillName(k) + ' <span class="count">' + counts[k] + "</span></button>";
				})
				.join("");
		var cards = window.PROJECTS.map(function (p) {
			return App.projectCard(p, { featured: p.featured, h: "h2" });
		}).join("");
		return (
			'<section class="page-head"><div class="wrap">' +
			'<span class="eyebrow reveal">' + t(P.eyebrow) + "</span>" +
			'<h1 class="reveal">' + t(P.heading) + "</h1>" +
			'<p class="lead reveal">' + t(P.lead) + "</p>" +
			"</div></section>" +
			'<div class="wrap">' +
			'<div class="filters"><div class="chips" role="group" aria-label="Filter">' + chips + "</div></div>" +
			'<div class="project-grid">' + cards + "</div>" +
			'<p class="empty-note">' + t(P.more).replace("{blank}", App.url("projects/blank_page")) + "</p>" +
			"</div>"
		);
	}

	function after(main) {
		var chips = main.querySelectorAll(".chip");
		var cards = main.querySelectorAll(".pcard");
		function apply() {
			cards.forEach(function (c) {
				var on = !active || (" " + c.getAttribute("data-tags") + " ").indexOf(" " + active + " ") > -1;
				c.classList.toggle("is-hidden", !on);
				// a featured card becomes a normal card while filtering
				if (c.classList.contains("is-featured") || c.hasAttribute("data-featured")) {
					c.setAttribute("data-featured", "");
					c.classList.toggle("is-featured", !active);
				}
			});
			chips.forEach(function (c) { c.setAttribute("aria-pressed", (c.getAttribute("data-skill") || null) === active); });
			if (history.replaceState) history.replaceState(null, "", location.pathname + location.search + (active ? "#" + active : ""));
		}
		chips.forEach(function (c) {
			c.addEventListener("click", function () {
				var k = c.getAttribute("data-skill") || null;
				active = active === k ? null : k;
				apply();
			});
		});
		apply();
	}

	App.page(render, after);
})();
