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
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
