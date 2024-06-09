import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
      const contacts = await fs.readFile(PATH_DB, 'utf-8');
      console.log('Number of contacts:', contacts);
    } catch (error) {
      console.log('Error getting the number of contacts:', error);
   
    }
  };


console.log(await getAllContacts());
