var fizzBuzz = function*(range, trigger) {
  for (let i = 0; i < range; i++) {
    let result = '';
    trigger.forEach(trigger => {
      if (trigger[1](i)) {
        result += trigger[0];
      }
    });
    yield result === '' ? i : result;
  }
};

const iterator = fizzBuzz(100, [
  ['Fizz', num => num % 3 === 0],
  ['Buzz', num => num % 5 === 0],
]);

console.log(...iterator);
