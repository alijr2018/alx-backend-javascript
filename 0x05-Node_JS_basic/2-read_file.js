// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').filter(Boolean);

    if (data.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    for (const line of data) {
      const [firstName, lastName, field] = line.split(',');

      if (firstName && lastName && field) {
        totalStudents += 1;

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(firstName);
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      const count = students[field].length;
      const list = students[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
