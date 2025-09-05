import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    // const newContacts = Array.from({ length: number }, createFakeContact);
    // console.log(newContacts);
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
  } catch (err) {
    console.error('Error generating contacts:', err);
  }
};

generateContacts(5);
