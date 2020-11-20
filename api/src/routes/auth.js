const server = require("express").Router();
const passport = require('passport');
const { User } = require("../db.js");
const isAuthenticated = require('../controllers/isAuthenticated.js')


server.get('/prueba', isAuthenticated ,(req,res,next)=>{
	res.send('Estas logueado')
})

server.post('/prueba', (req,res,next)=>{
	console.log(req.files);
	res.send(req.files.image.tempFilePath)
})


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

server.post( '/login', passport.authenticate('local', {succesRedirect:'/funca', failureRedirect:'/fallo'}),(req,res,next)=>{
  res.send(req.user)
});

server.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('id'); 
    res.redirect('/');
})

server.get('/me', isAuthenticated, (req, res) => {
  console.log("auth/me response:")
  console.log(req.session)
  res.send(req.user)
})

module.exports = server;
