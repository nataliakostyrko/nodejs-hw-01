import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => { 
     try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log('Contacts added successful');
  } catch (error) {
    console.error('Failed to read contacts from file', error);
  }
};

generateContacts(5);
