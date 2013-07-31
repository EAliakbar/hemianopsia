hemianopsia
===========

Greasemonkey scripts for adding RTL languages support to some websites.


Abstract
--------
Some websites are not properly styled to render RTL scripts. This happens commonly in Web 2.0 and specially for texts entered by users.
It could bother when a text block had been mixed of phrases from languages differing in direction and this is not unusual.
Users generally are not complaining about these problems. They've learned by experience how to get passage from cluttered text or finally have gave up and preferred to write entirely in ASCII characters and LTR layout.


Anyway, adding support for *basic* bidirectional text rendering needs only a little code to examine characters by which text had been written and then rearrange them. Upcoming scripts are intended to do this.

Code
----
Target website could define translation rules as a *Manifest*. Manifest is almost set of CSS selectors whose text may contain RTL script. Then codes in `core.js` uses this rules to add necessary styles.


Use
---
User scripts resides in [script folder](https://github.com/reith/hemianopsia/tree/master/script).
For example [install it for last.fm](https://github.com/reith/hemianopsia/raw/master/script/lastfm.user.js).
