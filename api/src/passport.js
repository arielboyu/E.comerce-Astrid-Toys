const passport = require( 'passport' );
const Strategy = require( 'passport-local' ).Strategy;
const { User } = require( './db.js' );
const cookieParser = require("cookie-parser");
const cookieSession = require('cookie-session');

function authSetUp(server) {
	const localStrategy = new Strategy({
	      usernameField: "username",
	      passwordField: "password",
	},
	function ( username, password, done ) {
		User.findOne( {
			where: { username }
		} )
		.then( ( user ) => {
			if ( !user ) {
				return done( null, false );
			}
			return done( null, user );
		} )
		.catch( ( error ) => {
			return done( error );
		} );
	})

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

	server.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: ['supersecrettops3cr3t'],
    }),
  );

	server.use((req, res, next) => {
	  // console.log(req.session);
	  console.log(req.user);
	  next();
	});

	server.use(passport.initialize());
	server.use(passport.session());

}

module.exports = authSetUp
