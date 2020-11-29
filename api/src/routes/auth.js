require('dotenv').config();
const server = require("express").Router();
const passport = require('passport');
const nodemailer = require('nodemailer')
const { User } = require("../db.js");
const uuid = require('uuid');
const isAuthenticated = require('../controllers/isAuthenticated.js')

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


server.get('/github', passport.authenticate('github', { successRedirect: 'https://www.google.com.ar', failureRedirect: 'https://www.google.com.ar/products' } ) );

// server.get('github/redirect', passport.authenticate('github') );

// server.get('/auth/facebook', passport.authenticate('facebook'));

// server.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

// server.get('/github', passport.authenticate('github', { display : 'popup'}));


server.get('/github/callback', 
  passport.authenticate('github'),
  function(req, res) {
    res.redirect('http://localhost:3000/');
  });


server.post('/send/register', (req, res)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  })
  var mainConfig={
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


server.post('/forgot', (req, res) => {
  const email = req.body.email;

  // ENCUENTRO EL USUARIO QUE SOLICITA EL REINICIO DE PASSWORD
  User.findOne( { where: { email } } )

    // CREO UN TOKEN DE RECUPERACIÓN DE CONTRASEÑA
    .then(user => {
      const id = uuid.v1();
      const request = {
        id,
        email: user.dataValues.email
      };
      user.dataValues.forgotToken = id;

      console.log("encontré al usuario")
      
      return user;
    })

    // ENVÍO EL MAIL DE RECUPERACIÓN DE CONTRASEÑA
    .then(user => {
      console.log("entre")
      console.log(process.env.EMAIL)
      console.log(process.env.PASSWORD)

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
      })
      
      console.log("pase la primer constante")
      console.log(`${process.env.FRONT_URL}/reset/${user.dataValues.forgotToken}`)
      console.log(email)
      console.log(user.dataValues.forgotToken)
      console.log(user.dataValues.name)
      

    transporter.sendMail({
          from: process.env.EMAIL,
          to: email,
          subject: "Reset your password in Astrid Toys",
          text: `Hi ${user.dataValues.name}! To reset your password, please click on the follow link: ${process.env.FRONT_URL}/reset/${user.dataValues.forgotToken}`
    }, (err, info)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("Mail send")
        }
    })
    
  })

    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //       user: process.env.EMAIL,
    //       pass: process.env.PASSWORD
    //   }
    // })
    // var mainConfig={
    //   from: process.env.EMAIL,
    //   to: req.body.email,
    //   subject: "New account created in Astrid Toys",
    //   text: `Hi ${req.body.name}! Welcome to our shop. You can now make purchases of your favorite toys`
    // }
    // transporter.sendMail(mainConfig, (err, info)=>{
    //   if(err){
    //     res.status(500).send("Failed send mail")
    //   } else {
    //     res.status(200).send("Mail send")
    //   }
    // })

    // SI NO ENCONTRÉ EL USUARIO, RESPONDO CON UN OBJETO DE ERROR
    .catch(err => res.send({ err: err, msj: "El mail no corresponde a un usuario registrado" }))
  
  

})


module.exports = server;
