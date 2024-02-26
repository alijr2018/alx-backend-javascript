// 1-stdin.js

process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.once('data', (data) => {
  const input = data.trim();

  if (input !== '') {
    console.log(`Your name is: ${input}`);
  } else {
    console.log('Your name is: ');
  }

  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
