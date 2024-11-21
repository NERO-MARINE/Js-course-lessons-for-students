// JSON -- Javascript Object Notation.

// Json is a text format used for storing and transporting data

let person = {
  name: "John",
  age: 20,
  country: "Nigeria",
}; // javascript Object

console.log(person) // js object
console.log(person.name);
console.log(person.country);
console.log(typeof person);

// JSON.stringify(): convert a valid Javascript Object into a JSON string
const myJsonObj = JSON.stringify(person) // json string
console.log(myJsonObj) 
console.log(myJsonObj.name) // undefined


// JSON.parse(): Convert A Json string into a valid JS Object. Numbers in A JSON string are not wrapped inside qoutes

let person2 = '{"name": "Mary", "age": 40, "country": "Nigeria"}'; // This is a JSON String
console.log(person2);
console.log(person2.name); //this returns undefined because person2 is text/string
console.log(typeof person2);

const myRealObj = JSON.parse(person2);
console.log(myRealObj); // js object
console.log(myRealObj.name)