const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const ONE_HOUR_TO_MINUTES = 60;

const hour = parseInt(input[0]);
const minutes = parseInt(input[1]);

const minusMinutes = minutes - 45;
let resultHours = 0;
let resultMinutes = 0;

//-45를 한다
if (minusMinutes < 0) {
  //음수일 경우 이 음수를 양수 시간의 숫자를 -1하고, 분의 숫자 60에서 빼준다.
  resultHours = hour === 0 ? 23 : hour - 1;
  resultMinutes = ONE_HOUR_TO_MINUTES - Math.abs(minusMinutes);
} else {
  resultHours = hour;
  resultMinutes = minusMinutes;
}

console.log(`${resultHours} ${resultMinutes}`);
