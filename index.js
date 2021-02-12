const yargs = require('yargs');
const { info, log } = require('./module');
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');
// import * as yargs from 'yargs';
// const { command } = yargs;
// import { hideBin } from 'yargs/helpers';
// import { fileURLToPath } from 'url';
// import * as fs from 'fs/promises';
// import path from 'path';
// import { listContacts } from './contacts.js';
// import {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } from './contacts.js';
// const fs = require('fs').promises;
// import { info, log } from './module.js';
const argv = require('yargs').argv;
console.log(argv);
// yargs.command({
//   command: 'list',
//   describe: 'add -----',
//   handler(argv) {
//     console.log(argv);
//   },
// });
// TODO: рефакторить
[action] = argv._;
console.log(action);
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log('-----------------------');
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

// listContacts();
// getContactById(2);
// removeContact(2);
// addContact(
//   'Bezvuglyak Alexandr',
//   'alexandr90h@getMaxListeners.com',
//   '(097) 152-0944',
// );

// fs.readFile('readme.txt')
//   .then(data => console.log(data.toString()))
//   .catch(err => console.log(err.message));
// yargs.parse();
