const num = 56.5678;

//Math.trunc() it return only the integer number without rounded number 
console.log(Math.trunc(56.5678));


// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )

    const wholeNumberPart = (Math.floor(num));


// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )

// parseFloat() picks the longest substring starting from the beginning that generates a valid 
// number literal. If it encounters an invalid character, it returns the number represented up 
// to that point, ignoring the invalid character and all characters following it.
// If the argument's first character can't start a legal number literal per the syntax above, 
// parseFloat returns NaN.

    const decimalPart = parseFloat((num - wholeNumberPart).toFixed(4));


// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )


    const roundedNum = (Math.round(num));

// Log your variables to the console to check your answers
console.log(wholeNumberPart, decimalPart, roundedNum);

