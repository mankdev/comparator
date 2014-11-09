var gulp = require('gulp'),
	watch = require('gulp-watch'),
	concat = require('gulp-concat'),
	bowerFiles = require('main-bower-files'),
	stylus = require('gulp-stylus'),
	tplCache = require('gulp-angular-templatecache'),
	streamqueue = require('streamqueue');

gulp.task('scripts', function() {
	return streamqueue({objectMode: true},
		gulp.src(bowerFiles()),
		gulp.src(['src/tpl/*.html'])
			.pipe(tplCache()),
		gulp.src(['src/js/*.js']))
			.pipe(concat('build.js'))
			.pipe(gulp.dest('app/inc/js'))
});

gulp.task('styles', function() {
	return gulp.src('src/styl/main.styl')
			.pipe(stylus())
			.pipe(gulp.dest('app/inc/css'));
});


gulp.task('build', ['scripts', 'styles']);