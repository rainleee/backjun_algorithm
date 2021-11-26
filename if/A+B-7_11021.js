const i = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(1);
let index = 1;

i.map(value => {
  const resultValue = value.split(' ');
  console.log(`Case #${index}: ${+resultValue[0] + +resultValue[1]}`);
  index++;
});
