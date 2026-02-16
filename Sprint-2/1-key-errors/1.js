// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here

// This function will throw a SyntaxError because decimalNumber 
// is being redeclared inside the same scope as the parameter. 
// Additionally, the function ignores the input parameter 
// because the value is hardcoded inside the body. 
// Finally, the console.log will throw a ReferenceError 
// because it tries to access a local variable from the global scope. 
// To fix this, we must remove the internal declaration to use the 
// parameter dynamically and invoke the function correctly.

// Finally, correct the code to fix the problem
// =============> write your new code here



// function convertToPercentage(num) {
//   return  `${num * 100}%`;;
// }


const convertToPercentage = (num) => `${num * 100}%`;

console.log(convertToPercentage(0.80));