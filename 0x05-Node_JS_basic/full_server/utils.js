// utils.js

import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return processedData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
