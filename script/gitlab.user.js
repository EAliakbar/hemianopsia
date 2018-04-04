// ==UserScript==
// @name        GitLab bidi
// @namespace   https://github.com/reith/hemianopsia
// @description This script rearranges right-to-left written texts
// @require     https://raw.github.com/reith/hemianopsia/master/core.js
// @downloadURL https://raw.github.com/reith/hemianopsia/master/script/gitlab.user.js
// @grant       none
// @version     0.2
// @run-at      document-end
// ==/UserScript==

(function() {
	if (window.top != window.self) return;
	var manifest = [
		{
			path_re: [
				/.*\/issues\/.*/,
			],
			selector: 'h2.title',
			comment: 'Merge request title'
		}, {
			path_re: /.*\/issues\/.*/,
			selector: 'div.wiki p',
			comment: 'Merge request comments'
		}
	];

	prepare_style();
	(new Bidier()).run(manifest);
})();
