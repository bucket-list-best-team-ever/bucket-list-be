const userDb = require("../models/authmodel");
const express = require('express');

const router = express.Router(); 

router.get('/users', (req, res) => {
    userDb.getUsers()
    .then(response => {
        if (response.length > 0)
            res.status(200).json({users: response});
        else
            res.status(404).json({ message: "Not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.get('/user', (req, res) => {
  
    userDb.getUserByEmail(req.user.email)
    .then(response => {
        if (response)
            res.status(200).json({name: response.name, email: response.email});
        else
            res.status(404).json({ message: "User not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

module.exports = router;