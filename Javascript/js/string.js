// Strings are Text. Strings are always written inside of double or single quotes

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
const msg = "I am a very 'good' girl";
const msg2 = 'I am a very "good" boy';
console.log(msg);
console.log(msg2);

// USING THE ESCAPE STRING INSTEAD (\)
let msg3 = "I am a very \"good\" man";
let msg4 = 'I am a very \'good\' woman';
console.log(msg3);
console.log(msg4);

// STRING METHODS AND PROPERTY:

// 1) The length property: This returns the length of a string
const myText = "abc abc";
const lengthOfmyText = myText.length; // 7
console.log(lengthOfmyText);

// 2) indexOf() method: This returns the position of the first occurrence of a text inside a string

const myText2 = "I am a boy and a boy";
const res = myText2.indexOf("boy"); // 7
console.log(res);

// 2) lastIndexOf() method: This returns the position of the last occurrrence of a text inside a string
const myText3 = "I am a boy and a boy";
console.log(myText3.lastIndexOf("boy")); // 17

// 3) slice() method:  extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the start position, and the end position (end not included).

const myText4 = "I am a boy and a boy";
const newMyText4 = myText4.slice(7, 13); // returns==> boy an
console.log(newMyText4);
console.log(myText4); // The original string is not altered

// If you omit the second parameter, the method will slice out the rest of the string from the start position:
const myText5 = "I am a boy and a boy";
const newMyText5 = myText5.slice(5); // returns==> a boy and a boy
console.log(newMyText5);


// relace() method: replaces a specified value with another value in a string. This method does not change the string it is called on. It returns a new string.

const myText6 = "I am going to school";
const newMyText6 = myText6.replace("school", "church");
console.log(newMyText6);
console.log(myText6); // The original string is not altered

// The replace method is case sensitive. To make it case insensitive, use a regular expression with an /i flag (insensitive):

const myText7 = "I am going to play";
// const newMyText7 = myText7.replace("PLAY", "read"); // This won't work
const newMyText7 = myText7.replace(/PLAY/i, "eat");
console.log(newMyText7);

// By default, the replace() method replaces only the first match:
const myText8 = "I love football so much. football is my best sport";

// const newMyText8 = myText8.replace("football", "basketball"); // This replacs only the first match(football);

// to replace all matches us  a regular expression with a /g flag(global)
const newMyText8 = myText8.replace(/football/g, "basketball"); // This replacs all 

console.log(newMyText8);

// toLowercase() method: This method is used to convert an uppercase string to lowercase
const myText9 = "HELLO WORLD";
const newMyText9 = myText9.toLowerCase();
console.log(newMyText9);

// touppercase() method: This method is used to convert a lowercase string to uppercase
const myText10 = "goodbye world";
const newMyText10 = myText10.toUpperCase();
console.log(newMyText10);

// concat() method: adds strings(concatenation)
const text1 = "Hey Powel";
const text2 = "Congratulations to you";
const text3 = "!!!";

console.log(text1 + " " + text2 + text3); // using the plus operator
console.log(`${text1} ${text2} ${text3}`) // using template strings or literals
console.log(text1.concat(" ", text2, text3));

//  The trim() method: removes excess white spaces from a string
const text4 = "       hello world";
console.log(text4);
console.log(text4.trim());