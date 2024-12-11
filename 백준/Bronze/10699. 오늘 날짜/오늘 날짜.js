let date = new Date();
date = date.toLocaleDateString().split('/');

console.log(date[2] + '-' + date[0] + '-' + date[1]);
