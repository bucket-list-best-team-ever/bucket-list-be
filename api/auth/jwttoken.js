const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

function getToken(user){
    const payload = {
        user_id: user.email,
        password: user.password,
    };

    const options = {
        expiresIn: '30d',
    }

    return jwt.sign(payload, secrets.jwtSecret, options);
}

function verify(token){

    try {
        const results = jwt.verify(token, secrets.jwtSecret);
        return null;
    }
    catch (error){
        return error;
    }
}

module.exports = {getToken, verify};