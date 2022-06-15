let s = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;
let [q, ...z] = s.toString().trim().split('\n');

let len = +q;
console.log(z);
for (let i = 0; i < len; i++) {
  let count = 1;
  let sum = 0;
  for (let j = 0; j < z[i].length; j++) {
    if (z[i][j] === 'O') {
      sum += count;
    }
  }

  console.log(count);
}
