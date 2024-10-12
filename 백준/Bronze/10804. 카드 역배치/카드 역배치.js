const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cards = Array.from({ length: 20 }, (_, index) => index + 1);
const range = input.map((it) => it.split(' ').map((it) => parseInt(it)));

for (const [a, b] of range) {
  cards = [
    ...cards.slice(0, a - 1),
    ...cards.slice(a - 1, b).reverse(),
    ...cards.slice(b),
  ];
}

console.log(cards.join(' '));
