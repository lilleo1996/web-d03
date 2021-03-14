function checkSameArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let number of arr1) {
    frequencyCounter1[number] = (frequencyCounter1[number] || 0)  + 1;
  }

  for (let number of arr2) { 
    frequencyCounter2[number] =  (frequencyCounter2[number] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(checkSameArray([1,2,3,3], [1,9,4,4]));
console.log(checkSameArray([1,3,3], [9,1,9]))