const server = require("express").Router();
const passport = require('passport');
const nodemailer = require('nodemailer')
const { User } = require("../db.js");
const isAuthenticated = require('../controllers/isAuthenticated.js')
require('dotenv').config();

server.get('/pruebaLogin', isAuthenticated, ( req, res ) => {
	res.send('Estas logueado')
})

server.post('/prueba', (req,res,next)=>{
	console.log(req.files);
	res.send(req.files.image.tempFilePath)
})


server.post('/signup', ( req, res, next ) => {
	if ( req.isAuthenticated( ) ) {
		return res.status( 400 ).send( { message: 'User is already logged in' } );
	}
  const { name, username, email, password } = req.body;

  //falta comparar cuando un username ya se encuentra en la base de datos

  if (name && username && email && password) {
    User.create({
      name,
      username,
      email,
      password,
    })
      .then((userCreated) => {
        console.log("User created");
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(400)
      });
  } else {
    res.sendStatus(400)
  }
});

server.post('/login', passport.authenticate('local'), (req, res) => {
	res.send( req.user );
});

server.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('id'); 
    res.send( req.user );
})

server.get('/me', isAuthenticated, (req, res) => {
  res.status(200).send( req.user );
})

server.get('/github', passport.authenticate('github', {scope: ['user:email'], display: 'popup'}));
server.get('/github/redirect', passport.authenticate('github', {successRedirect: 'http://localhost:3000/oauth/success'})
);

server.post('/send/register', (req, res)=>{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  })
  const mainConfig={
    from: process.env.EMAIL,
    to: req.body.email,
    subject: "New account created in Astrid Toys",
    text: `Hi ${req.body.name}! Welcome to our shop. You can now make purchases of your favorite toys`
  }
  transporter.sendMail(mainConfig, (err, info)=>{
    if(err){
      res.status(500).send("Failed send mail")
    } else {
      res.status(200).send("Mail send")
    }
  })
})


module.exports = server;
