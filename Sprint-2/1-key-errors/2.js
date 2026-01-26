
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }


// =============> write the error message here

    // It will throw a syntaxError because a literal Number(3) cannot be used
    // as a function parameter. furthermore, the return statement will 
    // cause an referenceError because it attempts to use a var num that 
    // has no been defined. To fix this, we must replace the number in 
    // the function with the identifier num.

// =============> explain this error message here

// Finally, correct the code to fix the problem

// =============> write your new code here



function square(num) {
    return num * num;
}


console.log(square(9));  