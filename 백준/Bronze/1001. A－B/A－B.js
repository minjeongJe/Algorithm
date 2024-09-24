// 입력 받기
process.stdin.on('data', (data) => {
  const input = data.toString().split(' ');
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);

  // 결과 출력
  console.log(A - B);

  process.exit(); // 입력 후 프로그램 종료
});
