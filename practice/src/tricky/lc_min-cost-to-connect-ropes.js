// https://leetcode.com/discuss/interview-question/344677

// Input: ropes = [8, 4, 6, 12]
// Output: 58
// Explanation: The optimal way to connect ropes is as follows
// 1. Connect the ropes of length 4 and 6 (cost is 10). Ropes after connecting: [8, 10, 12]
// 2. Connect the ropes of length 8 and 10 (cost is 18). Ropes after connecting: [18, 12]
// 3. Connect the ropes of length 18 and 12 (cost is 30).
// Total cost to connect the ropes is 10 + 18 + 30 = 58
/**
 * @param {number[]} ropes
 * @return {number}
 */
var minCostToConnectRopes = function(ropes) {
  let sortedArr = ropes.sort((a, b) => a - b);
  let sum = 0;
  while (sortedArr.length > 1) {
    let newRope = sortedArr.shift() + sortedArr.shift();
    sum += newRope;
    sortedArr.push(newRope);
    sortedArr = sortedArr.sort((a, b) => a - b);
  }
  return sum;
};

const ropes_1 = [8, 4, 6, 12];
console.log(minCostToConnectRopes(ropes_1)); //Output: 58

const ropes_2 = [20, 4, 8, 2];
console.log(minCostToConnectRopes(ropes_2)); //Output: 54

const ropes_3 = [1, 2, 5, 10, 35, 89];
console.log(minCostToConnectRopes(ropes_3)); //Output: 224

const ropes_4 = [2, 2, 3, 3];
console.log(minCostToConnectRopes(ropes_4)); //Output: 20
