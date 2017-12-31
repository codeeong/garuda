const
	gulp       = require('gulp'),
	nodemon    = require('gulp-nodemon'),
	del        = require('del'),
	watchify   = require('watchify'),
	browserify = require('browserify'),
	source     = require('vinyl-source-stream'),
	buffer     = require('vinyl-buffer'),
	gutil      = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps'),
	prettyTime = require('pretty-hrtime')

const filesConfig = [
	{
		"original": "./src/index.jsx",
		"output":   "index.js"
	},
	{
		"original": "./src/login.jsx",
		"output":   "login.js"
	}
]
let filesCount = filesConfig.length

let startTime

function logStart(filepath) {
	startTime = process.hrtime()
	gutil.log('Bundling', gutil.colors.green(filepath) + '...')
}
function logEnd(filepath) {
	let taskTime = process.hrtime(startTime)
	taskTime = prettyTime(taskTime)
	gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(taskTime))
}

const browserifyThis = function(config, cb) {

	let b = browserify({
			// Required watchify args
			cache: {},
			packageCache: {},
			fullPaths: false,
			entries: config.original,
			paths: ['./node_modules', './src/components/'],
			debug: true
		})
		.transform('babelify', {
			presets: ['env', 'react'],
			plugins: ['transform-class-properties', 'transform-runtime']
		})

	b = watchify(b)

	function bundle() {
		logStart(config.output)

		b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source(config.output))
		.pipe(gulp.dest('./build'))
		.on('end', reportFinished)
	}

	b.on('update', bundle)
	b.on('log', gutil.log)

	const reportFinished = function() {
		logEnd(config.output)

		if (filesCount) {
			filesCount--
			if (filesCount === 0) {
				console.log('ツ Build ended')
				cb()
			}
		}
	}

	return bundle()
}
gulp.task('clean-build', function() {
	del.sync(['./build/**'])
})

gulp.task('build', ['clean-build'], function(cb) {
	// Call cb once only to tell gulp we're done
	console.log('ツ Build started')
	filesConfig.forEach(config => browserifyThis(config, cb))
})

gulp.task('default', ['build'], function(cb) {
	let started = false
	nodemon({
		script: 'app.js',
		watch: ['app.js'],
		delay: 1000,
		env: {
			'NODE_ENV':    'development',
			'DB_HOSTNAME': 'localhost'
		}
	}).on('start', function() {
		// to avoid nodemon being started multiple times
		if (!started) {
			started = true
			cb()
		}
	})
	console.log("ツ Nodemon started")
})


