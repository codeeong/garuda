// ==============
// Sample Web App
// ==============
//
// Drafted - 21/12/2017 Jiin Joo

// Part 1 Setup Web Server

const
	path = require('path'),
	express = require('express'),
	session = require('express-session'),
	compression = require('compression'),
	app = express(),
	bodyParser = require('body-parser'),
	winston = require('winston'),
	expressLogger = require('express-winston'),
	log = new (winston.Logger)({
		level: 'debug',
		transport: [
			new (winston.transports.Console)({
				json: false,
				timestamp: () => {
					return (new Date()).toISOString().replace('T', ' ').replace('Z', '')
				},
				formatter: (opts) => {
					return opts.timestamp() + ' [' + opts.level + '] ' + (undefined !== opts.message ? opts.message : '')
				}
			})
		]
	})

// We conform to systelog levels - use { error: 3, warning: 4, notice: 5, info: 6, debug: 7 }
log.setLevels(winston.config.syslog.levels)

// gzip compress output
app.use(compression())

// Support JSON-encoded bodies
app.use(bodyParser.json({ limit: '42mb' }))

// Support URL encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

// Setup Redis as the session store
const
	redis       = require('redis'),
	RedisStore  = require('connect-redis')(session),
	redisClient = redis.createClient(),
	redisStore  = new RedisStore({
		client: redisClient,
		ttl:    23 * 60 * 60
	})

app.use(session({
	store:  redisStore,
	secret: 'autonomous robotics',
	cookie: { maxAge: 23 * 60 * 60 * 1000 }, // 23 hours
	resave: false,           // Don't force a session to be saved back to the session store if the session was never modified during the request. 
	saveUninitialized: false // Don't force a session that is new but not modified to be saved to the store
}))

// Setup passport as the authentication mechanism
const
	passport = require('passport')

app.use(passport.initialize())
app.use(passport.session())

// Setup the web server to receive traffic
const
	port   = 8000
	server = app.listen(port)
log.info('Sample web server listening on port ' + port)


// Part 2 Specify how files are to be served

// Static files goes to the static directory
app.use('/img', express.static(path.join(__dirname, '/static/img'), { maxAge: '1m' }))
app.use('/css', express.static(path.join(__dirname, '/static/css'), { maxAge: '1m' }))
app.use('/js',  express.static(path.join(__dirname, '/static/js'),  { maxAge: '1m' }))


// Application files goes to the build directory
app.get('/', (req, res) => { res.sendFile(__dirname + '/static/index.html') })
app.get('/index.js', (req, res) => { res.sendFile(__dirname + '/build/index.js') })



// AJAX calls can be handled here




// Last Part, clean up

app.use(function(req, res, next) {
	res.status(404).sendFile(__dirname + '/static/notfound.html')
})

app.use(expressLogger.errorLogger({
	winstonInstance: log
}))
