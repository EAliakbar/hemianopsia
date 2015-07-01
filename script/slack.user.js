// ==UserScript==
// @name        Slack bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @include     https://*.slack.com/*
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/slack.user.js
// @grant       none
// @version     1.0
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;
	var manifest = [
		{
			root_selector: '#msgs_div',
			live: true,
			selector: [
				'span.message_content',
				'div.comment'
			],
			comment: 'messages and their comments'
		}
	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
