const person1 = {
  name: "John Doe",
  height: "12m",
  age: 40,
  country: "Nigeria",
  skinColor: "black",
  address: {
    city: "Ughelli",
    state: "Delta",
  },
};

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.state);

// you can set default values for properties not listed in the object when destructuring
const {
  name,
  age,
  address: { state, city },
} = person1;
console.log(name);
console.log(age);
console.log(state);
console.log(city);

const person2 = {
  fullName: "Mary Jane",
  height: "15m",
  age2: 20,
  country2: "Canada",
  address2: {
    city2: "Alberta",
    state2: "Delta",
  },
};

const { fullName: name2, ...rest } = person2; // name2 should replace the fullName property
console.log(name2);
// spread operator can be use to spread out the properties Object
console.log(rest);

// the spread operator can be used to spread out the properties of an Object(s)
console.log({ ...person1, ...person2 }); // Common properties in all objects you are adding/spreading will be listed once(that of the last object). In this case there will be only one "height" property and its the one from "person2"

function callPerson(human) {
  console.log(`my name is ${human.name} and I am from ${human.country}`);
}

callPerson(person1);

// using destructuring to do the above:

function callPerson2({ name, country, address: { city } }) {
  console.log(`my name is ${name}, I am from ${country} and I am from ${city}`);
}

callPerson2(person1);
