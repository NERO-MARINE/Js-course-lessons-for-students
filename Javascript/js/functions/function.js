// Functions are used to store code. This codes will run/execute only when the function is called

//1) function as a function statement: This type of "function" uses the function keyword and a function name

function myFunction1() {
  console.log("hello");
}
myFunction1(); // function

//2) function as a function expression: This type of function uses the "function" keyword but does not use a function name. Instead it uses a variable to represent it.

const myFunction2 = function () {
  console.log("do somthing");
};

myFunction2();

// function as an arrow function: This type of function does not use the "function" keyword and a function name. Instead it uses a variable to represent it.

const myFunction3 = () => {
  console.log("Do something else");
};

myFunction3();
