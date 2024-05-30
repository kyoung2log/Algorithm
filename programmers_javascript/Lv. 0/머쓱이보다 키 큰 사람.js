function solution(array, height) {
  array.sort();
  const arr = array.filter((item) => item > height);
  return arr.length;
}

function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

solution([1, 2, 3, 4], 2);
