// https://leetcode.com/problems/wildcard-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p === s || p === '*') {
    return true;
  }

  if (p === '' || s === '') {
    return false;
  }

  const d = Array(p.length + 1)
    .fill()
    .map(() => Array(s.length + 1).fill(false));

  d[0][0] = true;

  for (let pIdx = 1; pIdx < p.length + 1; pIdx++) {
    if (p[pIdx - 1] === '*') {
      let sIdx = 1;

      while (!d[pIdx - 1][sIdx - 1] && sIdx < s.length + 1) {
        sIdx++;
      }

      d[pIdx][sIdx - 1] = d[pIdx - 1][sIdx - 1];

      while (sIdx < s.length + 1) {
        d[pIdx][sIdx++] = true;
      }
    } else if (p[pIdx - 1] === '?') {
      for (let sIdx = 1; sIdx < s.length + 1; sIdx++) {
        d[pIdx][sIdx] = d[pIdx - 1][sIdx - 1];
      }
    } else {
      for (let sIdx = 1; sIdx < s.length + 1; sIdx++) {
        d[pIdx][sIdx] = d[pIdx - 1][sIdx - 1] && p[pIdx - 1] == s[sIdx - 1];
      }
    }
  }
  return d[p.length][s.length];
};

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.

// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
