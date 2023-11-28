const win = {
  2: '0',
  0: '5',
  5: '2',
};

function solution(rsp) {
  var answer = '';
  for (const i in rsp) {
    answer += win[rsp[i]];
  }

  return answer;
}

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}
