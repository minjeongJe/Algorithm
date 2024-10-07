const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// 입력받은 값을 숫자로 변환
const A = parseInt(input[0]);
const B = parseInt(input[1]);

// A와 B를 곱한 결과를 출력
console.log(A * B);
