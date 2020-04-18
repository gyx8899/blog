#!/usr/bin/env bash

node ./assets/scripts/add-timestamp.js file=.

git add .

if [[ ! -n $(git diff HEAD --stat) ]]; then
  exit
fi

docs=""
config=""
let changes=0
while read status filename; do
  let changes=1
  echo "$status | $filename"

  if [ ${filename: -3} == '.md' ]; then
    echo "111"
    if [ ! $docs ]; then
      echo "222"
      docs="$filename"
    else
      echo "333"
      docs="$docs/$filename"
    fi
  else
    echo "444"
    config="chore($filename): updated/added"
  fi
  echo "555"
  if [ $docs != '' ]; then
    echo "666"
    git commit -m "Docs($docs): Updated/added;\n${config}"
  else
    echo "777"
    git commit -m "${config}"
  fi
  echo "888"
  git push
done < <(git diff HEAD --name-status)
if ((!changes)); then
  echo "No changes."
fi
