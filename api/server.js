const express = require('express');
const authRoute = require('./routes/authroutes');
const usersRoute = require('./routes/usersroutes');
const helmet = require('helmet');
const cors = require('cors');
const { isLoggedIn } = require('./middleware/authmiddleware');

const server = express(); 

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(express.json());
 
server.use("/api", authRoute);  
server.use("/api", isLoggedIn, usersRoute);  

module.exports = server;