//  Arrays are special variables that holds/stores muliple values. These values can be of different data type.

// arrays are defined using the square bracket[]. The values of an array are acessed with their index

const cars = ["Volvo", "Camry", "Toyota"];
console.log(cars);

// Acessing Items In an array
const firstCar = cars[0];
console.log(firstCar);

let randomArray = ["John Doe", 30, true, "Duplex"];
console.log(randomArray); // entire array
console.log(randomArray[0]); // john doe
console.log(randomArray[2]); // true

// Modifying Items in an array
const cars2 = ["toyota", "camry", "volvo", "benz", "g-wagon"];
console.log(cars2);

cars2[0] = "Venza";
cars2[3] = "Lexus";
console.log(cars2);

//  The length of an array: This is the actual count of items in the array
console.log(cars.length);
console.log(cars2.length);

//  getting the last item of an array using the length property. This trick is very important to know
console.log(cars2[cars2.length - 1]);

// we can have objects in an array
const books = [
  { title: "How to Learn Programming", authour: "John Doe", vol: 20 },
  { title: "How to Cook Sweet Jollof", authour: "Precious Andrew", vol: 1 },
  { title: "How to bake cake", authour: "Mary Peters", vol: 2 },
  { title: "How to Learn Gaming", authour: "John Doe", vol: 2 },
];

console.log(books);

// class work

//1. log the first book to the console
//2. log the author of the second book to the console
//3. log the last book to the console without using the index

//4. do the below code again but this time use an array iterator method
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

// answer to question 4
books.forEach((book) => console.log(book.title));

//5. use an array iterator method to log books written by John doe
const booksByJohnDoe = books.filter((book) => book.authour == "John Doe");
// const booksByJohnDoe = books.filter((book) => {
//   return book.authour == "John Doe";
// });

console.log(booksByJohnDoe); // array of books written by John Doe

//6. log the title of the books written by John Doe using an array iterator
booksByJohnDoe.forEach((book) => console.log(book.title));

//7. get the total of all books vol using an array iterator method
const totalBooksVol = books
  .map((book) => book.vol)
  .reduce((total, value) => total + value);

console.log(totalBooksVol);

//8. get all the books written by "John Doe" and "Precious Andrew" using array iterator method
const booksWrittenByPreshAndJohn = books.filter(
  (book) => book.authour === "John Doe" || book.authour === "Precious Andrew"
);

console.log(booksWrittenByPreshAndJohn);

//  Higher order functions Assignment

const companies = [
  {
    name: "codebadger Technology",
    yearFounded: 2020,
    country: "Nigeria",
    startUpCapital: 2000,
  },
  {
    name: "Total Energies",
    yearFounded: 2021,
    country: "Canada",
    startUpCapital: 5000,
  },
  { name: "NNPC", yearFounded: 1995, country: "USA", startUpCapital: 4000 },
  {
    name: "Bamako",
    yearFounded: 1996,
    country: "Nigeria",
    startUpCapital: 1000,
  },
  {
    name: "Zebra",
    yearFounded: 2020,
    country: "Nigeria",
    startUpCapital: 7000,
  },
  {
    name: "Amazon",
    yearFounded: 1990,
    country: "Canada",
    startUpCapital: 1000,
  },
  { name: "Raycom", yearFounded: 2020, country: "USA", startUpCapital: 2500 },
  {
    name: "Spikes",
    yearFounded: 1991,
    country: "Nigeria",
    startUpCapital: 3000,
  },
  { name: "Catly", yearFounded: 1991, country: "Canada", startUpCapital: 5000 },
  {
    name: "First Bank",
    yearFounded: 2005,
    country: "USA",
    startUpCapital: 1000,
  },
  {
    name: "Logcas",
    yearFounded: 2004,
    country: "Nigeria",
    startUpCapital: 2000,
  },
  { name: "Focal", yearFounded: 2022, country: "Canada", startUpCapital: 5000 },
  {
    name: "klazon",
    yearFounded: 2010,
    country: "Canada",
    startUpCapital: 1000,
  },
  { name: "Remow", yearFounded: 2008, country: "USA", startUpCapital: 2000 },
];

// 1) log only title of each company to your console
// 2) log only the companies with a start up capital greater than 2000
// 3) log only companies founded before year 2000
// 4) log only companies founded after year 2000
// 5) log only companies that are located in Nigeria and Canada
// 6) log the total sum of start up captial by all companies
// 7) log only companies founded in the year 2020
