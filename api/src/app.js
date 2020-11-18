const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const passport = require('passport');
const session = require("express-session");
const { User } = require("./db.js");
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors')
require('./db.js');

const server = express();

server.name = 'API';

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ where: { username } })
        .then((user) => { if(!user) { return done(null, false) }
            if(user.password != password) { return done(null, false) }
            return done(null, user);
          })
        .catch(err => { return done(err) });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findByPk(id)
    .then((user) => { done(null, user) })
    .catch(err => { return done(err) })
});

// Inicializa Passport y recupera el estado de autenticación de la sesión.
server.use(passport.initialize());
server.use(passport.session());

server.use(express.static("public"));
server.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Middleware para mostrar la sesión actual en cada request
server.use((req, res, next) => {
    console.log("esta es la session")
    console.log(req.session);
    console.log("este es el usuario")
    console.log(req.user);
    next();
  });

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors()) // Use this after the variable declaration
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONT_URL); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
