const passport = require( 'passport' );
const { User } = require( './db.js' );
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Strategy = require( 'passport-local' ).Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;



function authSetUp(server) {

	const localStrategy = new Strategy({ 
		usernameField: "username", 
		passwordField: "password" 
	}, 
		function ( username, password, done ) {
			User.findOne({ where: { username } })
				.then(( user ) => { 
					if( !user ) { return done( null, false ) }
					if (!user.validPassword(password)) {
						return done(null, false, { message: 'Incorrect password.' });
					}
					return done( null, user );
				} )
				.catch( ( error ) => { return done( error ) });
	})
  
	// passport.use(new GoogleStrategy({
	// 	clientID: process.env.GOOGLE_CONSUMER_KEY,
	// 	clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
	// 	callbackURL: process.env.GOOGLE_CALLBACK
	//   },
	//   function(token, tokenSecret, profile, done) {
	// 	  User.findOrCreate({ googleId: profile.id }, function (err, user) {
	// 		return done(err, user);
	// 	  });
	//   }
	// ));

	passport.use(localStrategy)

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser( function( id, done ) {
		User.findByPk( id )
			.then( ( user ) => {
				done( null, user );
			} )
			.catch( ( error ) => {
				return done( error );
			} );
		} );

	server.use(cookieParser());
	server.use(passport.initialize());
	server.use(passport.session());
	
	server.use(session({
		secret: 'keyboard cat',
		resave: true,
		saveUninitialized: true
	}))
	
	server.use((req, res, next) => {
	// console.log(req.session);
	// console.log(req.user);
	next();
});


	
	
}

module.exports = authSetUp
