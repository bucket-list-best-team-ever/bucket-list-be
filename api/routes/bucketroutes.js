const bucketDb = require("../models/bucketmodel");
const express = require('express');

const router = express.Router(); 

router.get('/bucketitem/:id', (req, res) => {
  
    bucketDb.getBucketItemById(req.params.id)
    .then(response => {
        if (response)
            res.status(200).json({bucketitem: response});
        else
            res.status(404).json({ message: "Bucket item not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.post('/bucketitem', (req, res) => {
  
    bucketDb.createBucketItem(req.body)
    .then(response => {
            res.status(200).json({id: response});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.put('/bucketitem/:id', (req, res) => {
  
    bucketDb.updateBucketItem(req.params.id, req.body)
    .then(response => {
            res.status(200).json({id: response});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.delete('/bucketitem/:id', (req, res) => {
  
    bucketDb.deleteBucketItem(req.params.id)
    .then(response => {
            res.status(200).json({message: `deleted id ${req.params.id}`});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});


module.exports = router;