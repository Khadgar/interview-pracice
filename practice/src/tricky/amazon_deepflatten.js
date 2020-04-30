var deepFlatten = function(arr, result) {
  arr.forEach(el => {
    if (Array.isArray(el)) {
      deepFlatten(el, result);
    } else {
      result.push(el);
    }
  });

  return result;
};

console.log(deepFlatten([1, [2, 3], [[4]]], []));
