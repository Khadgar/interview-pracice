var rotLeft = function(a, d) {
  for (let i = 0; i < d; i++) {
    let temp = a.shift();
    a.push(temp);
  }
  console.log(a.join(' '));
};

rotLeft([1, 2, 3, 4, 5], 1);
