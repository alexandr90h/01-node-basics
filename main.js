import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';
import path from 'path';

// import { listContacts } from './contacts.js';
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';
// const fs = require('fs').promises;
import { info, log } from './module.js';
// import { getMaxListeners } from 'process';
// const { info, log } = require('./module');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

info('-----');
listContacts();
log('-----');
getContactById(2);
removeContact(2);
addContact(
  'Bezvuglyak Alexandr',
  'alexandr90h@getMaxListeners.com',
  '(097) 152-0944',
);

// fs.readFile('readme.txt')
//   .then(data => console.log(data.toString()))
//   .catch(err => console.log(err.message));
