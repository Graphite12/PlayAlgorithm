# !/bin/bash

single = "
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
"

duoInput = "const input = fs.readFileSync('/dev/stdin').toString().split(' ')"

lineInput = "const input = fs.readFileSync('/dev/stdin').toString().split('\n');"

numInput = "const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((n) => Number(n));"