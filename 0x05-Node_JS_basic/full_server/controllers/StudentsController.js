// StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('./database.csv');

      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }

    return res.status(500).send('Unexpected error occurred');
  }
}

export default StudentsController;
