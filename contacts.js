import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.resolve(__dirname, 'db/contacts.json');

export async function listContacts() {
  const result = await fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
  });
  const contacts = JSON.parse(result);
  console.table(contacts);
}

export async function getContactById(contactId) {
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

export async function removeContact(contactId) {
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

export async function addContact(name, email, phone) {
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
// module.exports = listContacts;
