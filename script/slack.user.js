// ==UserScript==
// @name        Slack bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @include     https://*.slack.com/*
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/slack.user.js
// @grant       none
// @version     1.3
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;
	var manifest = [
		{ // DEPRECATED
			root_selector: '#msgs_div',
			live: true,
			selector: [
				'span.message_body',
				'div.comment'
			],
			comment: 'messages and their comments'
		},
		{
			root_selector: '#messages_container',
			live: true,
			selector: [
				'span.c-message__body',
			],
			comment: 'New messages'
		},
		{
			root_selector: '#file_preview_comments_section',
			live: true,
			selector: [
				'div.comment_body',
			],
			comment: 'Threads sidebar'
		}

	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
