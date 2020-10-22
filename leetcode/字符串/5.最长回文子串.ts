/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

*/

// 判断一个字符串是不是回文
// str = str.split("").reverse().join("");

const validPalindrome = (str: String): boolean => {
  return str === str.split("").reverse().join("");
};

// 方法一：暴力解法: 双循环遍历每一个数会导致测试超时
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome1 = function (s: string) {
  if (s.length === 1) return s;
  let maxPal = "";
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const str = s.slice(i, j);
      if (validPalindrome(str) && str.length > maxPal.length) {
        maxPal = str;
      } else {
        continue;
      }
    }
  }
  return maxPal;
};

// console.log(longestPalindrome1('abacdfgdcaba'))



// 动态规划
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome2 = function (s: string) {
  if (s.length <2) return s;
  let begin = 0;
  let maxLength = 2;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const str = s.slice(i, j); // 优化截取 转化为存储下标
      if (validPalindrome(str) && str.length > maxLength) {
        begin = i;
        maxLength = str.length;
      } else {
        continue;
      }
    }
  }
  return s.substring(begin, begin + maxLength);
};
