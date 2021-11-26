//https://www.acmicpc.net/problem/10871
const input = ['10 5', '1 10 4 9 2 3 8 5 7 6'];
const totalCount = input[0].split(' ')[1];
const number = input[1].split(' ');
let output = '';

number.map(num => {
  output += +num < +totalCount ? `${num} ` : '';
});

console.log(output);
