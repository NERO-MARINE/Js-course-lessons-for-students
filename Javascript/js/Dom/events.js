// Three ways to add an event to an html Element:

/*
- adding the event directly on the event attribute of an html element
- reference a javascript function using an event attribute on the html element
- using the addEventListener() method to add events to html elements from Javascript:-- recommended

*/

function myFunction(){
   const h1 = document.getElementById('heading11');
   h1.innerHTML = 'Goodbye';
}



/*

function myFunction2(){
    const h1 = document.querySelector('#myH1');
    h1.innerHTML = 'I am a boy';
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', myFunction2);

*/

const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    const h1 = document.querySelector('#myH1');
    h1.innerHTML = 'I am a boy';
})


// types of Events and the "event parameter (event) or (e)"

// the event parameter gives us information about the event

// 1) mouseevents/pointer events: click, mousedown, mouseup, mouseover, mouseleave, mouseenter etc

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', (event)=>{
    console.log(event);
    console.log(event.type); // gives the type of event
    console.log(event.target); // the element the event targets
    console.log(event.target.id); // gives you the id of the target
    console.log(event.target.className); // gives you the class name of the target
    console.log(event.target.classList); // gives you the class name of the target
})

document.querySelector('#list2').addEventListener('mouseup', (e)=>{
    console.log(e.type); // gives the type of event
    console.log(e.target); // the element the event targets
    console.log(e.target.id); // gives you the id of the target
    console.log(e.target.className); // gives you the class name of the target
    console.log(e.target.classList); // gives you the class name of the target
})

// 2) keyboard events: keyup, keydown, keypress, etc.
let textInput = document.querySelector('input[type="text"]');
textInput.addEventListener('keyup', (e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target.value);
    document.querySelector('#para1').innerHTML = e.target.value;
})


// 3) Focus event
let emailInput = document.querySelector('input[type="email"]');
emailInput.addEventListener('focus', (e)=>{
    // console.log(e.target);

   emailInput.value = "1px solid red";
   // emailInput.style.border = '4px solid red'
   e.target.style.border = '4px solid blue'

   document.querySelector('#heading1').classList.toggle('hello')
})

// 4) submit event: Is used with a form.

const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault(); // This prevents the form from refreshing the page on submission
    console.log(e.type);
    let formInput = document.querySelector('#formText');
    formInput.value = 'Hello'; 
})

// add, remove and toggle css classes.
let btn3 = document.querySelector('.btn3');
let myh22 = document.querySelector('.myh22');
let blah = document.querySelector('.blah');
let blah2 = document.querySelector('.blah2');


btn3.addEventListener('click', ()=>{
    myh22.classList.remove('myh22');
    blah2.classList.add('myh22');
    blah.classList.toggle('blah');
})