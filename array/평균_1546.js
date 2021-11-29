const input = (require('fs').readFileSync('/dev/stdin') + '').split('\n');

const amount = +input[0];
const score = input[1].split(' ').map(Number);

const resultArr = score.sort((a, b) => b - a);
const m = resultArr[0];
const newScore = resultArr.map(score => (score / m) * 100);

let sum = 0;
newScore.map(score => (sum += score));

console.log(sum / amount);
