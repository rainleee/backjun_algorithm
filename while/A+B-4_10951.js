//https://www.acmicpc.net/problem/10951
const input = ['1 1', '2 3', '3 4', '9 8', '5 2'];
input.map(arr => {
  const [a, b] = arr.split(' ');
  console.log(+a + +b);
});
