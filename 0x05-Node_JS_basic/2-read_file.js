// 2-read_file.js

const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
      throw new Error('Cannot load the database');
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
    const fileLines = fileContent.split('\n');

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [propName,
        studentPropValues[idx]]);
      const studentObject = Object.fromEntries(studentEntries);
      studentGroups[field].push(studentObject);
    }

    const totalStudents = Object.values(studentGroups).reduce((acc, cur) => acc + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    console.error(error.message);
    throw error; // Re-throw the error for better error propagation
  }
};

module.exports = countStudents;
