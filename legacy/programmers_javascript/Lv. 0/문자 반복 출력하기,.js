function solution(my_string, n) {
  var answer = '';

  for (const str of my_string) {
    answer += str.repeat(n);
  }

  return answer;
}

function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join('');
  console.log(answer);
  return answer;
}
