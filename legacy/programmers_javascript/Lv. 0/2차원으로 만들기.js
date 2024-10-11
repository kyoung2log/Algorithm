function solution(num_list, n) {
  var answer = [];
  let list = [];
  let cnt = 0;

  for (const i of num_list) {
    list.push(i);
    cnt += 1;
    if (cnt === n) {
      answer.push(list);
      cnt = 0;
      list = [];
    }
  }
  return answer;
}

function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
