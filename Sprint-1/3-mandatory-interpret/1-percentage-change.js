let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    // There are 5 function calls in this file:
    // Line 4: Number() and replaceAll(",", "")
    // Line 5: Number() and replaceAll(",", "")  
    // Line 10: console.log()


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    
    // The error was line 5, carPrice.replaceAll("," ""); missing the comma between the arguments

// c) Identify all the lines that are variable reassignment statements

    //line 4, line 5, 

// d) Identify all the lines that are variable declarations

    // line 1, line 2, line 7 and line 8


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

    // First, replaceAll(",", "") removes the commas from the string because JavaScript 
    // cannot perform math on strings containing symbols. It turns "10,000" into "10000".

    // Then, the Number() function converts that clean string into an actual number.
    // The purpose is to prepare the data for calculation; without this, JavaScript 
    // would return NaN (Not a Number) when trying to subtract the prices.

    
// ---------- console.log each step to see the results ----------

    // let carPrice = "10,000";
    // let priceAfterOneYear = "8,543";

    // carPrice = Number(carPrice.replaceAll(",", ""));
    // console.log(carPrice); // the commas are removed and the string is converted to a number

    // priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    // console.log(priceAfterOneYear); // the commas are removed and the string is converted to a number

    // const priceDifference = carPrice - priceAfterOneYear;
    // console.log(`The price difference is ${priceDifference}`);

    // const percentageChange = (priceDifference / carPrice) * 100;
    // console.log(`The percentage change is ${percentageChange}`);