const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim();

const alphabets = Array(26).fill(0);

for (const input of inputs) {
  const alphabet = input.charCodeAt() - 65;
  alphabets[alphabet] += 1;
}

function getPalindrome(string) {
  let ans = '';

  // inputs 값이 짝수일 경우
  if (string.length % 2 === 0) {
    for (let i = 0; i < 26; i++) {
      if (alphabets[i] % 2 === 1) return null;

      const alphabet = String.fromCharCode(i + 65).repeat(alphabets[i] / 2);
      ans += alphabet;
    }

    return ans + ans.split('').reverse().join('');
  }

  // inputs 값이 홀수일 경우
  let centerAlphabetIdx = -1;

  for (let i = 0; i < 26; i++) {
    if (alphabets[i] % 2 === 1) {
      if (centerAlphabetIdx !== -1) return null;
      centerAlphabetIdx = i;
    }

    const alphabet = String.fromCharCode(i + 65).repeat(alphabets[i] / 2);
    ans += alphabet;
  }
  const centerAlphabet = String.fromCharCode(centerAlphabetIdx + 65);
  return ans + centerAlphabet + ans.split('').reverse().join('');
}

const ans = getPalindrome(inputs);

console.log(ans ?? `I'm Sorry Hansoo`);
