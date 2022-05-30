let d = `3
29
38
12
57
74
40
85
61`;

let input = d.toString().split('\n').map(Number);

let bigMaMa = Math.max(...input);
let count = 1;
//가장 큰수 담아줌.
while (true) {
  //무지성 카운트 UP
  count++;
  //만약 input[count]랑 큰수가 일치한다면
  if (bigMaMa === input[count]) {
    console.log(bigMaMa + '\n' + count);
    break;
  }
}
