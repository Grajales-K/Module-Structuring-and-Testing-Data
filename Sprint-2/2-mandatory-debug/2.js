// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

  // The output will always be 3 for all cases. Even though 
  // arguments are passed to the function, it lacks parameter 
  // to receive them. Therefore, the function defaults to using
  // the global scope constant num = 103 every time it runs.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
  // The output is:
  // The last digit of 42 is 3
  // The last digit of 105 is 3
  // The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

  // The function getLastDigit is not working properly because 
  // it is hardcoded to use the global constant num. Since 
  // the function definition does not include any parameters, 
  // it ignores the arguments (42, 105, 806) passed during the 
  // call. As a result, it always calculates the last digit of 103, which is 3

// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103; //this now is a ghost variable and is not used in the function

function getLastDigit(value) {
  return value.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem