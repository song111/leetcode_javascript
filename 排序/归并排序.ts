const arr: number[] = [4, 67, 23, 8, 53, 89, 23, 45, 68, 85];

// 先分解后合并
const resolve = function (arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex);
  return merge(resolve(left), resolve(right)); // 先用递归法把整个数组分成多个单个数字的数组
};

const merge = function (left: number[], right: number[]): number[] {
  const result = [];
  let li = 0;
  let ri = 0;

  // 归并两个数组
  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      result.push(left[li++]);
    } else {
      result.push(right[ri++]);
    }
  }

  while (li < left.length) {
    result.push(left[li++]);
  }
  while (ri < right.length) {
    result.push(right[ri++]);
  }

  return result;
};

console.log(resolve(arr));
export {}; // 避免全局模块冲突
