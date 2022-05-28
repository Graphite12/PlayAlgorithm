# PlayAlgorithms

알고리즘과 자료구조 정리

# 나만의 알고리즘 공부법

[알고리즘 공부법](https://steady-coding.tistory.com/260)

해당 글이 정말 도움이 되었습니다.

한 문제를 어떻게 골똘히 풀어볼지 아무것도 모르는 상태에서 빈 머리로 무작정 도전한다는건 취업기간만 뒤로 늦출 뿐만 아니라 시간도 낭비되는 점은 정말 공감되는 뿐입니다.

그래서 저는 방향을 바꿨습니다.

우선 가장 먼저 답을 봅니다.

저는 아무것도 모르는 백지상태에서 시작하는 거랑 비슷하므로, 어떻게 구현하는지를 이해합니다.

그리고 기록합니다. 잊혀지지 않도록

마지막으로 다시 풀어봅니다. 생각으로만 코드를 작성하지 않고 수도코드를 작성합니다. 작성된 수도코드에서 정답을 찾아나가 그것을 바탕으로 코드로 구현합니다.

이것이 저의 전략입니다.

---

## 자동 push

shell script로 작성된 push 자동화입니다. 이렇게 git markdown 파일로 따로 md 확장자의 파일을 만들어서 저장하시는 분들은 복붙해서 사용하시면 됩니다.

[push 자동화](https://sup2is.github.io/2020/08/07/auto-commit-and-push-script.html)

```sh
!/bin/bash

logFile="./logs/push.log"
SourceDir="/Users/elitebook/SkillBlog/PlayAlgorithm"

  cd ${SourceDir}
       filePath=`git status -u -s | head -n 1`
       filePath=${filePath:3}

      if [ -z "$filePath" ]; then
        echo '##### file not found #####'
        exit
      fi

      cd $filePath
      filename=`ls -1 | head -1`
      commitMsg=`cat $filename | head -1`

      git add .
      git status
      git commit -m "${commitMsg:2}"
      git push

      echo '##### auto push end #####'
```
