// ==UserScript==
// @name        Hide Dev Toolbar
// @namespace   ruudiluca.com
// @description Hides the developer toolbar on Kongregate
// @include     *://www.kongregate.com*
// @version     1
// @grant       none
// ==/UserScript==

document.getElementById("main_nav_dev").style.display = "none";
