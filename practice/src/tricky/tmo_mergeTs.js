var merge = function(listOfTs) {
  listOfTs = listOfTs.sort((a, b) => a.s - b.s);
  let result = [listOfTs[0]];
  for (let i = 0; i < listOfTs.length - 1; i++) {
    let curr = listOfTs[i];
    let next = listOfTs[i + 1];
    if (isOverLap(curr, next)) {
      result.push({ s: Math.min(curr.s, next.s), e: Math.max(curr.e, next.e) });
    }
    let top = result[result.length - 1];
    if (isOverLap(top, next)) {
      result.pop();
      result.push({ s: Math.min(top.s, next.s), e: Math.max(top.e, next.e) });
    } else {
      result.push(listOfTs[i]);
    }
  }
  return result;
};

// var merge = function(listOfTs) {
//   listOfTs = listOfTs.sort((a, b) => a.s - b.s);
//   let result = [];
//   result.push(listOfTs[0]);
//   for (let i = 1; i < listOfTs.length; i++) {
//     const top = result[result.length - 1];
//     if (top.e >= listOfTs[i].s) {
//       const newInterval = { s: Math.min(top.s, listOfTs[i].s), e: Math.max(top.e, listOfTs[i].e) };
//       result.pop();
//       result.push(newInterval);
//     } else {
//       result.push(listOfTs[i]);
//     }
//   }
//   return result;
// };

var isOverLap = function(a, b) {
  if (a.s <= b.s && a.e >= b.e) {
    return true;
  }
  return false;
};

console.log(
  merge([
    { s: 1, e: 5 },
    { s: 2, e: 5 },
    { s: 10, e: 20 },
    { s: 15, e: 20 },
    { s: 16, e: 20 },
  ]),
);
