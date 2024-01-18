'use strict';

function throwAway(numbers) {
  return numbers.filter(number => {
    if (number % 2 === 0) {
      return false;
    }

    return number;
  });
}
const myNumbers = [1, 2, 3, 4];
console.log(throwAway(myNumbers));

function doubleOddNumbers(numbers) {
  return numbers.map(number => number * 2);
}
const newNumbers = throwAway(myNumbers);
console.log(doubleOddNumbers(newNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
