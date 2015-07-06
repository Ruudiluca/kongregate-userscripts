// ==UserScript==
// @name        Kongregate Forums: Larger Avatars
// @namespace   ruudiluca.com
// @author      Ruudiluca
// @include     http://www.kongregate.com/forums/*/topics/*
// @include     http://www.kongregate.com/posts
// @include     http://www.kongregate.com/users/*/posts
// @version     1
// @grant       none
// ==/UserScript==


//Enlarge image
var aStyle = document.createElement("style");
aStyle.innerHTML = ".post .user_avatar {width: 80px; height: 80px;}"; //Change px values for different sizes
var head = document.getElementsByTagName("head")[0];
head.appendChild(aStyle);

//Replace avatar image with non-pixelated version
var aImgs = document.getElementsByClassName("hover_profile");
for(var i = 0; i < aImgs.length; i++){
  aImgs[i].innerHTML = aImgs[i].innerHTML.replace("40x40", "140x140");
}