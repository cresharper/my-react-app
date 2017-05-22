//========================//========================
// establish dependencies
//========================//========================

const gulp   =  require('gulp'),
	  sass   =  require('gulp-ruby-sass');
	  watch  =  require('gulp-watch');

//========================//========================
// Default Task
//========================//========================

gulp.task('default', ['styles', 'watch']);

//========================//========================
// Styles Task
//========================//========================

gulp.task('styles', function() {
	return sass('src/sass/*.scss')
	// .pipe(gulp.dest('src/css/'));
	.pipe(gulp.dest('src/App.css/'));
});

//========================//========================
// Watch Task
//========================//========================

gulp.task('watch', function() {
	return watch('/src/sass/*.scss', function () {
		gulp.src('/src/sass/*.scss')
			.pipe(gulp.dest('/src/styles.css'));
	});
});