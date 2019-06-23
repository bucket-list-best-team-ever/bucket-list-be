const db = require("../../data/dbConfig");

module.exports = {
    registerUser,
    loginUser,
    getUsers,
    getUserByEmail,
}

function registerUser(user) {
    return db('users').insert(user);
}

function loginUser(email) {
    return db('users')
    .where({email})
    .first();
}

function getUsers(){
    return db('users')
    .select('id', 'name', 'email', 'created');
}

function getUserByEmail(email){
    return db('users')
    .select('id', 'name', 'email', 'created')
    .where({ email })
    .first();
}
 