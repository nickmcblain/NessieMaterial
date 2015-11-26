var gulp	= require('gulp'),
	wiredep	= require('wiredep').stream,
	concat	= require('gulp-concat'),
	connect	= require('gulp-connect'),
	sass	= require('gulp-sass');

// Host dist files	
gulp.task('connect', function() {
	connect.server({
		root: 'dist',
		port: 9000,
		livereload: true
	});
});

// Inject all bower components
gulp.task('bowerInject', function() {
	gulp.src('src/**/*.html')
		.pipe(wiredep({
			directory: 'src/assets/bower_components'
		}))
		.pipe(gulp.dest('./dist'));
});

// Move copies of bower components to dist
gulp.task('bowerDist', function() {
	gulp.src('src/assets/bower_components/**')
		.pipe(gulp.dest('./dist/assets/bower_components'));
});

// Relocate html partials
gulp.task('html', function() {
	gulp.src('./src/parials/*.html')
		.pipe(gulp.dest('dist/partials'))
		.pipe(connect.reload());
});

// Compile scripts
gulp.task('scripts', function() {
	gulp.src('./src/assets/js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./dist/assets/js'))
		.pipe(connect.reload());
});

// Compile sass
gulp.task('sass', function() {
	gulp.src('./src/assets/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/assets/css'))
		.pipe(connect.reload());
});

//Watch for file changes
gulp.task('watch', function() {
	gulp.watch(['src/**/*.html'], ['html', 'bowerDist']);
	gulp.watch(['src/assets/js/**/*.js'], ['scripts']);
	gulp.watch(['src/assets/scss/*.js'], ['sass']);
});

gulp.task('default', ['bowerInject', 'bowerDist', 'html', 'scripts', 'sass', 'connect', 'watch']);