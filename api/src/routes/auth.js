const server = require("express").Router();
const express = require('express');
var passport = require('passport');
var session = require("express-session");
var LocalStrategy = require('passport-local').Strategy;
const { User } = require("../db.js");

server.use(express.static("public"));
server.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ where: { username } })
        .then((user) => {
            if(!user) {
              return done(null, false);
            }
            if(user.password != password) {
              return done(null, false);
            }
            return done(null, user);
          })
        .catch(err => {
          return done(err);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id)
    .then((user) => { done(null, user) })
    .catch(err => { return done(err) })
});

// Inicializa Passport y recupera el estado de autenticación de la sesión.
server.use(passport.initialize());
server.use(passport.session());

// Middleware para mostrar la sesión actual en cada request
server.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
  });

server.post('/login', 
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res) => { 
        console.log(req.session);
        console.log(req.user); 
        res.send(req.user) } 
)

server.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
})

//utilizar esta funcion como middleware para validar si hay logueo
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login');
    }
  }

//   server.get('/profile',
//   isAuthenticated,
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });

module.exports = server;