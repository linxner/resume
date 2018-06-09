const gulp = require('gulp')
const connect = require('gulp-connect')
const sass = require('gulp-sass')


gulp.task('html', () => {
    gulp.src('./*.html')
        .pipe(connect.reload())
})

gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(connect.reload())
})

gulp.task('watch', () => {
    gulp.watch('./*.html', ['html'])
    gulp.watch('./src/sass/*.scss', ['sass'])
})

gulp.task('copy', () => {
    gulp.src('./**.html').pipe(gulp.dest('./dist/'))
    gulp.src('./src/css/*.css').pipe(gulp.dest('./dist/css'))
    gulp.src('./src/js/*.js').pipe(gulp.dest('./dist/js'))
    gulp.src('./src/fonts/*.*').pipe(gulp.dest('./dist/fonts'))
    gulp.src('./src/images/*.*').pipe(gulp.dest('./dist/images'))
})

gulp.task('server', () => {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    })
})

gulp.task('default', ['server', 'watch'])