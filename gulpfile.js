var gulp = require('gulp');
// var sass = require('gulp-sass')


var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});

var dest = 'www/public/';

gulp.task('scripts', function() {

  var jsFiles = ['src/js/*'];

  gulp.src(plugins.mainBowerFiles().concat(jsFiles))
      .pipe(plugins.filter('*.js'))
      .pipe(plugins.concat('main.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(dest + 'js'));
});

//
// gulp.task('sass', function() {
//   gulp.src('src/**/*.scss')
//
//     .pipe(plugins.sass().on('error', sass.logError))
//     .pipe(gulp.dest('build/css'));
// })



gulp.task('scss', function() {
  var scssFiles = ['src/scss/*.scss', 'bower_components/foundation/scss/**/*.scss'];
  gulp.src(scssFiles)
  .pipe(plugins.sass())
  .pipe(gulp.dest(dest + 'css'));

  // gulp.src(plugins.mainBowerFiles().concat(scssFiles))
  //     .pipe(plugins.sass().on('error', sass.logError))
  //     .pipe(plugins.filter('*.scss'))
  //     .pipe(plugins.concat('styles.css'))
  //     .pipe(plugins.cssnano())
  //     .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['css']);
});

gulp.task('default', ['scripts', 'css']);
