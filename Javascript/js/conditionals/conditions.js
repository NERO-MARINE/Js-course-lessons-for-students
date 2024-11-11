//  Conditional statements are used to perform different actions based on different conditions.

/*
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- if statement: is used to specify a block of code to be executed, if a specified condition is true

- else statement: is used to specify a block of code to be executed, if the same condition is false

- else if statement: is used to specify a new condition to test, if the first condition is false


if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

*/

let num = 100;

if (num < 15) {
  console.log("num is less than 15");
} else {
  console.log("num is not less than 15");
}

let age = 17;
let text = "";

if (age === 18) {
  text += "Age is equal to 18";
} else if (age === 10) {
  text += "Age is equal to 10";
} else if (age === 13) {
  text += "Age is equal to 13";
} else {
  text += "No values match";
}

console.log(text);

// shorthand if and else statement: The ternary operator is a conditional operator that assigns a value to a variable based on some condition.

/*
syntax: variablename = (condition) ? value1:value2 

*/

let age2 = 16;
let text2;

if(age2 >= 18){
    text2 = 'You are big enough to drink'
} else{
    text2 = 'You cannot drink because you are not old enough'
}

document.getElementById('h2').innerHTML = text2

// lets now do the above using ternary operator
let age3 = 20;
let text3 = (age3 >= 18) ? 'You are big enough to drink' : 'You cannot drink because you are not old enough'

document.getElementById('heading2').innerHTML = text3;
