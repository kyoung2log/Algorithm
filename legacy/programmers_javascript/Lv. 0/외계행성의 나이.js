function solution(age) {
  const ageStr = age.toString();
  let answer = '';
  for (const i of ageStr) {
    answer += String.fromCharCode(Number(i) + 97);
  }

  return answer;
}

function solution(age) {
  return age
    .toString()
    .split('')
    .map((v) => 'abcdefghij'[v])
    .join('');
}
