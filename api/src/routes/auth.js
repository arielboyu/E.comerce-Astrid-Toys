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

  // User.findOne({where: {username: username}})
  // .then(r =>{
  //   if(r !== null)
  //     res.setHeader("Error mail", 402)  
  // })
  // .catch(er =>{
  //   res.status(402).send("Username not available")
  // })

  // User.findOne({where: {email: email}})
  // .then(r =>{
  //   if(r !== null){
  //     res.setHeader("Error mail", 402)
  //   }
  // })
  // .catch(er =>{
  //   res.status(402).send("This email is already registered")
  // })
  var usernameExist= false;
  User.findOne({where: {username: username}})
  .then(r =>{
    if(username === r.username){
      console.log("Los usuarios son iguales")
      return res.status(402).send("Username not available")
      // res.header(400)
      // res.send("User idems")
    } 
  })
  .catch(er =>{
    console.log("Por algun motivo entre aca")
    // res.send("User idems pero catch")
    // res.status(402).send("Username not available")
  })

  if(usernameExist) console.log("Los usarios son idems y eso no deberia pasar chinwenwencha")

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
