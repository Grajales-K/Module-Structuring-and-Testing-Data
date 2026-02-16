// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//this line will generate a random number between minimum and maximum (inclusive)
// and math.floor will remove decimal part 

Math.floor() //removes decimal part and returns whole number
Math.random() //needs to values between minimum and maximum to generate a random number

console.log(maximum - minimum + 1 ) + minimum; // this is same as 100 - 1 + 1 = 100 
console.log(`The random number is ${num}`);


// breaking down the expressions
// We subtract the minimum from the maximum to find the absolute range (the distance) 
// between the two numbers. This tells Math.random() how many possible values it needs 
// to generate. We add it back at the end to shift the starting point from 0 to our desired minimum.


// 1. Range = (100 - 1 + 1) -> We have 100 possible integers.
// 2. Scaling = Math.random() * 100 -> Gives a decimal between 0 and 99.99.
// 3. Integer = Math.floor(0 to 99.99) -> Gives a whole number between 0 and 99.
// 4. Offset = (0 to 99) + 1 -> Shifts the result to be between 1 and 100.


