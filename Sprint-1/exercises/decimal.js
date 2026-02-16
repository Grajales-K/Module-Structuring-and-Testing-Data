const num = 56.5678;



// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers



const wholeNumberPart = Math.trunc(num);
const decimalPart = num - wholeNumberPart;
fourDigits = Math.round(decimalPart * 10000) / 10000; //rounds to 4 decimal places
//removed to toFixed() because returns a string and I want
//to confirm that decimalPart is a number, so I rounded it to 4 decimal places using Math.round() instead.
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
    return Math.round(number * factor) / factor;
}

console.log(` 
    -------------- function test --------------
    Rounded to 4 decimal places = ${roundToDecimalPlaces(num, 4)}`); // rounds to 4 decimal places