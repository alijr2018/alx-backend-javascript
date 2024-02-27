// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(() => {
      console.log('This is the list of our students');
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      console.error(error.message);
      res.status(500).send('Internal Server Error\n');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
