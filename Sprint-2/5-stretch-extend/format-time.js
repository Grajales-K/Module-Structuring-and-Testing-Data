// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function pad(hours) {
  return hours.toString().padStart(2, "0");
}

function formatAs12HourClock(time) {
  const colonIndex = time.indexOf(":");
  const hours = Number(time.slice(0, colonIndex));
  const min = time.slice(colonIndex);
  
  if (hours >= 12) {
    const hours12 = hours - 12;
    return `${pad(hours12)}${min} pm`;
  }

  const midnight = hours === 0 ? 12 : hours;
  return `${pad(midnight)}${min} am`;
}

//asserts for morning, afternoon, and midnight cases

const currentOutput = formatAs12HourClock("00:00");
const targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput1 = formatAs12HourClock("9:30");
const targetOutput1 = "09:30 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);

const currentOutput2 = formatAs12HourClock("12:00");
const targetOutput2 = "12:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("15:45");
const targetOutput3 = "03:45 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("23:00");
const targetOutput4 = "11:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);



// to test if the test were running
console.log("--- test executed ---");