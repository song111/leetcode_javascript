// 思考：这题目实际上是计算下个数与当前数的差值是正就买入，是负数的话不用管，因为只计算最大值，所以归根结底只要算所有正差值的和就行了
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices: number[]) {
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      max += prices[i] - prices[i - 1];
    }
  }

  return max;
};
