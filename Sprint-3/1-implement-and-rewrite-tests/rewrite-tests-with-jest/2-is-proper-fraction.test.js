// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// test: proper fraction
// --- case 1: Proper Fractions ---
test('should return true for valid proper fractions, including negative numbers', () => {
  expect(isProperFraction(5, 9)).toBe(true);
  expect(isProperFraction(3, 4)).toBe(true);
  expect(isProperFraction(2, 8)).toBe(true);
  expect(isProperFraction(1, 6)).toBe(true);
  expect(isProperFraction(-3, -5)).toBe(true);
});

// --- case 2: Improper Fractions ---
test('should return false for improper fractions where numerator >= denominator', () => {
  expect(isProperFraction(-7, 5)).toBe(false);
  expect(isProperFraction(10, 3)).toBe(false);
  expect(isProperFraction(5, 5)).toBe(false); 
});

// --- case 3: 0 Numerator and 0 Denominator ---
test('should return false when numerator or denominator is zero', () => {
  expect(isProperFraction(3, 0)).toBe(false); 
  expect(isProperFraction(0, 3)).toBe(false); 
  expect(isProperFraction(0, 0)).toBe(false); 
});