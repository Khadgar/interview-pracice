// sum without using the + operator
function getSum(a, b) {
  /*
      Keep adding until we have no carry left
    */
  while (b != 0) {
    /*
        Take note of what positions will need a carry, we will left shift
        this below and make b hold it. Remember: a carry is not applied
        where it is discovered...it is applied 1 position to the left of
        where it was born
      */
    let carry = a & b;

    /*
        a's job is to keep the sum we are going to be working on, '^' does
        bit addition, see explanation below to fully understand this
      */
    a = a ^ b;

    /*
        b will house the carry from the operation, we left
        shift by 1 because in the next iteration we will add
        against the carry
      */
    b = carry << 1;
  }

  /*
      Return a, it was used to house the running sum we were working on the whole time
    */
  return a;
}

//Babylonian method for square root
function sqrt(num) {
  /*We are using n itself as initial approximation 
          This can definitely be improved */
  let x = num;
  let y = 1;
  let e = 0.000001; /* e decides the accuracy level*/
  while (x - y > e) {
    x = (x + y) / 2;
    y = num / x;
  }
  return x;
}

function reverseNumer(num) {
  let result = "";
  let remaining = Math.abs(num);

  while (remaining !== 0) {
    result += remaining % 10; //last digit
    remaining = Math.floor(remaining / 10); //remove last digit
  }
  return num < 0 ? -1 * Number(result) : Number(result);
}

console.log(getSum(3, 4));
console.log(sqrt(4.123123));
console.log(reverseNumer(-123));
