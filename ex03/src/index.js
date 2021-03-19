var count = 0;
function rangeOfNumbers(startN, endN) {
  if (endN < startN && count == 0)
    return "The starting number will always be less than or equal to the ending number";

  if (endN < startN) {
    count = 0;
    return [];
  } else {
    count++;
    var arr = rangeOfNumbers(startN + 1, endN);
    arr.unshift(startN);
    return arr;
  }
}

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
