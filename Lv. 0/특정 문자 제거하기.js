function solution(my_string, letter) {
  const removedLetterString = [...my_string].filter((item) => item != letter);
  return removedLetterString.join('');
}

function solution(my_string, letter) {
  const answer = my_string.split(letter).join('');
  return answer;
}
