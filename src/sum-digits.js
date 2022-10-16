const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sNim = String(n);
  let sumNum = 0;
  for (let i = 0; i < sNim.length; i++) {
    sumNum += Number(sNim[i]);
  }
  if (sumNum >= 10) {
    sumNum += 1;
  }
  sumNum = String(sumNum);
  let lastNum = sumNum.substr(sumNum.length - 1);
  return Number(lastNum);
}

module.exports = {
  getSumOfDigits,
};
