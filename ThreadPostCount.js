// ==UserScript==
// @name        Kongregate Thread Post Count
// @namespace   ruudiluca.com
// @description Shows a post counter in threads
// @include     *//www.kongregate.com/forums/*/topics/*
// @version     1
// @grant       none
// ==/UserScript==

var a = document.getElementsByClassName("updated");
for(var i = 1; i < a.length + 1; i++){
  //Get post number
  var cP = document.getElementsByClassName("current")[0].innerHTML;
  var n;
  if(cP > 1){
    n = ((cP - 1)*25)+i;
  }
  else n = i;
  //Set number
  var abbr = a[i - 1];
  abbr.innerHTML = "#" + n + " - " + abbr.innerHTML;
}
