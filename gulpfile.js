var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync  = require('browser-sync').create();

gulp.task('browser-sync', [], function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false,
		open: false
	});
		
});

gulp.task('styles', function () {
	return gulp.src('./sass/**/**/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
});


gulp.task('watch', function () {
	gulp.watch('./sass/**/**/*.sass', ['styles']);
	gulp.watch('./app/*.html').on("change", browserSync.reload);
	gulp.watch('./app/js/*.js').on("change", browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);