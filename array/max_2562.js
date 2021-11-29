// https://www.acmicpc.net/problem/2562

const input = (require('fs').readFileSync('/dev/stdin') + '')
  .split('\n')
  .map(Number);
const arr = input;
const max = Math.max(...arr);
console.log(max, arr.indexOf(max) + 1);
