const bucketDb = require("../models/bucketitemmodel");
const bucketPostDb = require("../models/bucketitempostmodel");
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

router.get('/bucketitem/:item_id/items', (req, res) => {
  
    bucketPostDb.getBucketItemPostByItemId(req.params.item_id)
    .then(response => {
        if (response)
            res.status(200).json({posts: response});
        else
            res.status(404).json({ message: "No posts for this item found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.get('/bucketitem/post/:id', (req, res) => {
  
    bucketPostDb.getBucketItemPostById(req.params.id)
    .then(response => {
        if (response)
            res.status(200).json({bucketitempost: response});
        else
            res.status(404).json({ message: "Bucket item post not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.post('/bucketitem/post', (req, res) => {
  
    bucketPostDb.createBucketItemPost(req.body)
    .then(response => {
            res.status(200).json({id: response});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.put('/bucketitem/post/:id', (req, res) => {
  
    bucketPostDb.updateBucketItemPost(req.params.id, req.body)
    .then(response => {
            res.status(200).json({id: response});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.delete('/bucketitem/post/:id', (req, res) => {
  
    bucketPostDb.deleteBucketItemPost(req.params.id)
    .then(response => {
            res.status(200).json({message: `deleted id ${req.params.id}`});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

module.exports = router;