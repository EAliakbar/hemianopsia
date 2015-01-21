// ==UserScript==
// @name        Trello.com bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @include     https://trello.com/*
// @include     http://trello.com/*
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/trello.user.js
// @grant       none
// @version     0.1
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;
	var manifest = [
		{
			path_re: /^\/[bc]\/.*/,
			root_selector: '#content',
			selector: ['a.list-card-title', 'div.action-comment p'],
			live: true,
			comment: 'desktop boxes'
		}, {
			path_re: /^\/[bc]\/.*/,
			root_selector: 'div.window-overlay',
			selector: ['div.card-detail-item', 'div.js-card-desc', 'div.action-comment p', 'div.checklist'],
			live: true,
			comment: 'popup boxes'
		}
	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
