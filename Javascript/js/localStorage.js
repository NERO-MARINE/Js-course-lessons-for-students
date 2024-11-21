// Storing a string: localStorage.setItem('key', 'value');
localStorage.setItem('username', 'JohnDoe23');

// Storing an object (Object must be converted to a string using JSON.stringify)

const userObject = { name: 'John', age: 25, isAdmin: true };
const userObjectToString =  JSON.stringify(userObject);
localStorage.setItem('user', userObjectToString);


// Retrieving a string: localStorage.getItem('key')
const username = localStorage.getItem('username');
console.log('result:', username);


// Retrieving an object (parsed from a string using JSON.parse)
const storedUser = localStorage.getItem('user');
// console.log(storedUser); // json string. You can't use this

const parsedUser = JSON.parse(storedUser);
// console.log(parsedUser); // js object

console.log('User Object:', parsedUser);
console.log('User Object name:', parsedUser.name);

document.getElementById('h1').innerHTML = parsedUser.name;


// Removing a specific item: localStorage.removeItem('key')

// localStorage.removeItem('username');

// Clearing all items in local storage:

// localStorage.clear();

// Storing multiple values as an array-like structure
const fruits = ['apple', 'orange', 'banana'];
localStorage.setItem('fruits', JSON.stringify(fruits));

// Retrieving and parsing the array-like structure
const storedFruits = localStorage.getItem('fruits');
// const parsedFruits = JSON.parse(storedFruits)
const parsedFruits = JSON.parse(storedFruits) || []; // if there are no friuts "parsedFruits" becomes an empty []


console.log(parsedFruits); // ['apple', 'orange', 'banana']

// Adding a new value to the array
parsedFruits.push('mango');

// Storing the updated array
localStorage.setItem('fruits', JSON.stringify(parsedFruits));

console.log(parsedFruits); // ['apple', 'orange', 'banana', 'grape']