const passport = require( 'passport' );
const { User } = require( './db.js' );
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Strategy = require( 'passport-local' ).Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


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

	
	passport.use(new GitHubStrategy({ 
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		callbackURL: process.env.GITHUB_CLIENT_CALLBACK
	},
	  function(accessToken, refreshToken, profile, cb) {
		User.findOrCreate( { 
			where: {
				github: profile.id},
				defaults: {
					name: profile.displayName,
					email: profile.emails ? profile.emails[0].value : null
				}} , 
			function (err, user) {
		  return cb(err, user);
		});
	  }
	));

  

// 	passport.use(new FacebookStrategy({
// 		clientID: FACEBOOK_APP_ID,
// 		clientSecret: FACEBOOK_APP_SECRET,
// 		callbackURL: "http://www.example.com/auth/facebook/callback"
//   	},
// 	function(accessToken, refreshToken, profile, done) {
// 		User.findOrCreate( {
// 			where: {
// 				facebookId: profile.id},
// 				defaults: {
// 					name: profile.displayName,
// 					email: profile.emails ? profile.emails[0].value : null
// 			}} , function(err, user) {
			
// 			if (err) { return done(err); }
// 			done(null, user);
// 			});
// 	}
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
	console.log(req.session);
	console.log(req.user);
	next();
});


	
	
}

module.exports = authSetUp
