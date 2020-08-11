/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

// 思考：利用窗口滑动的方式来进行测试查找最大子字符串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string) {
  if (s.length === 0) return 0;
  const length = s.length;
  let subStr = s[0];
  let subMaxLength = 1;
  let i = 0;
  let j = 1;
  while (j < length) {
    if (subStr.includes(s[j])) {
      // 假如现有的子字符串包含下一个字符则重新从当前字符开始
      const index = subStr.indexOf(s[j]) + 1; // 需要截取的位置
      subStr = subStr.slice(index);
      i = i + index;
    } else {
      // 假如不包含则加进来
      subMaxLength = Math.max(subMaxLength, j + 1 - i);
    }
    subStr += s[j];
    j++;
  }

  return subMaxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("dvdf"));


export {}  // 忽略代码，为了解决ts 中重复变量问题