// https://leetcode.com/discuss/interview-experience/423786/Creditkarma-or-Front-end-engineer-or-NC-or-Phone-interview

//Write a program that outputs the string representation of numbers from 1 to 100.
var representNumber = function(number) {
  const dict = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const dict2 = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
    10: 'hundred',
  };
  if (number % 7 === 0 && number % 5 === 0) {
    return 'Creditkarma';
  }
  if (number % 7 === 0) {
    return 'Credit';
  }
  if (number % 5 === 0) {
    return 'Karma';
  }
  if (number >= 0 && number <= 100) {
    if (number <= 19) {
      return dict[number];
    }
    return dict2[Math.floor(number / 10)] + (dict[number % 10] ? dict[number % 10] : '');
  }
};
console.log(representNumber(1));
console.log(representNumber(2));
console.log(representNumber(11));
console.log(representNumber(13));
console.log(representNumber(19));
console.log(representNumber(21));
console.log(representNumber(23));
console.log(representNumber(34));
console.log(representNumber(28));
console.log(representNumber(55));
console.log(representNumber(99));
console.log(representNumber(100));
console.log(representNumber(70));
console.log(representNumber(101));
/**
 * @param {string[][]} flights
 * @return {string[]}
 */
var constructTrip = function(flights) {
  const from = {};
  for (let i = 0; i < flights.length; i++) {
    from[flights[i][0]] = flights[i][1];
  }
  const startLoc = Object.keys(from).filter(f => !Object.values(from).includes(f))[0];
  const trip = [startLoc];
  for (let i = 0; i < flights.length; i++) {
    trip.push(from[trip[trip.length - 1]]);
  }
  return trip;
};

console.log(
  constructTrip([
    ['SFO', 'DFW'],
    ['LAX', 'SFO'],
    ['DFW', 'CLT'],
  ]),
); //TRIP: ['LAX', 'SFO', 'DFW', 'CLT']

console.log(
  constructTrip([
    ['DFW', 'CLT'],
    ['SFO', 'DFW'],
    ['WAS', 'NYK'],
    ['LAX', 'SFO'],
    ['CLT', 'WAS'],
  ]),
); //TRIP: ['LAX', 'SFO', 'DFW', 'CLT', 'WAS', 'NYK']
