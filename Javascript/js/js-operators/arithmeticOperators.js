/* 

ARITHMETIC OPERATORS:
The numbers (in an arithmetic operation) are called operands

+ (Also this is a string Operator)
-
*
** exponiation
/
% (modulus) This returns the remainder after division

++
--

*/


// Addition operator (+)

const num1 = 20;
const num2 = 30;

console.log(num1 + num2);

// Subtraction operator (-)
const num3 = 40;
const num4 = 1;

console.log(num3 - num4);

// Multiplication operator (*)
const num5 = 4;
const num6 = 2;

console.log(num5 * num6);

// Division operator (/)
const num7 = 4;
const num8 = 2;

console.log(num7 / num8);

// Exponiation operator (**): This raises the first operand to the power of the second operand
const num9 = 3;
const num10 = 2;

console.log(num9 ** num10);

// Modulus operator (%): This returns the remainder after division
const num11 = 7;
const num12 = 3;

console.log(num11 % num12);


// Increment Operator(++): It increments the operand by 1
let score = 10;
score++ // score + 1
console.log(score)


// Decrement Operator(--): It decrements the operand by 1
let points = 14;
points--; // points - 1
console.log(points);

// Strings in arithmetic Operations are always converted to numbers except for the addition operation

// The addition(+) operator can also act as a string Operator--- Concatenation
// Concatenation Is Addition Of strings

const number1 = "10";
const number2 = "2";
const res = number1 / number2;
console.log(res); // 5
console.log(typeof res); // The string was coverted to a number. This is the same for other arithmetic operators except for the ADDITION operator

const number3 = "20";
const number4 = 10;
const res2 = number3 + number4;
console.log(res2); // 2010
console.log(typeof res2); //string

const text1 = "hello, Good morning";
const person = "John";
console.log(text1 + " " + person);

// A better way of additings string(concatination) is by using "Template literals or Template strings"
const greeting = "Hey, whats up";
const person2 = "Mary";
const age = 20;

console.log(
  greeting + " " + person2 + " " + "Have you eaten this morning?" + " " + age
); // concatenation with addition Operator


// Concatenation with Template literal or Template string
console.log(`${greeting} ${person2} Have you eaten this moring? ${age}`)