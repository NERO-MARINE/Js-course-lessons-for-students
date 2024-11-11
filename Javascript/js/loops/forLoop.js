// Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.


/* The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

*/

// Statement 1 initializes the loop. and it is executed (one time) before the execution of the code block

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);

for(let i=0; i < 20; i++){
    console.log(i);
};

console.log('New loop');

let j = 10

for(j; j <= 20; j++){
    console.log(j);
}

console.log('New loop');
let k = 20;
for(k; k > 10; k--){
    console.log(k)
};

console.log('new loop')

// Using the forLoop with Arrays: The forLoop is the best loop for looping through arrays
let cars = ['Benz', 'Venza', 'volvo', 'Jeep'];

let p = 0;
for(p; p < cars.length; p++){
    console.log(cars[p])
};

console.log('new loop')

let colors = ['red', 'blue', 'green', 'orange', 'black']
let q = 1;
let len = colors.length
for(q; q < len ; q++){
    console.log(colors[q])
};