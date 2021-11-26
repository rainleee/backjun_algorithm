const input = +(require('fs').readFileSync('/dev/stdin') + '');
let output = '';
for (let i = input; i > 0; i--) {
  output += `${i}\n`;
}

console.log(output);
