function solution(numbers, direction) {
  if (direction === 'right') return [numbers.pop(), ...numbers];
  // const a = numbers.shift();
  return [...numbers, numbers.shift()];
}
