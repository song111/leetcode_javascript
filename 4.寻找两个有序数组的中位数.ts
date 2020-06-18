/**
            题目：给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
            请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
            你可以假设 nums1 和 nums2 不会同时为空。m
            */

// 思考：利用二分法逐步向最接近的两个数组的中位数靠近，每次淘汰一半分

const nums1 = [1, 3, 8, 10, 24];
const nums2 = [4, 6, 13, 17, 20, 22];

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
  let m = Math.ceil(nums1.length / 2);
  let n = Math.ceil(nums2.length / 2);

  //   while (nums1.length > m >= 1 && nums2.length > n >= 1) {
  //     const mc = nums1[m];
  //     const nc = nums2[n];
  //     debugger;
  //     if (mc <= nc) {
  //       m =
  //         Math.ceil(m + m / 2) >= nums1.length
  //           ? nums1.length - 1
  //           : Math.ceil(m + m / 2);
  //     } else {
  //       n =
  //         Math.floor(n - n / 2) >= nums2.length
  //           ? nums2.length - 1
  //           : Math.floor(n - n / 2);
  //     }
  //   }

  console.log(m, n);
};

findMedianSortedArrays(nums1, nums2);
