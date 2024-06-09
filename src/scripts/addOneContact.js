import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    currentContacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(currentContacts, null, 2), 'utf-8');
    console.log('Contact added successfully!');
  } catch (error) {
    console.error('Failed to add contact:', error);
  }
};

await addOneContact();
