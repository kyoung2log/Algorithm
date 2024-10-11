function solution(my_string) {
  var answer = '';
  for (const i of my_string) {
    answer = i + answer;
  }
  return answer;
}

function solution(my_string) {
  var answer = [...my_string].reverse().join('');
  return answer;
}

function solution(my_string) {
  return my_string.split('').reverse().join('');
}
