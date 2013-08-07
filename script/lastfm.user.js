// ==UserScript==
// @name        Last.fm bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @include     http://www.last.fm/*
// @include     http://www.lastfm.tld/*
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/lastfm.user.js
// @grant       none
// @version     1.1
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;
	var manifest = [
		{
			path_re: /^\/user\/[^\/]+\/journal/,
			selector: '#content div.journals div.journalBody div.bbcode',
			comment: 'journal text'
		}, {
			path_re: /shoutbox$/,
			selector: '#content div.fullWidth div.skylineRight div.skyWrap div#shoutbox ul#shoutList.shouts li.clearit p',
			comment: 'paged shoutbox'
		}, {
			path_re: /^\/user\/[^\/]+\/journal/,
			comment: 'journal comments'
		}, {
			path_re: [
				/^\/music\/[^\/]+\//,
				/^\/user\/[^\/]+$/,
				/^\/group\/[^\/]+$/,
				/^\/music\/[^\/]+$/
			],
			root_selector: 'div.deferred',
			selector: 'div.shoutboxContainer ul.shouts li p',
			live: true,
			comment: 'in-page shoutbox'
		}
	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
