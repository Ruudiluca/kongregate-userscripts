// ==UserScript==
// @name        Kongregate Forums: Larger Avatars
// @namespace   ruudiluca.com
// @author      Ruudiluca
// @include     *://www.kongregate.com/forums/*/topics/*
// @include     *://www.kongregate.com/posts*
// @include     *://www.kongregate.com/users/*/posts*
// @include     *://www.kongregate.com/accounts/*/messages*
// @include     *://www.kongregate.com/accounts/*/private_messages*
// @version     1.01
// @grant       GM_addStyle
// ==/UserScript==
 
 
//Enlarge image
var aStyle = document.createElement("style");
aStyle.innerHTML = ".post .user_avatar, .messages_table .user_avatar {width: 80px; height: 80px;} .sender_info {width: auto !important;}"; //Change px values for different sizes
var head = document.getElementsByTagName("head")[0];
head.appendChild(aStyle);
 
//Replace avatar image with non-pixelated version
var aImgs = document.getElementsByClassName("hover_profile");
for(var i = 0; i < aImgs.length; i++){
  aImgs[i].innerHTML = aImgs[i].innerHTML.replace("width:40", "width:140");
}

GM_addStyle(".post .author {width: 260px; #feature {width: 952px;}}");

