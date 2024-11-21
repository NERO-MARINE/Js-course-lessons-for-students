let btn1 = document.querySelector('.btn1');
let ul = document.querySelector('.myUl');

btn1.addEventListener('click', ()=>{
    let form = document.querySelector('form');
    let clonedUl = ul.cloneNode(true);
    
    // let body = document.querySelector('body');
    // body.appendChild(clonedUl)
    // body.insertBefore(clonedUl, form);
    document.body.insertBefore(clonedUl, form);
})


let form = document.querySelector('form');
let btn2 = document.querySelector('.btn2');


btn2.addEventListener('click', ()=>{
    let myInput = document.querySelector('#myInput')
    let clonedInput = myInput.cloneNode(true);
    form.insertBefore(clonedInput, btn2);

})
