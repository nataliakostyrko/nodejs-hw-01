import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';



export const removeAllContacts = async () => { 
      try {
    const contacts = await readContacts();
    contacts.length = 0;
    await writeContacts(contacts);
    console.log('All contacts removed successful');
  } catch (error) {
    console.error('Error to remove all contacts', error);
  }
};

removeAllContacts();
