const db = require("../../data/dbConfig");

module.exports = {
    getContacts,
    addContact,
    getMessage,
    addMessage,
}

function getContacts() {
    return db('contacts');
}

async function addContact(contact){
    const [id] = await db('contacts')
    .insert(contact);

    return id;
}

function getMessage(contact_id){
    return db
    .select('message')
    .from('messages')
    .where({contact_id});
     
}

async function addMessage(message){
    const [id] = await db('messages')
    .insert(message);

    return id;
}


 