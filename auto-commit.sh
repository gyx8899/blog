#!/usr/bin/env bash

node ./assets/scripts/add-timestamp.js file=.

git add .

if [[ ! -n $(git diff HEAD --stat) ]]; then
  exit
fi

docs=""
configs=""

let changes=0
while read status filepath; do
  let changes=1
  filename="${filepath##*/}"
  echo "$status | $filename"

  if [ ${filename: -3} == '.md' ]; then
    if [ "${filename}" != 'README.md' ]; then
      if [ ! $docs ]; then
        docs="$filename"
      else
        docs+="/$filename"
      fi
    fi
  else
    if [ "${filename}" != 'md-config.js' ]; then
      if [ ! $configs ]; then
        configs="$filename"
      else
        configs+="/$filename"
      fi
    fi
  fi

  newline=$'\n'
  commitmsg=""
  if [[ $docs != '' ]]; then
    commitmsg+="docs($docs): updated;"
    commitmsg+=$newline
  fi
  if [[ $configs != '' ]]; then
    commitmsg+="chore($configs): updated;"
  fi

  echo "$commitmsg"

  git commit -m "$commitmsg"
  git pull --rebase
  git push
done < <(git diff HEAD --name-status)

if ((!changes)); then
  echo "No changes."
fi
