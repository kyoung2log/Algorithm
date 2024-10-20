const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path, 'utf-8').trim().split('\n');
const users = new Map();

for (const input of inputs) {
  const [age, name] = input.split(' ');

  users.set(age, [...(users.get(age) ?? []), name]);
}

for (let i = 1; i <= 200; i++) {
  const user = users.get(i.toString());

  if (!user) continue;
  for (const u of user) {
    console.log(i, u);
  }
}
