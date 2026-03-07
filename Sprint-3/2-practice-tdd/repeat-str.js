//refactored function using built-in method
function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("count cannot be negative");
  }
  return str.repeat(count);
}

module.exports = repeatStr;
