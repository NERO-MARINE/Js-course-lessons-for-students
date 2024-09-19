/*
COMPARISON OPERATORS: Comparison operators are used in logical statements to determine equality or difference between variables or values.	Comparison Operators returns "true" or "fasle"
<
>
<=
>=
==  equal in value
=== equal in value and type
!= not equal to
!== strict not equal to

*/

// <, >
const num1 = 20;
const num2 = 30;

console.log(num1 > num2); // false
console.log(num2 > num1); // true
console.log(num1 < num2); // true

// <=, >=
const num3 = 10;
const num4 = 10;

console.log(num3 <= num4); // true
console.log(num3 >= num4); // true

// == (equality) equal in value
let num7 = "20";
let num8 = 20;

console.log(num7 == num8); // true because == checks only the value and ignores the data-type

// === strict equality (equal in value and type)
let num9 = "20";
let num10 = 20;

console.log(num9 === num10); // false because === checks both the value and the data-type

// != (not equal to): checks only the value
let num13 = "10";
let num14 = 10;
console.log(num13 != num14); // false because num13 and num14 are equal in value

// !== (not equal to): checks both the value and data-type
let num15 = "10";
let num16 = 10;
console.log(num15 !== num16); // true because num15 and num16 are not equal in value and in data-type

let num17 = "10";
let num18 = "10";
console.log(num17 !== num18); // false because num17 and num18 are equal in value and in dtat-type