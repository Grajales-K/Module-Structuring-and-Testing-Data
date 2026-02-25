// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("should return no occurrences if no found character", () => {
    const str = "jhhfdd";
    const char = "r";
    const count = countChar(str, char);
    expect(count).toEqual(0);
  });

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// case 2
test("should return 1 when the character appears only once", () => {
  expect(countChar("hello", "h")).toEqual(1);
});

// case 3
test("Should return 0 for empty string", () => {
  expect(countChar("", "a")).toEqual(0)
}) 

// case 4
test("should be case sensitive", () => {
  expect(countChar("aA", "a")).toEqual(1);
});