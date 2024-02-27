// utils.js

import { promises as fsPromises } from 'fs';

export const readDatabase = async (filePath) => {
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    return data;
  } catch (error) {
    throw new Error(`Cannot read database: ${error.message}`);
  }
};

export default readDatabase;
