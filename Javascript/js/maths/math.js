//  The JavaScript Math object allows you to perform mathematical tasks on numbers.
console.log(Math.PI) // This returns the value of pi(3.142)

// Math Methods: The syntax for any math methods is : Math.method(number)



// Number to Integer maths method: 
/*
    Math.round(x)	Returns x rounded to its nearest integer
    Math.ceil(x)	Returns x rounded up to its nearest integer
    Math.floor(x)	Returns x rounded down to its nearest integer
    Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

//  Math.round(x):This method will approximate when the number after the decimal point is above 5
console.log(Math.round(4.9))   // returns 5
console.log(Math.round(4.7))    // returns 5
console.log(Math.round(4.4))   // returns 4
console.log(Math.round(4.2))    // returns 4
console.log(Math.round(-4.2))    // returns -4

console.log('new method')
// Math.ceil(x): This method will approximate when there is a number after the decimal point
console.log(Math.ceil(4.9))   // returns 5
console.log(Math.ceil(4.7))    // returns 5
console.log(Math.ceil(4.4))   // returns 5
console.log(Math.ceil(4.2))    // returns 5
console.log(Math.ceil(-4.2))    // returns -4


console.log('new method')

// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.9))   // returns 4
console.log(Math.floor(4.7))    // returns 4
console.log(Math.floor(4.4))   // returns 4
console.log(Math.floor(4.2))    // returns 4
console.log(Math.floor(-4.2))    // returns -5 (-5 is smaller than -4)

console.log('new method')
// Math.trunc(x) returns the integer(part before the decimal point) part of x:
console.log(Math.trunc(4.9))   // returns 4
console.log(Math.trunc(4.7))    // returns 4
console.log(Math.trunc(4.4))   // returns 4
console.log(Math.trunc(4.2))    // returns 4
console.log(Math.trunc(-4.2))    // returns 4 

console.log('new method')

// Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(2,4))

console.log('new method')

// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64)) // returns 8

console.log('new method')
// Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7))  // returns 4.7
console.log(Math.abs(4.7))  // returns 4.7


console.log('new method')
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random()) // returns a random number

