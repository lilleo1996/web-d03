function findNumberPairSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right --;
    } else {
      left ++;
    }
  }
}

console.log(findNumberPairSumZero([-3, -2, -1, 0, 1, 4]))