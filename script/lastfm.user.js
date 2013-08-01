// ==UserScript==
// @name        Last.fm bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @include     http://www.last.fm/*
// @include     http://www.lastfm.tld/*
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/lastfm.user.js
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;

	var manifest = [
		{
			selector: '#content div.journals div.journalBody div.bbcode',
			comment: 'journal text'
		}, {
			selector: 'div.shoutboxContainer ul.shouts li.clearit p',
			root_selector: 'div#content > div.leftCol > div.leftColWrapper > div.deferred',
			live: true,
			comment: 'shoutbox in user and group profile'
		}, {
			selector: '#content div.fullWidth div.skylineRight div.skyWrap div#shoutbox ul#shoutList.shouts li.clearit p',
			comment: 'paged shoutbox'
		}, {
			selector: 'div.shoutboxContainer ul.shouts li.clearit p',
			root_selector: 'body.r-artist > div.page-wrapper > article.content > div.artist-social > section > div.deferred',
			live: true,
			comment: 'shoutbox in artist page'
		}, {
			selector: '#content div.journals div#shoutbox ul#shoutList.shouts li.clearit p',
			comment: 'journal comments'
		}
	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
