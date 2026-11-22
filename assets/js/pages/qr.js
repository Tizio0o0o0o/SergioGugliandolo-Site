/* QR PAGE (unlisted) — texts and contact data in content/qr.js */
(function () {
	"use strict";
	var t = App.t, icon = App.icon;
	var Q = window.QRPAGE;
	var V = Q.vcards;

	function payload(card) {
		return card.type === "vcard" ? App.vcard(V[card.vcard]) : card.url;
	}
	function summary(card) {
		if (card.type !== "vcard") return card.url.replace(/^https?:\/\//, "");
		var v = V[card.vcard];
		return [v.firstName + " " + v.lastName, v.title && v.org ? v.title + " · " + v.org : v.org, v.email, v.phone, v.url && v.url.replace(/^https?:\/\//, "")]
			.filter(Boolean)
			.map(App.esc)
			.join("<br>");
	}

	function render() {
		App.setTitle(t(Q.title));
		var cards = Q.cards
			.map(function (c, i) {
				var buttons =
					c.type === "vcard"
						? '<button type="button" class="btn btn-sm btn-primary" data-save="' + i + '">' + icon("userPlus") + t(Q.save) + "</button>"
						: '<button type="button" class="btn btn-sm btn-primary" data-share="' + i + '">' + icon("share") + t(Q.share) + "</button>";
				return (
					'<article class="card qr-card reveal">' +
					"<h2>" + t(c.title) + "</h2><p>" + t(c.text) + "</p>" +
					'<button type="button" class="qr-tile" data-show="' + i + '" aria-label="' + App.esc(t(c.title)) + ' — ' + App.ui("zoom") + '"><span class="sr-only">QR</span></button>' +
					'<p class="vcard-lines">' + summary(c) + "</p>" +
					'<div class="btn-row">' + buttons +
					'<button type="button" class="btn btn-sm" data-png="' + i + '">' + icon("download") + t(Q.png) + "</button></div>" +
					"</article>"
				);
			})
			.join("");
		return (
			'<section class="page-head"><div class="wrap">' +
			'<span class="eyebrow reveal">' + t(Q.eyebrow) + "</span>" +
			'<h1 class="reveal">' + t(Q.heading) + "</h1>" +
			'<p class="lead reveal">' + t(Q.lead) + "</p>" +
			"</div></section>" +
			'<div class="wrap"><div class="qr-grid">' + cards + "</div></div>"
		);
	}

	function after(main) {
		main.querySelectorAll("[data-show]").forEach(function (b) {
			var c = Q.cards[+b.getAttribute("data-show")];
			App.qrSvg(payload(c)).then(function (svg) { b.innerHTML = svg; });
			b.addEventListener("click", function () { App.showQR(payload(c), t(c.title)); });
		});
		main.querySelectorAll("[data-save]").forEach(function (b) {
			b.addEventListener("click", function () {
				var c = Q.cards[+b.getAttribute("data-save")];
				App.downloadContact(V[c.vcard], "Sergio-Gugliandolo" + (c.vcard === "braintex" ? "-BrainTex" : ""));
			});
		});
		main.querySelectorAll("[data-share]").forEach(function (b) {
			b.addEventListener("click", function () { App.share(Q.cards[+b.getAttribute("data-share")].url, "Sergio Gugliandolo"); });
		});
		main.querySelectorAll("[data-png]").forEach(function (b) {
			b.addEventListener("click", function () {
				var c = Q.cards[+b.getAttribute("data-png")];
				App.qrPng(payload(c), "QR-" + (c.vcard || "website"));
			});
		});
	}

	App.page(render, after);
})();
