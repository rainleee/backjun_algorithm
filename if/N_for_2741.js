const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let output = '';

for (let i = 1; i <= +input; i++) {
  output += `${i}\n`;
}

console.log(output);
