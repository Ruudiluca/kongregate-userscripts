// ==UserScript==
// @name        Kongregate Minus
// @namespace   ruudiluca.com
// @description Kongregate Minus
// @include     http://www.kongregate.com/games/*/*
// @include     http://www.kongregate.com/accounts/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

var k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAANCAYAAABCZ/VdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDODc4NEYxQTI2RjhFNTExODJDRkZENzQ4RUI5NEE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRkVEMTZCM0Y4MjYxMUU1ODA4OEQ4RTU5MDNBRUY0QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkVEMTZCMkY4MjYxMUU1ODA4OEQ4RTU5MDNBRUY0QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5Nzg0RjFBMjZGOEU1MTE4MkNGRkQ3NDhFQjk0QTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4Nzg0RjFBMjZGOEU1MTE4MkNGRkQ3NDhFQjk0QTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l0ReLAAAAPBJREFUeNpi/P//PwOtAAuMkcTCSDVb5v35zwiimahtMLJ5LOgSMRP6GZxyCsDsTw/uMZzZsgnOh2ok2hImdIHVs6aADQWBJfGRDDdWL2d49/YtGE/OSSQvzGHg57W7cPbl928ZmpasYfj79DFDXUwIihxZhiMDkMGiegYMK9pq4AYDIwtfWBNv+N4taxjUzpxjiKhqYXj97CnD+RkLKAtzdi1lhp+fPoHZB1esYDixcCaYHd3Yw6CipUZSsGAYHpqWAw4KEOjctIvhr64WmC0kLMxQdekmSYYzgnIotdM5LCMxIecoaudQRlqWLQABBgAg/mM263aAnQAAAABJRU5ErkJggg==";

GM_addStyle(".spritesite.premium_icon, .premium_room_icon { \
    background: url('" + k + "'); \
    background-position: center !important; \
} .premium_room_icon {padding-right: 25px;}");
