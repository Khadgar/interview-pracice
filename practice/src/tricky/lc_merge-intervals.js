// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  const mergedIntervals = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  mergedIntervals.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const top = mergedIntervals[mergedIntervals.length - 1];
    if (top[1] >= intervals[i][0]) {
      const newInterval = [Math.min(top[0], intervals[i][0]), Math.max(top[1], intervals[i][1])];
      mergedIntervals.pop();
      mergedIntervals.push(newInterval);
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }

  return mergedIntervals;
};

const input_1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

//Output: [[1,6],[8,10],[15,18]]

const input_2 = [
  [1, 4],
  [4, 5],
];
//Output: [[1,5]]

const input_3 = [
  [1, 4],
  [5, 6],
];

const input_4 = [
  [1, 4],
  [2, 3],
];

console.log(merge(input_1));

console.log(merge(input_2));

console.log(merge(input_3));

console.log(merge(input_4));
