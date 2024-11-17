const gulp = require('gulp');
const fileInc = require('gulp-file-include');
const scss = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clear = require('gulp-clean');
const fileSystem = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const imageMin = require('gulp-imagemin');
const webpack = require('webpack-stream');
const fileIncludeSettings = { prefix: '@@', basepath: '@file' };
const serverParams = { livereload: true, open: true };

gulp.task('html', () => {
  return gulp
    .src('./src/*.html')
    .pipe(fileInc(fileIncludeSettings))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scss', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sourceMaps.init())
    .pipe(scss())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', () => {
  return gulp
    .src('./src/imgs/**/*')
    .pipe(imageMin({ verbose: true }))
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('fonts', () => {
  return gulp.src('./src/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('startServer', () => {
  return gulp.src('./dist/').pipe(server(serverParams));
});

gulp.task('clear', (done) => {
  if (!fileSystem.existsSync('./dist/')) return done();
  return gulp.src('./dist/', { read: false }).pipe(clear());
});

gulp.task('ts', () => {
  return gulp
    .src('./src/ts/*.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('./src/**/*.html', gulp.parallel('html'));
  gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
  gulp.watch('./src/ts/**/*.ts', gulp.parallel('ts'));
  gulp.watch('./src/img/**/*', gulp.parallel('images'));
});

const tasks = [
  'clear',
  gulp.parallel('html', 'scss', 'images', 'fonts', 'ts'),
  gulp.parallel('startServer', 'watch'),
];

gulp.task('default', gulp.series(tasks));
