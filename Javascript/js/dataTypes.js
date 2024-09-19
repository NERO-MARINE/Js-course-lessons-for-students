// Data Types in Javascript

/* 
String
Number
Boolean
Undefined
Null
Object --- We will talk about objects later on
*/

// string: A string is text or anything written inside of quotes(single or double quotes)
var person = "John Doe";
console.log(person);
console.log(typeof person);

// Numbers are not written inside of quotes
var age = 20;
console.log(age);
console.log(typeof age);

// boolean means true or false
var isClassGoingOn = false;
// var isClassGoingOn = true;
console.log(isClassGoingOn);
console.log(typeof isClassGoingOn);

// undefined: A variable that is not assigned any value evaluates to undefined. You can also expressly set a variable to undefined.

var person2;
console.log(person2);
console.log(typeof person2);

// You can also expressly set a variable to undefined.
var car = undefined;
console.log(car);
console.log(typeof car);

// null: empty
var x = null;
console.log(x);
console.log(typeof x); // typeof null in Javascript evaluates to Object. This is actually a bug in Javascript. Null is not an Object. Null is empty
