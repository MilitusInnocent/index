var leftImageOne = document.getElementById("leftImage1");
var leftImageTwo = document.getElementById("leftImage2");
var leftImageThree = document.getElementById("leftImage3");
var buttonOne = document.getElementById("simpleClick");
var buttonTwo = document.getElementById("speedyClick");
var buttonThree = document.getElementById("easyClick");
var leftImageOneSmall = document.getElementById("leftImage1Small");
var leftImageTwoSmall = document.getElementById("leftImage2Small");
var leftImageThreeSmall = document.getElementById("leftImage3Small");
var buttonOneSmall = document.getElementById("simpleClickSmall");
var buttonTwoSmall = document.getElementById("speedyClickSmall");
var buttonThreeSmall = document.getElementById("easyClickSmall");

function showImageOne(){
  if (leftImageOne.classList.contains("hide")) {
    leftImageOne.classList.remove("hide");
  }
  if (leftImageTwo.classList.contains("show")) {
    leftImageTwo.classList.remove("show")
  }
  if (leftImageThree.classList.contains("show")) {
    leftImageThree.classList.remove("show")
  }
  leftImageOne.classList.add("show");
  leftImageTwo.classList.add("hide");
  leftImageThree.classList.add("hide");

  if (buttonOne.classList.contains("noBackgroundColor")) {
    buttonOne.classList.remove("noBackgroundColor");
  }
  if (buttonTwo.classList.contains("backgroundColor")) {
    buttonTwo.classList.remove("backgroundColor");
  }
  if (buttonThree.classList.contains("backgroundColor")) {
    buttonThree.classList.remove("backgroundColor");
  }
  buttonOne.classList.add("backgroundColor");
  buttonTwo.classList.add("noBackgroundColor");
  buttonThree.classList.add("noBackgroundColor");
}

function showImageTwo(){
  if (leftImageTwo.classList.contains("hide")) {
    leftImageTwo.classList.remove("hide");
  }
  if (leftImageOne.classList.contains("show")) {
    leftImageOne.classList.remove("show")
  }
  if (leftImageThree.classList.contains("show")) {
    leftImageThree.classList.remove("show")
  }
  leftImageOne.classList.add("hide");
  leftImageTwo.classList.add("show");
  leftImageThree.classList.add("hide");

  if (buttonTwo.classList.contains("noBackgroundColor")) {
    buttonTwo.classList.remove("noBackgroundColor");
  }
  if (buttonOne.classList.contains("backgroundColor")) {
    buttonOne.classList.remove("backgroundColor");
  }
  if (buttonThree.classList.contains("backgroundColor")) {
    buttonThree.classList.remove("backgroundColor");
  }
  buttonOne.classList.add("noBackgroundColor");
  buttonTwo.classList.add("backgroundColor");
  buttonThree.classList.add("noBackgroundColor");
}

function showImageThree(){
  if (leftImageThree.classList.contains("hide")) {
    leftImageThree.classList.remove("hide");
  }
  if (leftImageOne.classList.contains("show")) {
    leftImageOne.classList.remove("show")
  }
  if (leftImageTwo.classList.contains("show")) {
    leftImageTwo.classList.remove("show")
  }
  leftImageOne.classList.add("hide");
  leftImageTwo.classList.add("hide");
  leftImageThree.classList.add("show");

  if (buttonThree.classList.contains("noBackgroundColor")) {
    buttonThree.classList.remove("noBackgroundColor");
  }
  if (buttonOne.classList.contains("backgroundColor")) {
    buttonOne.classList.remove("backgroundColor");
  }
  if (buttonTwo.classList.contains("backgroundColor")) {
    buttonTwo.classList.remove("backgroundColor");
  }
  buttonOne.classList.add("noBackgroundColor");
  buttonTwo.classList.add("noBackgroundColor");
  buttonThree.classList.add("backgroundColor");
}
function showImageOneSmall(){
  if (leftImageOneSmall.classList.contains("hide")) {
    leftImageOneSmall.classList.remove("hide");
  }
  if (leftImageTwoSmall.classList.contains("show")) {
    leftImageTwoSmall.classList.remove("show")
  }
  if (leftImageThreeSmall.classList.contains("show")) {
    leftImageThreeSmall.classList.remove("show")
  }
  leftImageOneSmall.classList.add("show");
  leftImageTwoSmall.classList.add("hide");
  leftImageThreeSmall.classList.add("hide");

  if (buttonOneSmall.classList.contains("noBackgroundColor")) {
    buttonOneSmall.classList.remove("noBackgroundColor");
  }
  if (buttonTwoSmall.classList.contains("backgroundColor")) {
    buttonTwoSmall.classList.remove("backgroundColor");
  }
  if (buttonThreeSmall.classList.contains("backgroundColor")) {
    buttonThreeSmall.classList.remove("backgroundColor");
  }
  buttonOneSmall.classList.add("backgroundColor");
  buttonTwoSmall.classList.add("noBackgroundColor");
  buttonThreeSmall.classList.add("noBackgroundColor");
}

function showImageTwoSmall(){
  if (leftImageTwoSmall.classList.contains("hide")) {
    leftImageTwoSmall.classList.remove("hide");
  }
  if (leftImageOneSmall.classList.contains("show")) {
    leftImageOneSmall.classList.remove("show")
  }
  if (leftImageThreeSmall.classList.contains("show")) {
    leftImageThreeSmall.classList.remove("show")
  }
  leftImageOneSmall.classList.add("hide");
  leftImageTwoSmall.classList.add("show");
  leftImageThreeSmall.classList.add("hide");

  if (buttonTwoSmall.classList.contains("noBackgroundColor")) {
    buttonTwoSmall.classList.remove("noBackgroundColor");
  }
  if (buttonOneSmall.classList.contains("backgroundColor")) {
    buttonOneSmall.classList.remove("backgroundColor");
  }
  if (buttonThreeSmall.classList.contains("backgroundColor")) {
    buttonThreeSmall.classList.remove("backgroundColor");
  }
  buttonOneSmall.classList.add("noBackgroundColor");
  buttonTwoSmall.classList.add("backgroundColor");
  buttonThreeSmall.classList.add("noBackgroundColor");
}

function showImageThreeSmall(){
  if (leftImageThreeSmall.classList.contains("hide")) {
    leftImageThreeSmall.classList.remove("hide");
  }
  if (leftImageOneSmall.classList.contains("show")) {
    leftImageOneSmall.classList.remove("show")
  }
  if (leftImageTwoSmall.classList.contains("show")) {
    leftImageTwoSmall.classList.remove("show")
  }
  leftImageOneSmall.classList.add("hide");
  leftImageTwoSmall.classList.add("hide");
  leftImageThreeSmall.classList.add("show");

  if (buttonThreeSmall.classList.contains("noBackgroundColor")) {
    buttonThreeSmall.classList.remove("noBackgroundColor");
  }
  if (buttonOneSmall.classList.contains("backgroundColor")) {
    buttonOneSmall.classList.remove("backgroundColor");
  }
  if (buttonTwoSmall.classList.contains("backgroundColor")) {
    buttonTwoSmall.classList.remove("backgroundColor");
  }
  buttonOneSmall.classList.add("noBackgroundColor");
  buttonTwoSmall.classList.add("noBackgroundColor");
  buttonThreeSmall.classList.add("backgroundColor");
}

buttonOne.addEventListener("click", showImageOne);
buttonTwo.addEventListener("click", showImageTwo);
buttonThree.addEventListener("click", showImageThree);
buttonOneSmall.addEventListener("click", showImageOneSmall);
buttonTwoSmall.addEventListener("click", showImageTwoSmall);
buttonThreeSmall.addEventListener("click", showImageThreeSmall);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("proactive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
  if (email.value.match(regExp)) {
    email.style.borderColor = "#27ae60";
    icon1.style.display = "none";
    icon2.style.display = "block";
    error.style.display = "none";
  }else {
    email.style.borderColor = "#e74c3c";
    icon1.style.display = "block";
    icon2.style.display = "none";
    error.style.display = "block";
  }
}
const email1 = document.querySelector("#email1");
const icon1Small = document.querySelector(".icon1Small");
const icon2Small = document.querySelector(".icon2Small");
const error1 = document.querySelector(".error-text1");

function checkSmall() {
  if (email1.value.match(regExp)) {
    email1.style.borderColor = "#27ae60";
    icon1Small.style.display = "none";
    icon2Small.style.display = "block";
    error1.style.display = "none";
  }else {
    email1.style.borderColor = "#e74c3c";
    icon1Small.style.display = "block";
    icon2Small.style.display = "none";
    error1.style.display = "block";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
