/**
 * 给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。

示例：
输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"

提示：
如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。
 * 
*/

/** 思路：
 * 为目标字符串生成一个map保存目标字符串的值和出现次数，然后在用滑动窗口的方式每次循环去获取子串然后生成一个子串的map，
 * 和目标字符串的map进行对比，假如匹配就记录下长度符合最小长度就更新输出值，
 *
 * 滑动窗口逻辑
 * 如果当前没有覆盖就继续移动右指针
 * 假如已经覆盖，则记录下窗口字符串，继续移动左指针缩小窗口大小进行再次比较
 *
 * 边界条件
 * 左指针要小与 source.length -target.length
 * 右指针要小于source.length
 *
 */

interface mapInterface {
  [key: string]: number;
}

// 第一版代码

//   // 生成map
//   function createMap(value: string): mapInterface {
//     const map: mapInterface = {};
//     value.split("").forEach((item) => {
//       if (Reflect.has(map, item)) {
//         map[item] += 1;
//       } else {
//         map[item] = 1;
//       }
//     });
//     return map;
//   }
  
//   // 匹配map
//   function matchMap(sMap: mapInterface, tMap: mapInterface): boolean {
//     return Object.keys(tMap).every((key) => {
//       if (sMap[key] >= tMap[key]) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }
  
//   function minWindow(s: string, t: string): string {
//     // 初始化缓存
//     let minLen = 0; // 缓存最小长度
//     let tMap = createMap(t); //构建tmap
//     let left = 0;
//     let right = t.length;
//     let subStr = "";
//     let minStr = "";
  
//     while (left < s.length - t.length || right <= s.length) {
//       subStr = s.slice(left, right);
//       const sMap = createMap(subStr);
  
//       // 当匹配上
//       if (matchMap(sMap, tMap)) {
//         //   更新初始最小长度
//         if (!minLen || minLen > subStr.length) {
//           minStr = subStr;
//           minLen = subStr.length;
//         }
//         left++;
//       } else {
//         right++;
//       }
//     }
  
//     return minStr;
//   }


// 第二版代码

// 生成map
function createMap(map: mapInterface, value: string = ""): mapInterface {  // value 为undefined 情况的问题
  value.split("").forEach((item) => {
    if (Reflect.has(map, item)) {
      map[item] += 1;
    } else {
      map[item] = 1;
    }
  });
  return map;
}

// 匹配map
function matchMap(sMap: mapInterface, tMap: mapInterface): boolean {
  return Object.keys(tMap).every((key) => {
    if (Reflect.has(sMap, key) && sMap[key] >= tMap[key]) {
      return true;
    } else {
      return false;
    }
  });
}

function minWindow(s: string, t: string): string {
  // 初始化缓存
  let minLen = 0; // 缓存最小长度
  let tMap = createMap({}, t); //构建tmap
  let left = 0;
  let right = t.length;
  let subStr = s.slice(left, right);
  let sMap = createMap({}, subStr);
  let minStr = "";

  while (left <= s.length - t.length && right <= s.length) {   //需要考虑到当s的长度和t 一样是左指针的边界问题
    // 注意 字符串 slice截取不包含endIndex字符
    subStr = s.slice(left, right);
    // 当匹配上
    if (matchMap(sMap, tMap)) {
      //   更新初始最小长度
      if (!minLen || minLen > subStr.length) {
        minStr = subStr;
        minLen = subStr.length;
      }
      sMap[s[left]]--;
      left++;
    } else {
      sMap = createMap(sMap, s[right]);  // 当左指针<= 0 的时候需要考虑到 s[right] 会是空字符串的情况
      right++;
    }
  }

  return minStr;
}

const S = "ADOBECODEBANC";
const T = "ABC";
console.log(minWindow(S, T));
console.log(minWindow("a", "a"));
