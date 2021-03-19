
function sumFibonacci(num, a = 0, b = 1) {
  if (a > num) return 0;
  if(num===1) return 1;
 if (a % 2 !== 0) return a + sumFibonacci(num, a + b, a);
  else return 0 + sumFibonacci(num, a + b, a);
  
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;


