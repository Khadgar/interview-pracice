var countTriplets = function(arr, r) {
  const map = {};
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]].push(i);
    } else {
      map[arr[i]] = [i];
    }
  }

  for (let num in map) {
    let second = num * r;
    let third = num * r * r;
    if (map[second] && map[third]) {
      map[num].forEach(f => {
        map[second].forEach(s => {
          map[third].forEach(t => {
            ans.push([f, s, t]);
          });
        });
      });
    }
  }

  return ans.length;
};

console.log(countTriplets([1, 2, 2, 4], 2));
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
console.log(countTriplets([1, 5, 5, 25, 125], 5));
