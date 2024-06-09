import { DB_DATA } from '../constants/contacts.js';

export const countContacts = async () => {
    return DB_DATA.length;
};

console.log(await countContacts());
