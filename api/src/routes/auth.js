const server = require("express").Router();
const passport = require('passport');
const express = require('express');

const { User } = require("../db.js");

server.post( '/signup', ( req, res, next ) => {
	if ( req.isAuthenticated( ) ) {
		return res.status( 400 ).send( { message: 'User is already logged in' } );
	}
  const { name, username, email, password } = req.body;
  if (name && username && email && password) {
    User.create({
      name,
      username,
      email,
      password,
    })
      .then((userCreated) => {
        console.log("Usuario creado OK ", userCreated);
        res.send(userCreated);
      })
      .catch((err) => {
        res.status(400).send("Error al crear usuario ", err);
      });
  } else {
    res.status(400).send("Error! campos sin completar");
  }
} );

server.post( '/login', passport.authenticate('local'),(req,res,next)=>{
  res.send(req.user)
});

server.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
})


module.exports = server;
