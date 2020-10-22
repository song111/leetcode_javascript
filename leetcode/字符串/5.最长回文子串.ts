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

// 动态规划 ： 从两头向中间找
// 1.当i===j-1 表示长度为1是边界条件
// 2.从最大字符串的开始找最大回文不需要专门记录下来最大的
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome2 = function (s: string) {
  if (s.length < 2) return s;
  let db: boolean[][] = [[]];
  let begin = 0;
  let maxLength = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    db[i] = [];
    for (let j = i; j <= s.length; j++) {
      if (j - i === 0) db[i][j] = true;
      if (s[i] !== s[j]) {
        db[i][j] = false;
      } else {
        if (j - i < 3) {
          db[i][j] = true;
        } else {
          db[i][j] = db[i + 1][j - 1];
        }
      }

      if (db[i][j] && j - i + 1 > maxLength) {
        begin = i;
        maxLength = j - i ;
      }
    }
  }

  return s.slice(begin, maxLength + begin + 1);
};

console.log(longestPalindrome2("babad"));
