import path from 'node:path';
import fs from 'node:fs/promises';

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
const dbJson = await fs.readFile(PATH_DB, 'utf8');
export const DB_DATA = JSON.parse(dbJson);
