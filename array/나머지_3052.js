// https://www.acmicpc.net/problem/3052

const arr = (require('fs').readFileSync('/dev/stdin') + '')
  .split('\n')
  .map(Number);
let newArr = arr.map(num => num % 42);

const set = new Set(newArr);
newArr = [...set];
console.log(newArr.length);
