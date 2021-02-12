const fs = require('fs/promises');
const path = require('path');
// import path from 'path';
const url = require('url');

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const contactsPath = path.resolve(__dirname, 'db/contacts.json');

async function listContacts() {
  const result = await fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
  });
  const contacts = JSON.parse(result);
  console.table(contacts);
}

async function getContactById(contactId) {
  const result = await fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
  });
  const contacts = JSON.parse(result);
  const contactById = contacts.filter(({ id }) => id === contactId);
  console.table(contactById);
}

async function removeContact(contactId) {
  const result = await fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
  });
  const contacts = JSON.parse(result);
  const contactById = contacts.filter(({ id }) => id !== contactId);
  console.table(contactById);
}

async function addContact(name, email, phone) {
  const addContact = { name, email, phone };
  const result = await fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
  });
  const contacts = JSON.parse(result);
  console.table([...contacts, addContact]);
}
module.exports = { listContacts, getContactById, removeContact, addContact };
