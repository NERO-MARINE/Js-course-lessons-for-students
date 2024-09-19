//  Variables are containers that store data. Js Variables are also  reffered to as "Identifiers"

// These variables are usually declared with Keywords (var/let/const).
var flower = "Sunflower";
let animal = "cat";
const num = 10;

console.log(num);
console.log(flower);
console.log(animal);

// differences between var, let and const

//====> 1) -- Redeclearation

// varibles/identifers decleared with "var" can always be re-decleared
var human = "Miracle James"; // declearation
var human = 40; // re-declearation

console.log(human);

// varibles/identifers decleared with "let" cannot be re-decleared
let color = "red";
// var color = "blue"; //----> This line will give you an error that says you cannot re-decleare color variable

// let color = "blue"; // ----> This line will give you an error that says you cannot re-decleare color variable

// const color = // 'pink'; ----> This line will give you an error that says you cannot re-decleare color variable

console.log(color);

// varibles/identifers decleared with "const" cannot be re-decleared
const points = 20;
//var points = 68; // ----> This line will give you an error that says you cannot re-decleare points variable

// let points = 30; //----> This line will give you an error that says you cannot re-decleare points variable

// const points = 20; // ----> This line will give you an error that says you cannot re-decleare points variable
console.log(points);

//====> 2) -- Re-assignment

// varibles/identifers decleared with "var" can be re-assigned a new value

var color2 = "yellow"; // declearation
color2 = "blue"; // re-assignment

console.log(color2);

// varibles/identifers decleared with "let" can be re-assigned a new value
let score = 0; // declearation
score = 10; // re-assignment
console.log(score);

// varibles/identifers decleared with "const" cannot be re-assigned a new value

const country = "Nigeria"; // declearation
// country = "London"; // // re-assignment. This will throw an error that says "You are trying to assign a new value to a constant variable"

console.log(country);

// 3) - Initialization: Another Difference between var let and const is that with let and var, a varible can be initialized without assigning a value to it. But this will not work with const. A variable initialized with const must be assigned a value immediately

var points11; // initialization
points11 = 20; // re-assignment
console.log(points11);

let score11; // initialization
score11 = 40; // re-assignment
console.log(score11);

/*
    const grade;  // it will through an error
    grade = 30;
*/
