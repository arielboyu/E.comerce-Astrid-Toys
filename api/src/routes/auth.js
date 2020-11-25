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

  var usernameExist;
  User.findOne({where: {username: username}})
  .then(r =>{ usernameExist= true})
  .catch(r =>{ usernameExist= false})

  var emailExist;
  User.findOne({where: {email: email}})
  .then(r =>{ emailExist= true})
  .catch(r =>{ emailExist= false})

  if(usernameExist){
    res.status(402).send("Username not available")
    return "Username not available"
  }

  if(emailExist){
    res.status(402).send("This email is already registered")
    return "This email is already registered"
  }

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
