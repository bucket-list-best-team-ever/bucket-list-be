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

    -returns bucket list item by id

### GET /api/bucketitem/:item_id/posts

    -returns all posts for an item for item_id


### GET /api/bucketitem/post/:id

    -returns a post for id

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

### DELETE /api/bucketitem/:id

    -returns deletes an item by id and returns { message: "delected id id# " }

### DELETE /api/bucketitem/post/:id

    -returns deletes an post by id and returns { message: "delected id id# " }