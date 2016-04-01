// ==UserScript==
// @name        Kongregate: Crow Language Support
// @namespace   ruudiluca.com
// @description Implements a crow language on Kongregate
// @include     *www.kongregate.com*
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener('load', function() {
  changeText(document.body);
}, false);

function changeText(node) {
  if(node.nodeType === 1)
    return [].forEach.call(node.childNodes, changeText);
  if(node.nodeType === 3)  
    node.textContent = node.textContent.replace(/\w+/g, "CAW");
}
