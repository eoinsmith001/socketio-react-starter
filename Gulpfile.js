var gulp = require('gulp'),
  watchify = require('watchify'),
  browserify = require('browserify'),
  exorcist = require('exorcist'),
  babelify = require('babelify'),
  source = require('vinyl-source-stream');

watchify.args.debug = true;

var bundler = watchify(browserify({
  entries: './app/main.js',
  extensions: ['.js']
}, watchify.args));

bundler.transform(babelify.configure({
  sourceMapRelative: 'app/',
  presets: ['react']
}));

bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function(err) {
      this.emit('end');
    })
    .pipe(exorcist('public/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'))
}

gulp.task('build', function() {
  return bundle();
});
