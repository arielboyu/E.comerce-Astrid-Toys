const express	= require( 'express' );
const session = require( 'express-session' );
const cookieParser = require( 'cookie-parser' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const passport = require( 'passport' );
const routes = require( './routes/index.js' );
const cors = require ('cors');

require( 'dotenv' ).config( );
require( './db.js' );
const authSetUp = require( './passport.js' );

const { FRONT_URL } = process.env;

const server = express( );

server.name = 'API';

server.use(cors())
server.use( express.static( 'public' ) );
server.use(cookieParser());
server.use( bodyParser.urlencoded( { extended: true, limit: '50mb' } ) );
server.use( bodyParser.json( { limit: '50mb' } ) );
server.use( morgan( 'dev' ) );

server.use( ( request, response, next ) => {
	response.header( 'Access-Control-Allow-Origin', FRONT_URL );
	response.header( 'Access-Control-Allow-Credentials', 'true' );
	response.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	response.header( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE' );

	next( );
} );

authSetUp(server);

server.use( '/', routes );

server.use( ( error, request, response, next ) => {
	const status = error.status || 500;
	const message = error.message || error;

	console.error( error );

	response.status( status ).send( message );
} );

module.exports = server;
