// ==UserScript==
// @name        Better Quotes
// @namespace   ruudiluca.com
// @description Reduces quote templing on Kongregate
// @include     *.kongregate.com/forums/*/topics/*
// @include     *.kongregate.com/posts
// @include     *.kongregate.com/users/posts/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

//Add styles
GM_addStyle("                                 \
.expandQuote {                                \
	text-align: center;                         \
	background-color: #9A7;                     \
	color: #EFC;                                \
	font-style: italic;                         \
	margin-top: -1px;                           \
	-webkit-border-bottom-right-radius: 5px;    \
	-webkit-border-bottom-left-radius: 5px;     \
	-moz-border-radius-bottomright: 5px;        \
	-moz-border-radius-bottomleft: 5px;         \
	border-bottom-right-radius: 5px;            \
	border-bottom-left-radius: 5px;             \
	-webkit-touch-callout: none;                \
    -webkit-user-select: none;                \
    -khtml-user-select: none;                 \
    -moz-user-select: none;                   \
    -ms-user-select: none;                    \
    user-select: none;                        \
	cursor:pointer;                             \
}");

GM_addStyle("                                 \
.posts .post .body blockquote {               \
            overflow:hidden;                  \
display: block;\
}                                             \
");

//Begin script

var quotes = document.querySelectorAll(".entry-content > blockquote");

for(let i of quotes){
  //Create the button
  if($(i).height() > 205){
      
      var qB = document.createElement("div");
      qB.innerHTML = "Read more...";
      qB.className = "expandQuote";
      $(qB).prop = ("disabled", true);
      var sB = document.createElement("span"); //stops 'closest' from getting confused
      $(i).after(sB);
      $(i).after(qB);
    
    $(i).find("blockquote").find("blockquote").remove();
    
    //Insert fake quote
    var fQ = document.createElement("blockquote");
    fQ.id = "fakeQuote";
    fQ.innerHTML = "[A quote...]";
    $(fQ).css("margin", "5px 0px 5px 0px");
    
    var hQ = $(i).find("blockquote");
    $(hQ).attr("id", "hiddenQuote");
    $(hQ).css("display", "none");
    $(hQ).before(fQ);
    
    //Remove read more button if necessary
    if($(i).height() <= 195){ $(i).closest(".expandQuote").remove(); }
    else {
      console.log($(i).height());
      $(i).height(200);
    } 
  }
}

//When the user clicks the expand button
$(".expandQuote").click(function(){
  var state = $(this).data('state');
  var dQ = $(this).prev();
  if(!state){
    $(this).html("Read less...");
    $(this).data('state', true);
    
    //toggle quotes
    dQ.find("#fakeQuote").css("display", "none");
    dQ.find("#hiddenQuote").css("display", "inherit");
    
    //toggle size
    $(dQ).css("height", "auto");
    
	}
  else {
    $(this).html("Read more...");
    $(this).data('state', false);
    
    //toggle quotes
    dQ.find("#fakeQuote").css("display", "inherit");
    dQ.find("#hiddenQuote").css("display", "none");
    
    //toggle size
    $(dQ).css("height", dQ[0].scrollHeight + "px");
    if($(dQ).height() > 200) {$(dQ).css("height", "200px");}
  }
});
