/* 평균은 넘겠지 */

let s = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;

let [allCase, ...targetNum] = s.toString().trim().split('\n');

for (let i = 0; i < Number(allCase); i++) {
  //각각의 점수
  let scores = targetNum[i].split(' ').map(Number);
  // 학생 수
  let userCnt = scores[0];

  let sum = 0;
  let winner = 0;

  for (let c = 1; c <= userCnt; c++) {
    sum += scores[c];
  }

  // 평균
  const avg = sum / userCnt;

  //평균 초과 유저수
  for (let f = 1; f <= userCnt; f++) {
    if (scores[f] > avg) {
      winner++;
    }
  }

  //평균을 넘는 학생들
  let avgUsers = (winner / userCnt) * 100;
  console.log(avgUsers.toFixed(3) + '%');
}
