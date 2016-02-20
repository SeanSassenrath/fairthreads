var gulp = require('gulp');

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

gulp.task('css', function() {
  var cssFiles = ['src/css/*'];

  gulp.src(plugins.mainBowerFiles().concat(cssFiles))
      .pipe(plugins.filter('*.css'))
      .pipe(plugins.concat('styles.css'))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['css']);
});

gulp.task('default', ['scripts', 'css']);
