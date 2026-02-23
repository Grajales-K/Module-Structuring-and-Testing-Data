// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  //check the length and if does not match the valid length throw an error
  if (card.length < 2 || card.length > 3) {
    throw new Error("Invalid card");
  }
  const suits = ["♠", "♥", "♦", "♣"];
  const suit = card[card.length - 1];

  let suitValid = false;

  for (let i = 0; i < suits.length; i++) {
    if (suit === suits[i]) {
      suitValid = true;
      break;
    }
  }
  // after comparing each suit in our array and does not match throw an error
  if (suitValid === false) {
    throw new Error("Invalid card suit");
  }

  let rank = card.substring(0, card.length - 1);

  if (rank === "A") {
    return 11;
  }
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  let number = Number(rank);

  if (isNaN(number) || number < 2 || number > 10) {
    throw new Error("Invalid card rank");
  }

  return number;
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  if (actualOutput !== targetOutput) {
    console.error(
      `❌ FAILED: Expected ${targetOutput} but received ${actualOutput}`
    );
  } else {
    console.log(`✅ PASSED: Value is ${actualOutput} as expected`);
  }
}

function assertThrows(invalidCard) {
  try {
    getCardValue(invalidCard);
    console.error(
      `❌ FAILED: "${invalidCard}" should have thrown an error, but it didn't`
    );
  } catch (e) {
    console.log(`✅ PASSED: Error catch para "${invalidCard}" [${e.message}]`);
  }
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Examples:
console.log("--- Running Success Tests ---");
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("A♣"), 11);
assertEquals(getCardValue("K♦"), 10);
assertEquals(getCardValue("J♠"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("7♦"), 7);

console.log("\n--- Running Edge Case Tests ---");
assertThrows("d");
assertThrows("15♥");
assertThrows("A");
assertThrows("JPP");
assertThrows("Q🌸");

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {
  console.log("✓ Error thrown as expected for invalid card");
}

// What other invalid card cases can you think of?
