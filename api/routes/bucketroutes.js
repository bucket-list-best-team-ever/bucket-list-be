const bucketDb = require("../models/bucketitemmodel");
const bucketPostDb = require("../models/bucketitempostmodel");
const bucketPostImageDb = require("../models/bucketitempostimagemodel");
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

router.get('/bucketitem/:item_id/posts', (req, res) => {
  
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
            res.status(404).json({ message: "Post not found" });
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

router.get('/bucketitem/post/:post_id/images', (req, res) => {
  
    bucketPostImageDb.getBucketItemPostByPostId(req.params.post_id)
    .then(response => {
        if (response)
            res.status(200).json({posts: response});
        else
            res.status(404).json({ message: "No images for this post found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.get('/bucketitem/post/image/:id', (req, res) => {
  
    bucketPostImageDb.getBucketItemPostImageById(req.params.id)
    .then(response => {
        if (response)
            res.status(200).json({bucketitempost: response});
        else
            res.status(404).json({ message: "Image not found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.post('/bucketitem/post/image', (req, res) => {
  
    bucketPostImageDb.createBucketItemPostImage(req.body)
    .then(response => {
            res.status(200).json({id: response});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.put('/bucketitem/post/image/:id', (req, res) => {
  
    bucketPostImageDb.updateBucketItemPostImage(req.params.id, req.body)
    .then(response => {
            res.status(200).json({id: response});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.delete('/bucketitem/post//image/:id', (req, res) => {
  
    bucketPostImageDb.deleteBucketItemPostImage(req.params.id)
    .then(response => {
            res.status(200).json({message: `deleted id ${req.params.id}`});
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

module.exports = router;