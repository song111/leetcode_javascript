// 思考:先排序，然后遍历每个数，并找到其后面的两个目标值
const nums = [-1, 0, 1, 2, -1, -4];
const threeSum = function (nums: number[]) {

  let ans: any[] = [];

  const numbs: number[] = nums.sort((a, b) => a - b); // 需要用执行函数来排序，直接用的的话负数排序错乱

  const len = numbs.length;

  // 数组特殊判断 null 或者长度小于3
  if (numbs === null || len < 3) return ans;

  // 遍历每一个数，假如这个数大于0 则不会有答案
  for (let i = 0; i < len; i++) {

    if (numbs[i] > 0) break; // 当前数字大于0 则结束循环

    if (i > 0 && numbs[i] === numbs[i - 1]) continue; // 跳过相同数据

    let L = i + 1;
    let R = len - 1;
    while (L < R) {

      let sum = numbs[i] + numbs[L] + numbs[R];

      if (sum === 0) {

        ans.push([numbs[i], numbs[L], numbs[R]]);
        
        // 去重
        while (L < R && numbs[L] === numbs[L + 1]) L++;
        while (R > L && numbs[R] === numbs[R - 1]) R--;
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return ans;
};

// console.log(threeSum(numbs))

// ans [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
