function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("count cannot be negative");
  }
  if (count === 1) return str;

  let result = "";
  for (let i = 0; i < count; i++) {
    result = result + str;
  }
  return result;
}

module.exports = repeatStr;

