/**
 * 题目类似与leetocde 3.无重复字符的最长子串
 * 题目： 给定一个字符串找出最大无重复字符串
 *
 * 思考：利用滑动窗口的思想来做，缓存最大的字符串
 * */

const s = "abcdabcdefef";

const lengthOfLongestSubstring = (s: string) => {
  let i = 0;
  let j = 1;
  let maxStr = s.slice(0, 1);  // 缓存最大长度子字符串
  let subStr = s.slice(0, 1); 
  let maxLen = 1;  //  缓存最大长度

  // 遍历字符串
  while (j < s.length) {
    // 假如s[j]存在当前最大自字符串则i切换到第一个s[j] 的位置，然后从第一个字符s[j]截取到第二个s[j] 字符
    if (subStr.includes(s[j])) {
      const index = subStr.indexOf(s[j]) + 1; // 截取开始位置
      subStr = subStr.slice(index);
      i = index + i;
      subStr += s[j]; // 增加s[j]
    } else {
      // 假如不包含则先加进来
      subStr += s[j]; 
      if (maxLen < subStr.length) {
        maxStr = subStr;
        maxLen = subStr.length;
      }
    }

    j++;
  }

  return maxStr;
};

console.log(lengthOfLongestSubstring("abcabcdbb"));

export {}  // 忽略代码，为了解决ts 中重复变量问题