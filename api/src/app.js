const express	= require( 'express' );
const session = require( 'express-session' );
const cookieParser = require( 'cookie-parser' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const passport = require( 'passport' );
const routes = require( './routes/index.js' );
const cors = require ('cors');
const path = require("path");

require( 'dotenv' ).config( );
require( './db.js' );
const authSetUp = require( './passport.js' );
const { FRONT_URL } = process.env;
const server = express( );

server.name = 'API';

server.use(cors({
  origin: FRONT_URL,
  credentials: true,
}));

server.use(cookieParser());

server.use( bodyParser.urlencoded( { extended: true, limit: '50mb' } ) );
server.use( bodyParser.json( { limit: '50mb' } ) );
server.use( morgan( 'dev' ) );

//static files
server.use(express.static(path.join(__dirname,"public")))

server.use(express.static("public"));
server.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);


server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONT_URL); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


authSetUp(server);
server.use( '/', routes );

server.use( ( error, request, response, next ) => {
	const status = error.status || 500;
	const message = error.message || error;

	console.error( error );

	response.status( status ).send( message );
} );





module.exports = server;
