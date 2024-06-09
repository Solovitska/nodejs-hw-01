import { DB_DATA } from '../constants/contacts.js';

export const getAllContacts = async () => {
    return DB_DATA;
};

console.log(await getAllContacts());
