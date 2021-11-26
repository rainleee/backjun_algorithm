const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.map(val => {
  const splitVal = val.split(' ');
  splitVal[1] ? console.log(Number(splitVal[0]) + Number(splitVal[1])) : '';
});
