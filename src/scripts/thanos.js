import { PATH_DB, DB_DATA } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    const updatedContacts = DB_DATA.filter(() => Math.random() < 0.5);
    fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  };


await thanos();
