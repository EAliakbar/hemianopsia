// ==UserScript==
// @name        Goodreads.com bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @include     http://www.goodreads.com/*
// @include     https://www.goodreads.com/*
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/goodreads.user.js
// @grant       none
// @version     0.2
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;
	var manifest = [
		{
			path_re: [
				/^\/topic\/show/,
				/^\/review\/show/
			],
			selector: 'div.reviewText',
			comment: 'static rendered reviews'
		}, {
			path_re: /^\/book\/show/,
			root_selector: 'div.mainContentFloat',
			selector: 'div.reviewText',
			live: true,
			comment: 'reviews in book\'s page [ajax]'
		}, {
			path_re: /^\/author\/show/,
			selector: 'div.quoteText',
			comment: 'quotes from author',
		}, {
			path_re: [
				/^\/topic\/show/,
				/^\/review\/show/
			],
			selector: 'textarea#comment_body_usertext',
			input: true,
			comment: 'user comments on topic and review pages'
		}, {
			path_re: /^\/group\/show/,
			selector: '#topInfo',
			comment: 'group info'
		}, {
			path_re: /^\/book\/show/,
			root_selector: 'div.mainContentFloat',
			selector: 'div.reviewFooter textarea',
			live: true,
			input: true,
			comment: 'comment textbox on book page'
		}
	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
