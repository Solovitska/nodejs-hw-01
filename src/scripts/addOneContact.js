import { PATH_DB, DB_DATA } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const updatedContacts = [...DB_DATA, createFakeContact()];
  fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
};

await addOneContact();
