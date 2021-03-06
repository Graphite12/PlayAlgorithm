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