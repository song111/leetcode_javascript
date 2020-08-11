/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 

提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4

*/
import quickSort from '../../排序/快速排序';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums: number[], target: number): number {
  const sortNums = quickSort(nums); // 先排序，再利用双指针向中间便利
  const length = sortNums.length;
  let closest: number = sortNums[0] + sortNums[1] + sortNums[2];
  //   遍历数组
  for (let i = 0; i < length; i++) {
    let start: number = i + 1;
    let end: number = length - 1;
    while (start < end) {
      const sum = sortNums[start] + sortNums[end] + sortNums[i];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (target > sum) {
        start++;
        continue;   // 假如不是最优解就直接继续下一个
      } else if (target < sum) {
        end--;
        continue;
      } else return closest;
    }
  }

  return closest;
};

// 测试
const nums: number[] = [-1, 2, 1, -4];
const target: number = 1;
console.log(threeSumClosest(nums, target));

export {};
