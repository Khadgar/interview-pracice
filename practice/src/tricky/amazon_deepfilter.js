var deepFilter = function (obj, filterFun) {
  let res = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      let innerObj = deepFilter(obj[key], filterFun);
      if (typeof innerObj === 'object' && Object.keys(innerObj).length !== 0) {
        res[key] = innerObj;
      }
    } else if (filterFun(obj[key])) {
      res[key] = obj[key];
    }
  });

  return res;
};

const solution = (arr) => {
  const set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] - 1) || set.has(arr[i] + 1)) {
      return true;
    }
  }
  return false;
};

const obj_1 = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const filter_1 = (n) => n >= 0;

//{ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }

const obj_2 = {
  a: 1,
  b: {
    c: 'Hello World',
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: 'Good Night Moon',
  },
};

const filter_2 = (s) => typeof s === 'string';

//{ b: { c: 'Hello World', h: 'Good Night Moon' } }

console.log(deepFilter(obj_1, filter_1));

console.log(deepFilter(obj_2, filter_2));
