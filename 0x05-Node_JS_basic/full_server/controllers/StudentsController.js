// StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('path/to/database.csv');

      res.status(200).send('This is the list of our students\n');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      const data = await readDatabase('path/to/database.csv');

      res.status(200).send(`List: LIST_OF_FIRSTNAMES_IN_THE_${major}_FIELD\n`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
