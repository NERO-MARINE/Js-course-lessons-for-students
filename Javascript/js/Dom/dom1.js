// DOM STANDS FOR - DOCUMENT OBEJCT MODEL.

// It is the standard for modifying HTML elements. It treats the document as a tree a of nodes

/*
  html Selcetors, changing the contents of html elements, changing styles of elements,  parentNodes and ParentElement, childNodes and Elements, creating new html elements, cloning html elements, events, todoList Project
*/





//html selectors are used to select Elements from The DOM

/*
  document.getElementById(), document.getElementByClassName(), document.getElementByTagName(), document.querySelector(), document.querySelectorAll()
*/


//  1) document.getElementById()
let h1 = document.getElementById('heading1');
console.log(h1);

// h1.innerHTML = 'Hello'
// h1.innerText = 'Hello';
// h1.textContent = 'Hello';

// difference between innerHTML, innerText and textContent

let h11 = document.getElementById('heading11');

console.log(h11.innerHTML); // this gives you everything inside the open and close tag of an element and that includes html elements as well

console.log(h11.innerText); // this gives you the text content but pays attention the styles inside of the element

console.log(h11.textContent); // this just gives you the text content of an element



// getting the children of an element
let ul = document.getElementById('list');
console.log(ul.children); // html collection of the childern of the ul
console.log(ul.firstElementChild); // first child of the ul
console.log(ul.lastElementChild); // last child of the ul 
console.log(ul.children[1]); // this gives you the second child


// change the third child of the ul to dispay the text "I am fine"
ul.children[2].innerHTML = 'I am fine';
ul.children[2].style.color = "red";
ul.children[2].style.backgroundColor = 'blue';

let ol = document.getElementById('list2');
console.log(ol);

// Note: HTML COLLECTIONS are like arrays but you cannot use certain array methods on them e.g array Iteration methods()

/*
ol.children[0].innerHTML = 'hello';
ol.children[1].innerHTML = 'hello';
ol.children[2].innerHTML = 'hello';
ol.children[3].innerHTML = 'hello';
ol.children[4].innerHTML = 'hello';
*/

let myArray = ol.children; // This gives an html collection
console.log(myArray[0]);

for(let i = 0; i < myArray.length; i++){
  myArray[i].innerHTML = 'Hello';
  myArray[i].style.fontSize = '40px';
}

// document.getElementsByClassName(): grabs elements by their class name;
let btn = document.getElementsByClassName('btn'); // html collection
console.log(btn);

let listItem1 = document.getElementsByClassName('listItem1'); // html collection
console.log(listItem1);
listItem1[0].style.textDecoration = 'underline';

for(x = 0; x < listItem1.length; x++){
  listItem1[x].style.color = 'purple';
}


// document.getElementByTagName(): grabs elements by their tag name

let allInputs = document.getElementsByTagName('input');
console.log(allInputs);

for(y = 0; y < allInputs.length; y++){
    allInputs[y].value = 'hello world';
}

// Geting Elements byid, byclassName and byTagName gives you  "HTML collections". HTML COLLECTIONS are like arrays but you cannot use certain array methods on them e.g array Iteration methods(). If you use ".children" you will also html collection



// querySelector() and querySelectorAll();

// querySelector() lets you grab items from the dom using either their class names, ids, or tag names

let heading1 = document.querySelector('#heading1'); // it will grab the first item with this id only
let listItem = document.querySelector('.listItem');// it will grab only the first match
let input = document.querySelector('input') // it will grab ony the first match

console.log(h1);
console.log(listItem);
console.log(input);


// querySelectorAll(): select all matches of a particular class name, id or tag name from our dom

let olListItem = document.querySelectorAll('.listItem');// it will grab all the elements that matches and returns a nodelist
console.log(olListItem);

// nodelists are like arrays and unlike html collection we can use array iterators on them
olListItem.forEach((item)=>{
  item.style.fontStyle = "italic";
})

let allH1 = document.querySelectorAll('h1') // it will grab all the elements that matches and returns a nodelist
console.log(allH1);


var orderedList = document.querySelector('#list2');
var kids = orderedList.children; // this will also give you html collection because we used the children property to all the decendants of the ol

console.log(kids);
var firstChildOfOL = ol.firstElementChild;
firstChildOfOL.innerHTML = 'First baby';

var middleChildOfOl = ol.children[2];
middleChildOfOl.innerHTML = 'middle baby';


// childNodes
var body = document.querySelector('body');
console.log(body.childNodes); // gives you all the text nodes and Element nodes
console.log(body.children); // gives you just the element
console.log(body.firstChild) // you get text
console.log(body.firstElementChild); // the first element in the body
console.log(body.lastElementChild);
console.log(body.children[10]);


// silblings: previousElementSilbling, nextElementSilbing
var body = document.querySelector('body');
console.log(body.previousElementSibling); // head
console.log(body.nextElementSibling); // null-- no next sibling

var para1 = document.querySelector('.para1');
console.log(para1.nextElementSibling.nextElementSibling.nextElementSibling); 

console.log(para1.previousElementSibling.previousElementSibling);
