const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input = line.split(' ');
    readline.close();
  })
  .on('close', () => {
    solutiuon(input);
    process.exit();
  });

function solutiuon(input) {
  const year = parseInt(input);

  if (year % 400 === 0) console.log(1);
  else if (year % 100 !== 0 && year % 4 === 0) console.log(1);
  else console.log(0);
}
