var navBtn = document.getElementById("nav-links");

navBtn.onclick = expandMenu;

function expandMenu() {
var expandingMenu = document.getElementById("expanding-menu");

expandingMenu.classList.toggle("hide");
}

// Show value of range input
var rangeInput = document.getElementById("range-input");

rangeInput.oninput = slide;

function slide() {
var rate = document.getElementById("rate");
var rangeOutput = document.getElementById("range-output");

rate.innerHTML = rangeInput.value;

if (rangeInput.value == 10) {
rangeOutput.innerHTML = "I love Disney!";
} else if (rangeInput.value > 5) {
rangeOutput.innerHTML = "I like Disney.";
} else if (rangeInput.value > 0) {
rangeOutput.innerHTML = "I somewhat like Disney.";
} else if (rangeInput.value == 0) {
rangeOutput.innerHTML = "I don't like Disney at all!";
}
}

// Change image with mouse hover
var logo = document.getElementById("logo");

logo.onmouseover = showNewLogo;
logo.onmouseout = showOriginalLogo;

function showNewLogo() {
logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lucasfilm_logo.svg/500px-Lucasfilm_logo.svg.png";
}

function showOriginalLogo() {
logo.src = "https://th.bing.com/th/id/OIP.EgFqa4QLFITtj7KvrTmcJAHaEK?pid=ImgDet&rs=1";
}

// Add from list of characters to input field
var charForm = document.getElementById("fav-char");
var charInputField = document.getElementById("character");

var char1 = document.getElementById("char-1");
var char2 = document.getElementById("char-2");
var char3 = document.getElementById("char-3");
var char4 = document.getElementById("char-4");

char1.onclick = selectChar1;
char2.onclick = selectChar2;
char3.onclick = selectChar3;
char4.onclick = selectChar4;

function selectChar1(e) {
charInputField.value = "Din Djarin";
showResult(e);
}