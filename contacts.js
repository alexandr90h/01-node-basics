const fs = require('fs/promises');
const path = require('path');
const url = require('url');

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
  await fs.writeFile(
    contactsPath,
    JSON.stringify(contactById),
    function (error) {
      if (error) throw error;
    },
  );
  console.table(contactById);
}

async function addContact(name, email, phone) {
  const result = await fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
  });
  const contacts = JSON.parse(result);
  let id = 11;
  const addContact = { id, name, email, phone };
  const newContacts = [...contacts, addContact];
  await fs.writeFile(
    contactsPath,
    JSON.stringify(newContacts),
    function (error) {
      if (error) throw error;
    },
  );
  console.table(newContacts);
}
module.exports = { listContacts, getContactById, removeContact, addContact };
