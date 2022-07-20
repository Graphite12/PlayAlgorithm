// 어떤 수 N이 주어지면 1부터 N까지 등차수열을 구해야함

// 1부터 N까지 반복되는 숫자의 등차수열을 구한다.
// 반복되는 숫자의 자릿수를 각 항으로
// 예제 1번을 보면 110인데 99개가 답으로 나와있다.
// 즉, 100~110까지는 각 항의 차가 일정하지 않으므로 등차수열이 성립되지않음
// 첫번째나 두번째 자리수 까지는 인정되는걸로 보아 세번째 자리수만 등차수열이 적용됨.

// n이 100미만일때는 99개까지 카운트가된다.

function hansu(n) {
  let sNum = String(n);

  if (sNum.length <= 2) {
    return true;
  }

  let originDiff = Number(sNum[1]) - Number(sNum[0]);
  let bNum = Number(sNum[1]);

  for (let j = 2; j < sNum.length; j++) {
    if (sNum[j] - bNum !== originDiff) {
      return false;
    }
  }
  return true;
}

function oneNum(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (hansu(i)) {
      count++;
    }
  }

  console.log(count);
}

oneNum(110);
