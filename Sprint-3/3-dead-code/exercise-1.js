// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.


// DEAD CODE
// let testName = "Jerry";
// const greeting = "hello";

// function sayHello(greeting, name) {
//   // const greetingStr = greeting + ", " + name + "!";
//   return `${greeting}, ${name}!`;
//   console.log(greetingStr);
// }

// // testName = "Aman";

// const greetingMessage = sayHello(greeting, testName);

// console.log(greetingMessage); // 'hello, Aman!'

/** 
"Clean Code Refactoring: SayHello Function"

Removed Dead Data: Eliminated the unreachable variable value "Jerry" to keep memory clean.
Enforced Immutability: Switched from let to const for variables that do not change, preventing accidental reassignments.
Optimized Variable Scope: Reorganized the declaration order to ensure variables are defined before they are called.
Simplified Function Logic: Removed redundant intermediate variables (greetingStr) inside the function to return the result directly.
Streamlined Output: Removed internal console.log statements after testing to keep the console clean and focused on the final output.
Execution: Properly invoked the function by passing the correct parameters for the final print.
*/

const greeting = "hello";
const testName = "Aman";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
  
}

console.log(sayHello(greeting, testName)); // 'hello, Aman!'
