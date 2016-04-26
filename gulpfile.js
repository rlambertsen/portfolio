var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('sass', function() {
    gulp.src('./public/css/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('copy', function() {
    gulp.src('./node_modules/typed.js/js/typed.js')
        .pipe(gulp.dest('public/js/'))

    gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('public/css/'))

    gulp.src('./node_modules/font-awesome/fonts/font-awesome**')
        .pipe(gulp.dest('public/fonts/'));
});


gulp.task('concat', function() {
    gulp.src(
                [
                    
                    './public/js/typed.js',
                    './public/js/main.js'
                ]
            )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/js/'));
});



gulp.task('default', ['sass','copy', 'concat'], function() {});

