// 1-stdin.js

process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const input = data.trim();

  if (input.toLowerCase() === 'exit') {
    console.log('This important software is now closing');
    process.exit(0);
  }

  if (input !== '') {
    console.log(`Your name is: ${input}`);
  } else {
    console.log('Your name is: ');
  }
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
