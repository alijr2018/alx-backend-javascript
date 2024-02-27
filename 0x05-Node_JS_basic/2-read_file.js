// 2-read_file.js

const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = [];
    const fields = {};

    if (!data) {
      throw new Error('Cannot load the database');
    }

    const parseOptions = {
      skipLines: 1,
      mapHeaders: ({ header }) => header.trim(),
    };

    fs.createReadStream(path)
      .pipe(csv(parseOptions))
      .on('data', (row) => {
        students.push(row);
        for (const field in row) {
          if (Object.prototype.hasOwnProperty.call(row, field)) {
            if (!fields[field]) {
              fields[field] = [];
            }
            if (row[field].trim() !== '') {
              fields[field].push(row[field].trim());
            }
          }
        }
      })
      .on('end', () => {
        const numberOfStudents = students.length;

        console.log(`Number of students: ${numberOfStudents}`);

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const count = fields[field].length;
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          }
        }
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
