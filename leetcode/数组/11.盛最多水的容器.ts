// 思考： 双指针 动态规划

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height: number[]) {
  let maxarea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const leftH = height[l];
    const rightH = height[r];
    maxarea = Math.max(maxarea, Math.min(leftH, rightH) * (r - l));
    if (leftH < rightH) l++;
    else r--;
  }
  return maxarea;
};

// 测试 : [1,8,6,2,5,4,8,3,7]  => 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
