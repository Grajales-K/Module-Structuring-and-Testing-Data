const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Caso 2: number ending in 2 (nd) - but no 12
test("should append 'nd' for numbers ending with 2, except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// case 3: numbers ending on 3 but no 13
test("Should append 'rd' for numbers ending with 3, except 13", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
});

// case 4: numbers exception like 11, 12 and 13 append th
test("should append 'th' for the exceptions 11, 12, and 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// case 5: rest of numbers
test("should append 'th' for number ending in 4, 5, 6, 7, 8, 9 or 0", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(6)).toEqual("6th");
  expect(getOrdinalNumber(17)).toEqual("17th");
  expect(getOrdinalNumber(18)).toEqual("18th");
  expect(getOrdinalNumber(29)).toEqual("29th");
  expect(getOrdinalNumber(30)).toEqual("30th");
});
