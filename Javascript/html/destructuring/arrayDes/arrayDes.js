// Array Destructuring is a javascript expression that reduces arrays to smaller atoms where the contents of the array can be easily accessed and referenced by variables

const cars = ["volvo", "benz", "camry", "jeep", "toyota"];

// console.log(cars[0]);
// console.log(cars[1]);

// destructuring the above array
// Array destructuring
const [volvo, , camry] = cars; // this picks volvo, skips benz and picks camry;

// volvo = 'Limo'; // changes volvo to Limo

console.log(volvo);
console.log(camry);

// spread Operator(...): spreads the items in an array

const cars2 = ["volvo2", "benz2", "camry2", "jeep2", "toyota2"];

const [volvo2, ...restOfArray] = cars2;
console.log(volvo2);
console.log(restOfArray);

// The spread operator can also be used to add arrays instead of using the concat() method;

const addCar1Car2 = [...cars, ...cars2];
console.log(addCar1Car2);

// Array destructuring with Functions

function addANDmultiplyANDSUB(x, y) {
  return [x + y, x * y, x - y];
}

const result = addANDmultiplyANDSUB(2, 6);
console.log(result);

// using destructuring;

// with destructuring, defaults values can be added as well.
const [add, mul, sub] = addANDmultiplyANDSUB(2, 6);
console.log(add);
console.log(mul);
console.log(sub);
