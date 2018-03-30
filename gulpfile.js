const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const jsonminify = require('gulp-jsonminify');

const DEST = 'dist/';

function build() {
  gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest(DEST));

  gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(DEST));

  gulp.src('src/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest(DEST));

  gulp.src('src/icons/*.png')
    .pipe(gulp.dest(`${DEST}icons/`));
}

function watch() {
  gulp.watch([
    'src/*.js',
    'src/*.html',
    'src/*.json',
    'src/icons/*.png',
  ], [
    'build',
  ]);
}

gulp.task('build', build);
gulp.task('watch', watch);

gulp.task('default', [
  'watch',
  'build',
]);
