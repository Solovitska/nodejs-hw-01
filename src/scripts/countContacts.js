import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const countContacts = async () => {
    try {
      const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
      console.log('Number of contacts:', contacts.length);
    } catch (error) {
      console.log('Error getting the number of contacts:', error);
    }
  };


console.log(await countContacts());
