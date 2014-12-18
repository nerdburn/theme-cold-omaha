// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    path = require('path');

var dir = {
  js: '/assets/js/',
  css: '/assets/css/',
  less: '/assets/less/'
}

// easier to read variable
var themeName = 'cold-omaha';

// startups
gulp.task('default', ['less']);

// node 
gulp.task('postachio', function() {

  nodemon({ script: 'app.js', env: { 'NODE_ENV': 'development' }, ext: 'html js less', ignore: [path.js + 'app.min.js'] })
  .on('change', ['less'])
  .on('restart', function(items) {
    console.log(items);
  });

});

// run
gulp.task('less', function() {
  
  // less
  gulp.src(dir.less + themeName + '.less')
    .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(dir.css));

  // js
  gulp.src([
      dir.js + 'jquery-1.9.1.min.js',
      dir.js + 'bootstrap.min.js',
      dir.js + themeName + '.js' // last
    ])
    .pipe(concat(themeName + '.min.js'))
    //.pipe(uglify())
    .pipe(rename(themeName + '.min.js'))
    .pipe(gulp.dest(dir.js));
  
});