// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {

  if(denominator === 0){
    return false
  }
  
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    return false; 
  }

  if (numerator < 0) {
    numerator = numerator * -1;
  }

  if (denominator < 0) {
    denominator = denominator * -1;
  }
  return numerator < denominator;
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(5, 9), true);
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(2, 8), true);
assertEquals(isProperFraction(1, 6), true);
assertEquals(isProperFraction(0, 5), true);
assertEquals(isProperFraction(-3, -5), true);



// Example: 3/2 is a improper fraction
assertEquals(isProperFraction(3, 0), false);
assertEquals(isProperFraction(-7, 5), false);
assertEquals(isProperFraction(5, "-36"), false);
assertEquals(isProperFraction("-8", 5), false);
console.log("✓ All test executed!");
