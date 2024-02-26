// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.once('data', (chunk) => {
  const name = chunk.toString().trim();

  if (name.toLowerCase() === 'exit') {
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
  }

  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
});

process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
