// Strings in arithmetic Operators are always converted to numbers except for addition operation

let x  = "5";
let y = "6";

console.log(x + y); // This will not add the numbers correctly because '+' is a string operator thus the result will be ===> 56


let x1  = "5";
let y1 = "6";

 // The operations below  will come out correctly because JS will convert strings to numbers during athrimetic operations
console.log(x1 * y1);
console.log(x1 / y1);
console.log(x1 - y1);
console.log(x1 % y1);


// NaN - NaN is a JavaScript reserved word indicating that a number is not a legal number.
let x2 = 30;
let y2 = "helen";

console.log(x2 + y2); // 30helen
console.log(x2 / y2); // NaN
console.log(x2 * y2); // NaN


// Numbers Methods: toString(), toFixed(), toPrecision(), Number(), parseFloat(), parseInt()

// toString() method:  returns a number as a string.
let num1 = 457;
console.log(typeof num1);

let num1ToString = num1.toString();
console.log(typeof num1ToString); // Num1 is now a string

//  toFixed(): returns a string, with the number written with a specified number of decimals:
let num2 = 5.6790;

let num2ToTwoDecimals = num2.toFixed(2);
console.log(num2ToTwoDecimals);
console.log(typeof num2ToTwoDecimals); // string

// toPrecision(): returns a string, with a number written with a specified length:
let num3 = 5.6790;
let num3ToLength3 = num3.toPrecision(3); 
console.log(num3ToLength3); // 5.78
console.log(typeof num3ToLength3) ; //string

// Number() method is used to convert different types of variables to number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // number 10
console.log(typeof Number("10"));
console.log(Number("1t0")); // NaN
console.log(Number("10 HELLO")); // NaN

// parseInt() method converts/parses a string and returns a WHOLE number(not including decimals). Spaces are allowed. Only the first number is returned:

console.log(parseInt(true)) // it returns NaN because parseInt converts strings to Number and "true" is a boolean
console.log(parseInt('90')) 
console.log(typeof parseInt('90')) // number
console.log(parseInt("30 HELLO")); // 10
console.log(parseInt("30,8")); // return 30
console.log(parseInt("21 8 3")); // return 21
console.log(parseInt("30.43")) // 30



// parseFloat() method converts/parses a string and returns a number(including decimals). Spaces are allowed. Only the first number is returned:

console.log(parseFloat(true)) // it returns NaN because parseInt converts strings to Number and "true" is a boolean
console.log(parseFloat('90')) 
console.log(typeof parseFloat('90')) // number
console.log(parseFloat("30 HELLO")); // 10
console.log(parseFloat("30,8")); // return 30
console.log(parseFloat("21 8 3")); // return 21
console.log(parseFloat("30.43")) // 30.43


// outputting to our html document
let h1 = document.getElementById('h1');
h1.innerHTML = parseFloat(true) + "<br>" + 
parseFloat('90') + "<br>" +
typeof parseFloat('90') + "<br>" +
parseFloat("30 HELLO") + "<br>" +
parseFloat("30,8")  + "<br>" +
parseFloat("21 8 3")  + "<br>" +
parseFloat("30.43")
