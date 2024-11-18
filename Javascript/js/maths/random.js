// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
console.log(Math.random()) // returns a random number 

// Math.random() used with Math.floor() can be used to return random integers.
let rand = Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
console.log(rand);


let rand2 = Math.floor(Math.random() * 11);   // returns a random integer from 0 to 10
console.log(rand2)


let rand3 = Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
console.log(rand3);


let rand4 = Math.floor(Math.random() * 101);   // returns a random integer from 0 to 100
console.log(rand4)

let rand5 = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
console.log(rand5)

let rand6 = Math.floor(Math.random() * 100) + 1;  // returns a random integer from 1 to 100
console.log(rand6)