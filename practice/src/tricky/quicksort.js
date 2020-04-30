var quickSort = function(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index + 1, right);
    }
  }
  return array;
};

var partition = function(array, left, right) {
  let pivot = array[Math.floor((right - left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
};

var swap = function(array, leftIndex, rightIndex) {
  numofswap++;
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
};

const arr = [5, 3, 7, 6, 2, 9];
let numofswap = 0;
console.log(quickSort(arr, 0, arr.length - 1));

console.log(arr, numofswap);
