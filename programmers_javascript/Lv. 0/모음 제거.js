function solution(my_string) {
  return [...my_string]
    .filter((item) => !['a', 'e', 'i', 'o', 'u'].includes(item))
    .join('');
}

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
