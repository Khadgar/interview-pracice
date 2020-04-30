var minimumSwaps = function(arr) {
  const obj = {};
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    // The key will be the number and the value will be its position
    obj[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    // Expected number at this spot
    let expectedNumber = i + 1;
    // What it actually is
    let actualNumber = arr[i];
    if (actualNumber !== expectedNumber) {
      // Find actual location of the expected number
      let whereToMove = obj[expectedNumber];
      // Update current spot to the expected number
      arr[i] = expectedNumber;
      // Update location of expectedNumber in the object
      obj[expectedNumber] = i;
      // Move actualNumber to where expectedNumber was
      arr[whereToMove] = actualNumber;
      // Update location of actualNumber in the object
      obj[actualNumber] = whereToMove;
      // Increment swaps
      swaps++;
    }
  }
  return swaps;
};

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); //5
console.log(minimumSwaps([4, 3, 1, 2])); // 3
console.log(minimumSwaps([2, 3, 4, 1, 5])); // 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); //3
