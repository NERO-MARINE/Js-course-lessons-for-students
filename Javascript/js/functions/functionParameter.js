//  Function parameters are passed into a function when the function is created

//  Arguments are passed into the function call to replace the parameter

// using function as a function statement

function myFunction(name, age) {
  //   console.log("my name is" + " " + name);
  console.log(`my name is ${name} and I am ${age} years old`);
}

myFunction("Anthony", 30);
myFunction("Angela", 20);

// Function as a function expression
const addNum = function (x, y, z) {
  console.log(x + y + z);
};

addNum(3, 4, 1);
addNum(2, 40, 1);

// arrow function
const mulNum = (x, y) => {
  console.log(x * y);
};

// const mulNum = (x, y) => console.log(x * y);

mulNum(3, 5);
mulNum(2, 2);

//  The return Keyword: The code a function returns is stored in the function

// using function as a function statement
function myFunction1() {
  return "Hello World";
}

const response = myFunction1();
console.log(response);

// using function as a function expression
const myFunction2 = function (food) {
  return `My best food is ${food}`;
};

const result = myFunction2("Beans");
console.log(result);

// using function as an arrow function

const myFunction3 = (x, y) => {
  return x + y;
};

const result2 = myFunction3(4, 5);
console.log(result2);

// arrow function: With arrow functions, the return statement is implicit -- you dont need to use the return keyword explicitly

const myFunction4 = (x, y) => x + y;

const result3 = myFunction4(4, 5);
console.log(result3);
