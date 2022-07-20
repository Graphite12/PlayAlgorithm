//생성자가 없는 숫자를 구해야한다.
// 1, 3,5,7,8,9 같은것들

// 생성자가 있는것과 없는것을 구해야함.

//d(n)은 자리수를 더해야하는 함수임.
// 결국 d(n)은 생성자가 있는 숫자를 반환할 수 밖에 없음.
// d(n)을 통해 생성자 보유숫자와 아닌 숫자를 구분예정
function d(n) {
  let sum = 0;
  let numb = n;

  for (let i = 0; i < String(n).length; i++) {
    sum += numb % 10;
    numb = Math.floor(numb / 10);
  }
  // console.log(Math.floor(39 / 10));
  // console.log(39 % 10);
  return sum + n;
}

function selfNums(n) {
  //range 까지 true로 초기화
  const selfnumber = new Array(n).fill(true);

  for (let i = 0; i < n; i++) {
    let idx = d(i);
    selfnumber[idx] = false;
  }

  for (let i = 0; i < n; i++) {
    if (selfnumber[i]) {
      console.log(i);
    }
  }
}

selfNums(10000);
