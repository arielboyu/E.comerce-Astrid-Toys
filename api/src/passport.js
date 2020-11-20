const passport = require( 'passport' );
const Strategy = require( 'passport-local' ).Strategy;
const { User } = require( './db.js' );
const cookieSession = require('cookie-session');

const session = require('express-session');
const cookieParser = require('cookie-parser');


function authSetUp(server) {
	const localStrategy = new Strategy({
	      usernameField: "username",
	      passwordField: "password",
	},
	function ( username, password, done ) {
		User.findOne({ where: { username } })
		.then(( user ) => { 
			if( !user ) { return done( null, false ) }
			return done( null, user );
		} )
		.catch( ( error ) => { return done( error ) });
	})

	passport.use(localStrategy)

	passport.serializeUser((user, done) => {
		console.log('serializing user: ');
	  	done(null, user.id);
	});

	passport.deserializeUser( function( id, done ) {
	User.findByPk( id )
		.then( ( user ) => {
			console.log('deserializing user');
			done( null, user );
		} )
		.catch( ( error ) => {
			console.log('error in deserializeUser');
			return done( error );
		} );
	} );

	server.use(session({
		secret: 'keyboard cat',
		resave: true,
		saveUninitialized: true
	}))
	
	server.use(cookieParser());
	server.use(passport.initialize());
	server.use(passport.session());

	server.use((req, res, next) => {
		console.log(req.session);
		console.log(req.user);
		next();
	  });

}

module.exports = authSetUp
