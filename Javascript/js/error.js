// The try statement lets you test a block of code for errors.

// The catch statement lets you handle the error.

// The throw statement lets you create custom errors.

// The finally statement lets you execute code, after try and catch, regardless of the result.



// A ReferenceError is thrown if you use (reference) a variable that has not been declared:
// A SyntaxError is thrown if you try to evaluate code with a syntax error.
// A TypeError is thrown if you use a value that is outside the range of expected types:

let y = 10
let z = 10;

try{
    let x = y + z
    console.log(x)

} catch(err){
    console.log(err)  // this gives you the entire error object
    console.log(err.name) // this gives you the error name
    console.log(err.message) // this gives you the error message
}


try{
 
    // let name = 40
    // name.toUpperCase()
    // console.log(name)

    let name = 'hello'
    name.toUpperCase()
    console.log(name)

} catch(err){
    console.log(err)  // this gives you the entire error object
    console.log(err.name) // this gives you the error name
    console.log(err.message) // this gives you the error message
}


// lets play project

function myFunction(){
    const myInput = document.getElementById('myInput')
    let error = document.getElementById('error')
    error.innerHTML = ''

    try{

        if(myInput.value === '') throw 'empty'

        if(myInput.value < 6) throw 'less the 6'
        
        if(myInput.value > 20) throw 'greater than 20'

        if(isNaN(myInput.value)) throw 'not a number'

    } catch(err){
        error.innerHTML = `your input is ${err}`
    }

    // The finally statement lets you execute code, after try and catch, regardless of the result.
    finally{
        console.log('I will run no matter the output')
    }
}
