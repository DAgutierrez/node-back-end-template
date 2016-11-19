import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import Cache from 'gulp-file-cache';
import sourcemaps from 'gulp-sourcemaps';


gulp.task('copy', function () {
    var stream = gulp.src('./src/**/**/*.json')
        .pipe(gulp.dest('./dist'));
    return stream;
})


gulp.task('compile',['copy'], function () {
    var stream = gulp.src('./src/**/**/*.js') // your ES2015 code
        // .pipe(sourcemaps.init())
        .pipe(babel())
        // .pipe(sourcemaps.write('.'))// compile new ones
        .pipe(gulp.dest('./dist')) // write them
    return stream // important for gulp-nodemon to wait for completion
})

gulp.task('watch', ['compile'], function () {
    var stream = nodemon({
        script: 'dist/app.js' // run ES5 code
        , watch: 'src' // watch ES2015 code
        , tasks: ['compile'] // compile synchronously onChange
    })

    return stream
})

