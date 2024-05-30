function solution(numbers, direction) {
  if (direction === 'right') return [numbers.pop(), ...numbers];
  const number = numbers.shift();
  return [...numbers, number];
}
