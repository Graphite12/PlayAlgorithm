## 1. readline

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(line); //입력 값을 처리할 callback 내용 기제

  rl.close(); //callback 종료
}).on('close', function () {
  process.exit(); // 출력과 관련된 내용 기재 (console.log같은거..)
});
```

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on('line', (input) => {
  console.log(`Recived : ${input}`);
  count += 1;
  if (count === 3) {
    rl.close();
  }
  // 위의 경우 입력을 3번 받은 후 close한다
});
```

## 2. fs (fileSystem)

```js
const fs = require('fs');

// 문자 하나만 입력받을 경우
const input = require('fs').readFileSync('/dev/stdin').toString();

//문자가 숫자인 경우
const input = Number(require('fs').readFileSync('/dev/stdin').toString());

// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// input[0], input[1]이 숫자일떄
const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

// 줄바꿈으로 구분
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [a, ...b] = fs.readFileSync('/dev/stdin').toString().split('\n');
const [a, ...b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
// 만약 인풋값이 숫자라면
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

//만약 인풋값이 줄바뀐 숫자라면
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);
```
