const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

let output = '';
input.map(val => {
  const splitVal = val.split(' ');
  output += +splitVal[0] + +splitVal[1] + '\n';
});

console.log(output);
