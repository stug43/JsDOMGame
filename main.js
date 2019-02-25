function clickCount() { console.log("AAAAH,  clic! ( https://www.youtube.com/watch?v=gsFe2tZ3Shc )"); }
function clickCount2(x) { console.log(`click numero ${x}`); }

let counter = 1;
document.getElementsByTagName("footer")[0].addEventListener("click", function() {console.log("clic numéro " + counter); counter ++ ;});

document.querySelectorAll("button.navbar-toggler")[0].addEventListener("click", function() { document.getElementById("navbarHeader").classList.toggle("collapse"); });

document.querySelectorAll(".card button")[1].addEventListener("click", function() {document.querySelectorAll(".card")[0].style.color = "red";});

document.querySelectorAll(".card button")[3].addEventListener("click", function() {if(document.querySelectorAll(".card p")[1].style.color == "green") {document.querySelectorAll(".card p")[1].style.color = "";} else {document.querySelectorAll(".card p")[1].style.color = "green";}});

let bootstrapLinkReliance = document.getElementsByTagName("head")[0].childNodes[5];
document.querySelectorAll(".navbar")[0].addEventListener("dblclick", function() {  console.log("clic");  if( document.getElementsByTagName("head")[0].childNodes[5].href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" ) {document.getElementsByTagName("head")[0].childNodes[5].href = ""; console.log("01");} else {document.getElementsByTagName("head")[0].childNodes[5].href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"; console.log("02");}   });

for(let i=0; i < document.querySelectorAll(".card").length ;i++) {document.querySelectorAll(".card")[i].childNodes[3].childNodes[3].childNodes[1].childNodes[1].addEventListener("mouseover", function()   {  document.querySelectorAll(".card")[i].childNodes[3].childNodes[1].classList.toggle("d-none"); if(document.querySelectorAll(".card")[i].childNodes[1].style.width == "20%") { document.querySelectorAll(".card")[i].childNodes[1].style.width = "";} else {document.querySelectorAll(".card")[i].childNodes[1].style.width = "20%"}});}

var card0 = document.querySelectorAll(".card")[0];

document.querySelectorAll("a")[4].addEventListener("click",function(event) {card0.parentNode.parentNode.insertBefore(document.querySelectorAll(".card")[0].parentNode, null); event.preventDefault()});

document.querySelectorAll("a")[5].addEventListener("click",function() {card0.parentNode.parentNode.insertBefore(card0.parentNode.parentNode.lastChild, document.querySelectorAll(".card")[0].parentNode)});

