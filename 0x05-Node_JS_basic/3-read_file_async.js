// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.trim().split('\n');

      let totalStudents = 0;
      let csStudents = 0;
      let sweStudents = 0;
      const csList = [];
      const sweList = [];

      rows.forEach((row) => {
        const [firstname, , , field] = row.split(',');

        if (field === 'CS') {
          csStudents += 1;
          csList.push(firstname);
        } else if (field === 'SWE') {
          sweStudents += 1;
          sweList.push(firstname);
        }

        totalStudents += 1;
      });

      console.log(`Number of students: ${totalStudents}`);
      console.log(`Number of students in CS: ${csStudents}. List: ${csList.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents}. List: ${sweList.join(', ')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
