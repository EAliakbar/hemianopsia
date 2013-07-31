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
			comment: 'for journal'
		}, {
			selector: 'div.deferred div.shoutboxContainer ul.shouts li.clearit p',
			root_selector: '#content div.leftCol div.leftColWrapper',
			live: true,
			comment: 'for shoutbox in user profile'
		}, {
			selector: '#content div.fullWidth div.skylineRight div.skyWrap div#shoutbox ul#shoutList.shouts li.clearit p',
			comment: 'paged shoutbox'
		}, {
			selector: 'div.deferred div.shoutboxContainer ul.shouts li.clearit p',
			root_selector: 'body.r-artist div.page-wrapper article.content div.artist-social',
			live: true,
			comment: 'shoutbox in artist page'
		}
	];

	prepare_style();
	console.log('bidier', Bidier);
	(new Bidier()).run(manifest);
})();
