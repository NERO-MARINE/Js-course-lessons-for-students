//  The switch statement is used to perform different actions based on different conditions. Instead of using multiple else if statements you can simply use a switch statement


/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.


*/


let age = 18;
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


// Doing the above using a switch statement
let num = 10;
let text2;

switch(num){
    case 10:
        text2 = 'Num is equal to 10';
        break;
    case 16:
        text2 = 'Num is equal to 16';
        break;
    case 18:
        text2 = 'Num is equal to 18';
        break;
    default:
        text2 = 'There is no match';
        break;
}

console.log(text2);