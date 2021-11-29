// https://www.acmicpc.net/problem/2577

const input = [150, 266, 427];

const [a, b, c] = input;
const multiplyNum = a * b * c + '';
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array(10).fill(0);

multiplyNum.split('').map(num => (arr[+num] += 1));
console.log(multiplyNum);
arr.map(val => console.log(val));
