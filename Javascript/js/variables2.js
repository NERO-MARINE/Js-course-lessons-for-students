// identifiers can contain letters, digits, underscores, and dollar signs.
let hello43_$ = "hello world";
console.log(hello43_$);

//  identifiers can also begin with $ and _
let $blah20 = true;
console.log($blah20);

let _$blah20 = false;
console.log(_$blah20);

// Identifiers cannot begin with a digit

/*
    const 2hello = 'hello'  // this will not work
    console.log(2hello)
*/

// identifiers are case sensitive (y and Y are different variables)
const x = 20;
// console.log(X) // X here is undefined becos x is not same as X
console.log(x);

// Reserved words (like JavaScript keywords) cannot be used as variable names or identifiers.

// Assignment: List 15 javascript reseverd keywords.

// -------------->  One declearation Keyword can be use for Many identifiers(and separating with comma)
let person = "John", age = 20, isMale = true;
console.log(person, age, isMale);

// The above is same as:

/*
 let person = 'John'
 let age = 20
 let isMale = true 

*/

const name = "cynthia", age2 = 49, isMale2 = false;
console.log(name, age2, isMale2);

// The above is same as:

/*
 const name = 'cynthia'
 const age2 = 49
 const = isMale2 = false

*/
