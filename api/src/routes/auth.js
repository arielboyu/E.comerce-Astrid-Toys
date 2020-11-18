const server = require("express").Router();
var passport = require('passport');


server.post('/login', 
    passport.authenticate('local', { failureRedirect: '/' }),
      (req, res) => { 
        console.log(req.session)
        res.cookie('id', req.user.id, { maxAge: 259200000000000000000 }); 
        res.send(req.user)
      } 
)

server.get('/logout', (req, res) => {
    console.log(req.user)
    req.logout();
    res.clearCookie('id'); 
    res.send("Deslogueado");
})

//utilizar esta funcion como middleware para validar si hay logueo
isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
      console.log("Autenticación OK")
      next();
    } else {
      console.log("No está autenticado")
      // res.redirect("/")
      next();
    }
  }

server.get('/me', isAuthenticated, (req, res) => {  
    console.log("Este es el usuario logueado")
    console.log(req.user)
    console.log(req.session)
    res.send(req.user);
});

module.exports = server;