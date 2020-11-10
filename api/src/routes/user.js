const server = require("express").Router();
const { User } = require("../db.js");

server.get('/', (req, res) => {
    User.findAll()
        .then(users => {
            res.send(users)
        })
})
