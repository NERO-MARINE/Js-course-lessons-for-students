// document.createElement(), document.createTextNode(), insertBefore(), appendChild(), replaceChild()

/*
let h6 = document.createElement('h6');
let txth6 = document.createTextNode('I am a programmer');
h6.append(txth6);
console.log(h6);
*/

let h6 = document.createElement('h6');
h6.textContent = 'Hello world i am a programmer';
h6.style.fontSize = '40px';
h6.style.color = 'blue';
console.log(h6);

let div = document.createElement('div');
let p = document.createElement('p');

div.textContent = 'I am a text blah blah';
// div.setAttribute('style', 'color: red; border: 1px solid green')
div.style.color = 'red';
div.style.border = '1px solid green';
div.classList = 'myDiv'; // classname
div.id = 'mydiv';

p.textContent = 'I am good cook';
div.append(p);

console.log(div);

let link = document.createElement('a');
link.href = 'https://facebook.com';
link.textContent = 'Facebook'
console.log(link);

//  ways to insert created elements into the dom.

// appendChild to the body --- parent.appendChild(child): This will append the element at the bottom of the body

var body = document.querySelector('body');
body.appendChild(div);


// insertBefore "ul" ---- parent.insertBefore(newElement, ul): Inserts element before a specified element in the body;
let ul = document.querySelector('#list'); // ul
body.insertBefore(h6, ul);

// replaceChild "textInput" ---- parent.replaceChild(newElement, textInput) : replaces an element in the body with the new element

let textInput = document.querySelector('input[type="text"]');
body.replaceChild(link, textInput);