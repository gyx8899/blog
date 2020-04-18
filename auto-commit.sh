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
    if [ ! $docs ]; then
      docs="$filename"
    else
      docs="$docs/$filename"
    fi
  else
    config="chore($filename): updated/added"
  fi

  if [ $docs != '' ]; then
    git commit -m "docs($docs): Updated/added; ${config}"
  else
    git commit -m "${config}"
  fi
  git push
done < <(git diff HEAD --name-status)
if ((!changes)); then
  echo "No changes."
fi
