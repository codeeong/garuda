const
	gulp       = require('gulp'),
	nodemon    = require('gulp-nodemon'),
	del        = require('del'),
	watchify   = require('watchify'),
	browserify = require('browserify'),
	source     = require('vinyl-source-stream'),
	buffer     = require('vinyl-buffer'),
	gutil      = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps')

// add custom browserify options here
const customOpts = {
	"entries": "./src/index.jsx",
	"basedir": "/",
	"dest": "./build",
	"outputName": "index.js"
}

gulp.task('clean-build', function() {
	del.sync(['./build/**'])
})

gulp.task('build', ['clean-build'], function(cb) {
	console.log("ツ Build started")

	let b = browserify({
			// Required watchify args
			cache: {},
			packageCache: {},
			fullPaths: false,
			entries: './src/index.jsx',
			paths: ['./node_modules', './src/components/'],
			debug: true
		})
		.transform('babelify', {
			presets: ['env', 'react'],
			plugins: ['transform-class-properties', 'transform-runtime']
		})

	b = watchify(b)

	function bundle() {
		return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('index.js'))
		.pipe(gulp.dest('./build'))
		.on('end', reportFinished)
	}

	b.on('update', bundle)
	b.on('log', gutil.log)

	const reportFinished = function() {
		console.log("ツ Build ended")
		cb()
	}

	return bundle()
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


