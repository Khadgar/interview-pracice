var findGrantsCap = function(grantsArray, newBudget) {
  let length = grantsArray.length;
  let cap = newBudget / length;
  let sortedList = grantsArray.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    if (sortedList[i] < cap) {
      newBudget -= sortedList[i];
      cap = newBudget / (length - i - 1);
    } else {
      return cap;
    }
  }
  return cap;
};

console.log(findGrantsCap([2, 100, 50, 120, 1000], 190)); //47
console.log(findGrantsCap([2, 4], 3)); //1.5
console.log(findGrantsCap([2, 4, 6], 3)); //1
console.log(findGrantsCap([2, 100, 50, 120, 167], 400)); //116
console.log(findGrantsCap([2, 100, 50, 120, 1000], 190)); //47
console.log(findGrantsCap([21, 100, 50, 120, 130, 110], 140)); //23.8
console.log(findGrantsCap([210, 200, 150, 193, 130, 110, 209, 342, 117], 1530)); //204.6
