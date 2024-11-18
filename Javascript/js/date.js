let date =  new Date(); // date constructor

console.log(date); // date and time- GMT + 1
console.log(date.toTimeString()); // just the time- GMT + 1
console.log(date.toDateString()); // just the date


// toUTCString() -- GMT
console.log(date.toUTCString()); // date and time - GMT

// local date and time
console.log(date.toLocaleString()); // date and time in your local time
console.log(date.toLocaleTimeString()); // local time
console.log(date.toLocaleDateString()); // local date


// date get methods:

let date2 =  new Date(); // date constructor

// getFullYear()
console.log(date2.getFullYear());

// getMonth(): Javascript numbers months from 0 to 11
console.log(date2.getMonth() + 1);  // adding 1 gives you the accurate value

const months = ['Jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'october', 'november', 'decemeber'];

let currentMonth = months[date2.getMonth()];
console.log(currentMonth);


// getDate(): this gets you the day of the month
console.log(date2.getDate());

// getDay():  this gets you the day of the week. js days are numbered zero to 6
console.log(date2.getDay() + 1); // adding 1 gives you the accurate value

// Assignment: create a "days of the week array" to get the current day of the week;

// getHours(): Js numbers time from 0 to 23(just like normal time). This gets you the current hour. 
console.log(date.getHours());

// getMinuites(): 0 - 59(just like normal time). This get you the current minuite
console.log(date.getMinutes());

// getSeconds(): 0 - 59(just like normal time). This gets you the current second
console.log(date.getSeconds());




// set date methods: This methods are used to set date and time in Javascript;

// setFullYear()
const setYr = new Date();
setYr.setFullYear(2021);
console.log(setYr)

// setMonth
const setMonth = new Date();
setMonth.setMonth(5);  // sets month to june
console.log(setMonth); // GMT + 1
console.log(setMonth.toLocaleString()); // local time and date

//  SetDate(): this sets the day of the month to any specified day
const setDate = new Date();
setDate.setDate(1);
console.log(setDate);

// setHours(): 0 to 23
const setHr = new Date();
setHr.setHours(23);
console.log(setHr);
console.log(setHr.toLocaleString());



// assignment: do for setSeconds() and setMinuites()

// seconds are numbered 0 - 59 and the same applies to minuites