//  BOM - BROWSER OBJECT MODEL.
// BOM lets javascript communicate with the browser.

// global Object for the browser: window Object.

// const h1 = document.querySelector('#heading1'); // The presence of the window object is implied on the browser

const h1 = window.document.querySelector("#heading1");

document.querySelector("#heading1");
console.log(h1);

// alert("dgdhgd");
// window.alert("dhgdhdh");

// window.innerWidth, window.innerHeight, window.screen.Height, window.screen.width, window.screen.availHeight, window.screen.availwidth,

// window.innerWidth: returns the width of the browser

// let browserWidth = window.innerWidth;
let browserWidth = innerWidth;
console.log("browser innerWidth: " + browserWidth);

// window.innerHeight: returns the height of the browser

// let browserHeight = window.innerHeight;
let browserHeight = innerHeight;
console.log("browser innerHeight: " + browserHeight);

//  window.screen.width: This returns the width of your screen

// let screenWidth = window.screen.width;
let screenWidth = screen.width;
console.log("screenWidth: " + screenWidth);

//  window.screen.height: This returns the height of your screen

// let screenHeight = window.screen.height;
let screenHeight = screen.height;
console.log("screenHeight: " + screenHeight);

// let screenavailWidth = window.screen.availwidth;
let screenavailWidth = screen.availWidth;
console.log("screenavailWidth: " + screenavailWidth);

//  window.screen.availheight: This returns the height of your screen minus your taskbar;

// let screenavailHeight = window.screen.availheight;
let screenavailHeight = screen.availHeight;
console.log("screenavailHeight: " + screenavailHeight);

//////// Location: get web address, redirect(), reload()

// const webAddress = window.location.href;
const webAddress = location.href;
console.log(webAddress);

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  // window.location.assign('./new.html');
  location.assign("./page.html"); // this redirects you to new.html
});

// reload()
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  location.reload(); // this reloads the page
});

//  history: window.history.back(), window.history.forward();
const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  window.history.back(); // this takes the browser a page backward
});

const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", () => {
  window.history.forward(); // this takes the browser a page forward
});

// TIMMING: setTimeout(), setInterval(), clearTimeOut(), clearInterval;

// setTimeout(): It runs a function once after a specified time. It takes in two arguments: the time in milliseconds and the function; ===> setTimeout(function, time(ms))

const myFunction1 = () => {
  console.log("Hello");
};

const myTimeout = setTimeout(myFunction1, 2000);

const myTimeout2 = setTimeout(() => {
  console.log("I am a coder");
}, 4000);

//  clearTimeout()
const btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", () => {
  clearTimeout(myTimeout);
  clearTimeout(myTimeout2);
});

// setInterval(): It runs a function repeatedly with respect to a specified time. It takes in two arguments: the time in milliseconds and the function; ===> setInterval(function, time(ms))
const interval1 = setInterval(() => {
  console.log("in the interval");
}, 3000);

const myTime = setInterval(() => {
  var date = new Date();
  document.querySelector("#h2").innerHTML = date.toLocaleTimeString();
}, 1000);

//  clearTimeout() and clearInterval()
const btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", () => {
  clearInterval(interval1);
  clearInterval(myTime);
});

// pop up boxes/alerts

// alert(): displays the alert box containing a message with "ok";

window.alert("We will take your data");
// alert('we will take your data');

//  confirm(): displays a box containing messages with "ok" and "cancel"
// clicking "ok" returns true while clicking cancel returns false

document.querySelector("#delete").addEventListener("click", () => {
  const confirmDelete = confirm("Are you sure you want to delete your profile");
  const h1 = document.querySelector("#h1");
  if (confirmDelete === true) {
    h1.innerHTML = "Profile Deleted";
  } else {
    h1.innerHTML = "Delete Request cancelled. Your profile is still intact";
  }
});

const blah = "tettew";
