const db = require("../../data/dbConfig");

module.exports = {
    getContacts,
    addContact,
    getMessage,
    addMessage,
    deleteContact,
}

function getContacts() {
    return db('contacts');
}

async function addContact(contact){
    const [id] = await db('contacts')
    .insert(contact);

    return id;
}

function deleteContact(id){
    return db('contacts')
    .where({ id })
    .del();
}

function getMessage(contact_id){
    return db
    .select('message')
    .from('messages')
    .where({contact_id});
     
}

async function addMessage(message){

    const [newUser] = await db('messages').insert(user, ["id"]);
    return id;
}