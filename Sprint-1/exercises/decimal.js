// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers

const num = 56.5678;
const num1 = 56.567954794; // for testing the function that rounds to a specific number of decimal places

const wholeNumberPart = Math.trunc(num);
const decimalPart = Number((num - wholeNumberPart).toFixed(8));
// const fourDigits = Math.round(decimalPart * 10000) / 10000; //rounds to 4 decimal places

const fourDigits = roundToDecimalPlaces(decimalPart, 4);// using the function we created to round to 4 decimal places
const roundedNum = Math.round(num); // rounds to nearest whole number


console.log(`FINAL RESULTS:
----------------    
Original:    ${num}
wholeNum:    ${wholeNumberPart}
Decimal:     ${decimalPart}
FourDigits:  ${fourDigits}
roundedNum:  ${roundedNum}`);





function roundToDecimalPlaces(number, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.trunc(number * factor) / factor;
}

console.log(` 
    -------------- function test --------------
    Rounded to 4 decimal places = ${roundToDecimalPlaces(num1, 4)}`); // rounds to 4 decimal places