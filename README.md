# Bucket List API

## Base URL: https://bucket-list-be.herokuapp.com/

---

##Endpoints

### GET /api/users

    -returns all users

### GET /api/user

    -returns a user currently logged in

### GET /api/user/:user_id/items

    -returns all bucket list items for user_id

### GET /api/bucketitem/:id'

    -returns bucket list item for id

### GET /api/bucketitem/:item_id/posts

    -returns all posts for item_id


### GET /api/bucketitem/post/:id

    -returns a post for id

### GET /api/bucketitem/post/:post_id/images

    -returns an all images for post_id

### GET /api/bucketitem/post/image/:id

    -returns image for id 

### POST /api/register

    -input:
        -name -Required
        -email -Required
        -password -Required

    -returns { message: "User creates", token: "user token" }

### POST /api/login

    -input:
        -email -Required
        -password -Required

    -returns { message: "Logged in", token: "user token" }

### POST /api/bucketitem

    -input:
        -user_id -Required
        -description -Required

    -returns id of new item

### POST /api/bucketitem/post

    -input:
        -bucketitem_id -Required
        -message -Required

    -returns id of new post

### POST /api/bucketitem/post/image

    -input:
        -bucketitempost_id -Required
        -image 
        -url

    image and url are not required so you can choose how to store an image.

    -returns id of new post

### PUT /api/bucketitem/:id

    -input:
        -user_id -Required
        -description -Required

     -returns id of updated item

### PUT /api/bucketitem/post/:id

    -input:
        -bucketitem_id -Required
        -message -Required

    -returns id of updated post

### PUT /bucketitem/post/image/:id

    -input:
        -bucketitempost_id -Required
        -image 
        -url

    -returns id of updated image

### DELETE /api/bucketitem/:id

    -returns deletes an item by id and returns { message: "deleted id id# " }

### DELETE /api/bucketitem/post/:id

    -returns deletes an post by id and returns { message: "deleted id id# " }


### DELETE /bucketitem/post//image/:id

    -returns deletes an image by id and returns { message: "deleted id id# " }