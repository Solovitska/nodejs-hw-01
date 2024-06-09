import { PATH_DB, DB_DATA } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  if (typeof number === 'number' && number > 0) {
    try {
      const contacts = [...DB_DATA];
      for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
      }
      fs.writeFile(PATH_DB, JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  }
};

await generateContacts(5);
