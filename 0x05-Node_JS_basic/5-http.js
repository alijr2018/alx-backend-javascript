// 5-http.js

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        res.end('This is the list of our students');
      })
      .catch((error) => {
        res.end(`${error.message}\n`);
      });
  } else {
    res.writeHead(404);
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
