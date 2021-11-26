//https://www.acmicpc.net/problem/10952

const input = ['1 1', '2 3', '3 4', '9 8', '5 2', '0 0'];

let num = input.slice(0, -1).length;
let i = 0;
// console.log(num);

while (num > 0) {
  let arr = input[i].split(' ');
  console.log(+arr[0] + +arr[1]);
  num--;
  i++;
}
