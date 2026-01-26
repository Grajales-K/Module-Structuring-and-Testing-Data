// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   const capiLetter = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return capiLetter;
// }

// =============> write your explanation here

  // The original code failed for two reasons: first the function was never invoke,
  // there was a variable naming conflict with the function scope.
  // Since str was already defined as a parameter, can not be used to re-declare 
  // a variable inside the function. To fix this, I moved the processed directly and
  // returned the result directly

// =============> write your new code here


function capitalise(str) {
 
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello")); 