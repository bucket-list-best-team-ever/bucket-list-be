const userDb = require("../models/authmodel");
const bucketDb = require("../models/bucketitemmodel");
const express = require('express');

const router = express.Router(); 

// Get all users
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

router.get('/user/:id', (req, res) => {
    userDb.getUserById(req.params.id)
    .then(response => {
        if (response.length > 0)
            res.status(200).json({user: response});
        else
            res.status(404).json({ message: "Not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

// Get user currently logged in
router.get('/user', (req, res) => {
  
    userDb.getUserByEmail(req.user.email)
    .then(response => {
        if (response)
            res.status(200).json({user: response});
        else
            res.status(404).json({ message: "User not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

// Get all users bucket list items
router.get('/user/:user_id/items', (req, res) => {
  
    bucketDb.getBucketItemByUserId(req.params.user_id)
    .then(response => {
        if (response)
            res.status(200).json({items: response});
        else
            res.status(404).json({ message: "No items for user found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});


module.exports = router;