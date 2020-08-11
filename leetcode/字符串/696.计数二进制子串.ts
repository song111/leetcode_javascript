/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

示例 1 :

输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起
*/

/**
 *  思路：按字符分组
 * 取相邻两字符最小个数为出现次数
 * 我们可以将字符串 ss 按照 00 和 11 的连续段分组，存在  counts 数组中，例如 s=00111011，可以得到这样的
 * counts 数组：{\rm counts} = \{2, 3, 1, 2\}counts={2,3,1,2}。
 * 这里 counts数组中两个相邻的数一定代表的是两种不同的字符。假设  counts 数组中两个相邻的数字为 uu 或者 vv，
 * 它们对应着 uu 个 00 和 vv 个 11，或者 uu 个 11 和 vv 个 00。
 * 它们能组成的满足条件的子串数目为 min{ u, v } min{u,v}，即一对相邻的数字对答案的贡献。
 * 我们只要遍历所有相邻的数对，求它们的贡献总和，即可得到答案。
 */

function countBinarySubstrings(s: string): number {
  if (s.length <= 1) return 0;
  let left = 1; // 直接从1开始
  const counts = [1];
  let ans = 0;

  while (left < s.length) {
    if (s[left] !== s[left - 1]) {
      counts.push(1);
    } else {
      counts[counts.length - 1]++;
    }
    left++;
  }

  if (counts.length === 1) return 0;
  let index = 1;
  while (index < counts.length) {
    ans += Math.min(counts[index - 1], counts[index]);
    index++;
  }

  return ans;
}

const s = "00111011";

countBinarySubstrings(s);
