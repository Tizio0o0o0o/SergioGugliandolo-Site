/* 404 PAGE and "nothing here yet" PAGE — texts in content/site.js -> errors
   <body data-kind="notFound"> or <body data-kind="blank"> */
(function () {
	"use strict";
	var t = App.t;
	var E = window.SITE.errors;
	var kind = document.body.getAttribute("data-kind") || "notFound";
	var e = E[kind];

	function render() {
		App.setTitle(t(e.title));
		var video =
			kind === "blank"
				? '<div class="video-frame reveal"><video autoplay muted loop playsinline controls preload="metadata">' +
				  '<source src="' + App.asset("projects/rickroll.mp4") + '" type="video/mp4"></video></div>'
				: "";
		return (
			'<div class="wrap error-page">' +
			'<div class="code reveal">' + (kind === "blank" ? "¯\\_(ツ)_/¯" : "404") + "</div>" +
			'<h1 class="reveal" style="font-size:clamp(1.8rem,4vw,2.8rem);margin-top:1rem">' + t(e.heading) + "</h1>" +
			'<p class="lead reveal" style="max-width:52ch;margin-inline:auto">' + t(e.text) + "</p>" +
			video +
			'<div class="btn-row">' +
			'<a class="btn btn-primary" href="' + App.url("home") + '">' + t(E.home) + "</a>" +
			'<a class="btn" href="' + App.url("projects") + '">' + t(E.projects) + "</a>" +
			"</div></div>"
		);
	}

	App.page(render);
})();
