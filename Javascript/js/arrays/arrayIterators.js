// Higher Order Functions in Javascript Also known as array Iterators operate on every array item.:

/*
    Array.forEach()
    Array.Map()
    Array.filter()
    Array.reduce()
    Array.reduce-right()
    Array.every()
    Array.some()
*/

// The forEach() method calls a function (a callback function) once for each array item. The callback function accepts up to three arguments(value, index, array).

// A function called/used inside of a JS Method is called a "callback function"

const cssTopics = [
  "CSS HOME",
  "CSS INTRODUCTION",
  "CSS HOME",
  "CSS SYNTAX",
  "CSS COLORS",
  "CSS COLORS2",
];

// console.log(cssTopics[0]);
// console.log(cssTopics[1]);
// console.log(cssTopics[2]);
// console.log(cssTopics[3]);
// console.log(cssTopics[4]);

cssTopics.forEach(myFunction);

function myFunction(value) {
  console.log(value + " " + "hello");
}

// using arrow function
const cars = ["volvo", "benz", "venza", "toyota"];

// cars.forEach((value, index, array) => console.log(value));
cars.forEach((car) => {
  console.log(car);
});

// using function as a function expression
cars.forEach(function (car) {
  console.log(car);
});

// The Array.map() method creates/returns a new array by performing a function on each array element. The map() method does not change the original array. Note that the function takes 3 arguments:(value, index and array)
const fruits = ["orange", "mango", "pear", "apple"];

const x = fruits.map((value, index, array) => {
  return `${value} modified`;
});

console.log(x);

// with arrow function you do not need to explicitly use the return keyword
const nums = [1, 2, 4, 3, 5];
const numsTimes2 = nums.map((value) => value * 2);
console.log(numsTimes2);

// differnce between forEach() and map(): The forEach() method returns undefined and the map() method returns a new array with the transformed elements. The result of map() can be chained to other methods but the result of forEach() cannot be chained to other method because it is undefined

const numbers = [2, 4, 5, 10];

const numTimes2 = numbers.map((value) => value * 2);
console.log(numbers);
console.log(numTimes2); // modified array

const numbers2 = [2, 4, 5, 10];
const num2Times2 = numbers2.forEach((value) => console.log(value * 2));
console.log(numbers2);
console.log(num2Times2); // undefined

// The Array.filter() method calls a function that creates a new array with array elements that passes a test. Note that the function takes 3 arguments:(value, index and array)

let mynums1 = [2, 4, 5, 10, 30, 17, 12];
let numsLessThan12 = mynums1.filter((value, index, array) => value > 12);
console.log(mynums1); // original array
console.log(numsLessThan12); // new filtered array

// The Array.reduce() method runs a function on each array element to produce (reduce it to) a single value. It works from left to right. Note that the function takes 3 arguments:(total, value, index and array)

let mynums2 = [2, 4, 5, 10, 30, 17, 12];

let addNums = mynums2.reduce((total, value, index, array) => total + value);

console.log(addNums);

// The Array.reduceRight() method runs a function on each array element to produce (reduce it to) a single value. It works from right to left. Note that the function takes 4 arguments:(total, value, index and array)

let mynums3 = [2, 4, 5, 10, 30, 17, 12];
let subtractNums2 = mynums2.reduceRight(
  (total, value, index, array) => total - value
);
console.log(subtractNums2);

// classwork: use Array.some() and Array.every()

// tips: The Array.every() method check if all array values pass a test while Aarry.some() method check if some array values pass a test.. Both methods return a boolean

// Practice how to use all array iterators we learnt using the three types of functions we learnt
