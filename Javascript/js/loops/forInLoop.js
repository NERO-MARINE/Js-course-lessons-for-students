//  The JavaScript for/in statement loops through the properties of an Object:

// The for in loop iterates over an object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is Object[x]

/* 
syntax:
 for(keys in object){
    object[keys]
}

*/

const person = {fname:"John", lname:"Doe", age:25};
let x;
for(x in person){
    console.log(person[x])
}

const car = {
    color: 'red',
    brand: 'Toyota',
    model: 2020
}

let text = ''
for(let y in car){
    let h1 = document.getElementById('h1');
    h1.innerHTML = text += car[y] + " "
}


// loop through the object below
let book = {
    title: 'The world in our pocket',
    author: 'Mary Doe',
    vol: 30
}



