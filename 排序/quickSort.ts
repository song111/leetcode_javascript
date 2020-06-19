// const arr: number[] = [4, 67, 23, 8, 53, 89, 23, 45, 68, 85];

const quickSort = function (arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr.splice(middleIndex, 1)[0];
  const left = [];
  const right = [];
  for (let val of arr) {
    if (val > middleValue) {
      right.push(val);
    } else {
      left.push(val);
    }
  }
  return quickSort(left).concat(middleValue, quickSort(right));
};

// console.log(quickSort(arr));

export default quickSort; // 避免全局模块冲突
