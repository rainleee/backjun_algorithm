// https://www.acmicpc.net/problem/10818

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(1)[0]
  .split(' ');
const numbers = input.map(Number);
numbers.sort((a, b) => a - b);
console.log(`${numbers[0]} ${numbers[numbers.length - 1]}`);
