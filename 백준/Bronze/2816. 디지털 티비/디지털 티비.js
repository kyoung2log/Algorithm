const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let channel = fs.readFileSync(path).toString().trim().split('\n');
let ans = '';
channel.shift();

ans += '1'.repeat(channel.indexOf('KBS1'));
ans += '4'.repeat(channel.indexOf('KBS1'));
channel = channel.filter((c) => c !== 'KBS1');
channel.unshift('KBS1');
ans += '1'.repeat(channel.indexOf('KBS2'));
ans += '4'.repeat(channel.indexOf('KBS2') - 1);

console.log(ans);
