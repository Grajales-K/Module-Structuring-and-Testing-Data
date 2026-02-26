function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("count cannot be negative 😭");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result = result + str;
  }
  return result;
}

module.exports = repeatStr;


// Case: Manual inspection of the Error object
// We use try/catch to log the error message to the console
// to verify it's working as expected without breaking the test suite.
test("Should log the specific error message to the console", () => {
  try {
    repeatStr("hi", -3);
  } catch (error) {
    console.log("Verified Error Message ->", error.message);

    // Check if the message is exactly what we defined
    expect(error.message).toBe("count cannot be negative 😭");
  }

  // Also verify that it actually throws using Jest's built-in matcher
  expect(() => repeatStr("hi", -3)).toThrow();
});
