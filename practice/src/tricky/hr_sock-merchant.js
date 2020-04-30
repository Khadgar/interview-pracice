// https://www.hackerrank.com/challenges/sock-merchant

var sockMerchant = function(n, ar) {
  const map = {};
  for (let i = 0; i < ar.length; i++) {
    if (map[ar[i]]) {
      map[ar[i]]++;
    } else {
      map[ar[i]] = 1;
    }
  }
  let counter = 0;
  for (let sock in map) {
    counter += Math.floor(map[sock] / 2);
  }
  console.log(map);
  return counter;
};
//
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4
