const testStr = "{[()}]}";

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s: string) {
  const map: { [prop: string]: number } = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3,
  };
  const stack = [];
  for (let item of s) {
    if (map[item] < 0) {
      stack.push(item);
    } else {
      const last = stack.pop();
      if (map[item] + map[last] !== 0) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log(isValid(testStr));
