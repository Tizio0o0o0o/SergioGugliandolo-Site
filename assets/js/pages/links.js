/* LINKS PAGE — texts and links in content/links.js */
(function () {
	"use strict";
	var t = App.t, icon = App.icon, asset = App.asset;
	var L = window.LINKS;

	function linkCard(item) {
		var internal = !/^(https?:|mailto:)/.test(item.href) && !/\.\w+$/.test(item.href);
		var href = internal ? App.url(item.href) : asset(item.href);
		var brand = window.ICONS.brands[item.icon];
		var tile = item.color || (brand && brand.color) || "";
		var plain = !tile;
		var style = (tile ? "--tile:" + tile + ";" : "") + (item.ink ? "color:" + item.ink + ";" : "");
		var inner = item.image ? '<img src="' + asset(item.image) + '" alt="" loading="lazy">' : icon(item.icon);
		var arrow = internal ? icon("arrowRight") : icon("arrowUpRight");
		var newTab = internal ? "" : ' target="_blank" rel="noopener"';
		return (
			'<a class="link-card reveal' + (item.warn ? " is-warn" : "") + '" href="' + href + '"' + newTab + ">" +
			'<span class="link-icon' + (plain ? " is-plain" : "") + '" style="' + style + '">' + inner + "</span>" +
			'<span class="link-text"><b>' + t(item.title) + "</b>" + (item.sub ? "<small>" + t(item.sub) + "</small>" : "") + "</span>" +
			arrow + "</a>"
		);
	}

	function render() {
		App.setTitle(t(L.title), t(L.description));
		var sections = L.sections
			.map(function (s) {
				return '<section class="links-section"><h2>' + t(s.title) + '</h2><div class="link-list">' + s.items.map(linkCard).join("") + "</div></section>";
			})
			.join("");
		return (
			'<div class="links-page">' +
			'<section class="card profile reveal">' +
			'<div class="profile-banner"><img src="' + asset("img/sergio.webp") + '" alt="" width="1080" height="720" fetchpriority="high"></div>' +
			'<div class="avatar"><img src="' + asset("img/logo.webp") + '" alt="" width="64" height="64"></div>' +
			"<h1>Sergio Gugliandolo</h1>" +
			'<p class="role">' + t(L.role) + "</p>" +
			'<a class="now-pill" href="' + App.url("braintex") + '"><span class="dot pulse"></span><span>' + t(L.nowPill) + "</span>" + icon("arrowRight") + "</a>" +
			'<div class="quick">' +
			'<button type="button" class="btn btn-sm btn-primary" data-act="qr">' + icon("qr") + t(L.showQR) + "</button>" +
			'<button type="button" class="btn btn-sm" data-act="share">' + icon("share") + t(L.share) + "</button>" +
			"</div></section>" +
			sections +
			"</div>"
		);
	}

	function after(main) {
		main.querySelectorAll("[data-act]").forEach(function (b) {
			b.addEventListener("click", function () {
				var act = b.getAttribute("data-act");
				if (act === "qr") App.showQR(window.SITE.siteUrl, t(L.qrTitle));
				if (act === "share") App.share(window.SITE.siteUrl, "Sergio Gugliandolo");
			});
		});
	}

	App.page(render, after);
})();
