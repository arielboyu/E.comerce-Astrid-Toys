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
  let { name, username, email, password } = req.body;

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
  let email = req.body.email;

  // ENCUENTRO EL USUARIO QUE SOLICITA EL REINICIO DE PASSWORD
  User.findOne( { where: { email } } )

    // CREO UN TOKEN DE RECUPERACIÓN DE CONTRASEÑA
    .then(user => {
      var id = uuid.v1();
      user.setDataValue('forgotToken', id);
      user.save();
      
      return user;
    })

    // ENVÍO EL MAIL DE RECUPERACIÓN DE CONTRASEÑA
    .then(user => {

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL, pass: process.env.PASSWORD }
      })      

      transporter.sendMail({
          
        from: process.env.EMAIL,
        to: email,
        subject: "Reset your password in Astrid Toys",
        text: `Hi ${user.dataValues.name}! To reset your password, please click on the follow link: ${process.env.FRONT_URL}/reset/${user.dataValues.forgotToken}`

      }, (err, info)=>{
          if(err){ res.status(500).send(err) } 
          else { res.status(200).send("Mail send") }
      })
    
    })

    // SI NO ENCONTRÉ EL USUARIO, RESPONDO CON UN OBJETO DE ERROR
    .catch(err => res.send({ err, msj: "El mail no corresponde a un usuario registrado" }))

})

server.post('/reset', (req, res) => {
  const id = req.body.id;
  const password = req.body.password 


  // ENCUENTRO EL USUARIO QUE SOLICITA EL REINICIO DE PASSWORD
  User.findOne( { where: { forgotToken: id } } )

    // CAMBIO LA CONTRASEÑA
    .then(user => {
      user.update({
        password,
        forgotToken: null
      });

    res.status(200).send({msg: "Contraseña recuperada con éxito"})

    })

    // SI NO ENCONTRÉ EL USUARIO, RESPONDO CON UN OBJETO DE ERROR
    .catch(err => res.send({ err: err, msj: "Hubo un error al actualizar la password" }))
    
})


module.exports = server;
