//https://www.acmicpc.net/problem/10871
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const totalCount = input[0].split(' ')[1];
const number = input[1].split(' ');
let output = '';

number.map(num => {
  output += +num < +totalCount ? `${num} ` : '';
});

console.log(output);
