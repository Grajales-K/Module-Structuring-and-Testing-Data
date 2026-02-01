function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; 
  //get the remaining seconds after dividing by 61/60 = 1 remainder 1
  const totalMinutes = (seconds - remainingSeconds) / 60;
  //get seconds = 1 - 60; result is 60/60 =  total minutes 1
  const remainingMinutes = totalMinutes % 60;
  //the remainingMinutes  = 1 & 60 = 1; because the totalMinutes is less than 
  // 60 the number will always the number from left side of the modulus operator
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}


console.log(formatTimeDisplay(61)); // Should print "00:01:01"    

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// pad function will be called 3 times when formatTimeDisplay is called.

//==== Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here 
// The value assigned to num when pad is called for the first time is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when it is called for the first time is "00".
// because num is 0, and when we convert it to a string and pad it to 2 
// characters with leading zeros, it becomes "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time in this program is "01".
