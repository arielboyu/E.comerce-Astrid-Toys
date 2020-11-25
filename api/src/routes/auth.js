const server = require("express").Router();
const passport = require('passport');
const { User } = require("../db.js");
const isAuthenticated = require('../controllers/isAuthenticated.js')
const nodemailer = require('nodemailer')

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


server.post('/send/register', isAuthenticated, (req, res)=>{
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nola.schaefer20@ethereal.email',
        pass: 'tvEce2yCEWT2jgfTTa'
    }
  })
  const mainConfig={
    from: "rodripenela",
    to: "maxidefilippis@gmail.com",
    subject: "New account create in Astrid Toys",
    text: "Text body"
  }
  transporter.sendMail(mainConfig, (err, info)=>{
    if(err){
      console.log(err)
      res.status(500).send("Failed send mail")
    } else {
      res.status(200).send("Mail send")
    }
  })
})

module.exports = server;
