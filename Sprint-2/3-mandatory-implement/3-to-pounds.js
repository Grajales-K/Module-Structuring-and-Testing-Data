// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


// =============================== Original Code ========================
// const penceString = "399p";

// const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// );

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2 
// );

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");

// console.log(`£${pounds}.${pence}`);



// =============================== Refactoring ========================

// to make robust function we can use some maths methods to reduce the looping and 
// return only the numbers, like this: /[^\d]/g, with that we can remove all 
// characters that are no number, then we can convert the number into decimals by 
// dividing by 100.

//padStart method can be used to ensure that strings have a minimum length, no used in numbers
//The toFixed() method formats a number using fixed-point notation.

// In programming, we call this a Regular Expression (Regex). Think of it as a custom filter for text.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions

// REGEX BREAKDOWN

// Delimiters (/ /): The "brackets" that mark the start and end of the Regex.
// Non-digit (\D): Matches any character that is NOT a number (0-9).
// Negated Set ([^\d]): The long version of \D (Anything that is NOT a digit).
// Global Flag (g): Tells the code to clean the entire string, not just the first letter.
// Empty String (''): Replaces the "bad" characters with nothing (deleting them).
// Example: "£1.50p" -> "150"
// const onlyNumbers = str.replace(/\D/g, '');

// =============================== Reusable Code ========================


function toPounds(str){

    const onlyNumbers = str.replace(/[^\d]/g, '');
    const decimals = (onlyNumbers/100).toFixed(2);

    return `£${decimals}`;
};



// =============================== 1st way to test ========================

const examples = ["79p", "hfhbgjk1p", "150p", "£2.50", "11000"];
for (const example of examples) {
    console.log(toPounds(example));
}


// =============================== 2nd way to test ========================

// const examples2 = ["79p", "hfhbgjk1p", "150p", "£2.50", "12000"];
// for (const example of examples2) {
//   console.log(`Original: ${example} -> Formatted: ${toPounds(example)}`);
// };