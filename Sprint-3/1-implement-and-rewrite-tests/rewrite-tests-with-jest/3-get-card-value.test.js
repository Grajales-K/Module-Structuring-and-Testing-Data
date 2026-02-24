// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

describe("getCardValue", () => {

  // Group 1: success cases (Valid cards)
  test("should return 11 when given an Ace (A)", () => {
    expect(getCardValue("A♠")).toBe(11);
    expect(getCardValue("A♥")).toBe(11);
  });

  test("should return 10 when given a face card (J, Q, K)", () => {
    expect(getCardValue("J♣")).toBe(10);
    expect(getCardValue("Q♦")).toBe(10);
    expect(getCardValue("K♠")).toBe(10);
  });

  test("should return the numeric value for number cards (2-10)", () => {
    expect(getCardValue("2♥")).toBe(2);
    expect(getCardValue("7♦")).toBe(7);
    expect(getCardValue("10♣")).toBe(10);
  });

  // Group 2: error cases (Invalid cards)
  describe("Invalid cards", () => {
    test("should throw an error for invalid card length or missing components", () => {
      expect(() => getCardValue("A")).toThrow("Invalid card");
      expect(() => getCardValue("100♥")).toThrow("Invalid card");
      expect(() => getCardValue("")).toThrow("Invalid card");
    });

    test("should throw an error for an invalid suit emoji", () => {
      expect(() => getCardValue("A🌸")).toThrow("Invalid card suit");
      expect(() => getCardValue("10X")).toThrow("Invalid card suit");
    });

    test("should throw an error for an invalid rank", () => {
      expect(() => getCardValue("1♥")).toThrow("Invalid card rank");
      expect(() => getCardValue("15♦")).toThrow("Invalid card rank");
      expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
    });
  });
});
