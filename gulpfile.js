let gulp = require('gulp');
let uglify = require('gulp-uglify');
let pump = require('pump');
let cleanCSS = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');

var src = './web_content';
var dist = './routing/public_website';

//JavaScript Files using uglify
gulp.task('compress-js', function (cb) {
  pump([
      gulp.src(src + '/javascript/*.js'),
      uglify({mangle : false}),
      gulp.dest(dist + '/javascript')
  ], cb);
});

//CSS Files with cleanCSS
gulp.task('minify-css', function (cb) {
  pump([
      gulp.src(src + '/styles/*.css'),
      cleanCSS({compatibility: 'ie8'}),
      gulp.dest(dist + '/css')
  ], cb);
});

//HTML Files with pug
gulp.task('minify-html', function (cb) {
  pump([
      gulp.src(src + '/html/*.html'),
      htmlmin({
        collapseInlineTagWhitespace : true,
        collapseWhitespace : true
      }),
      gulp.dest(dist + '/html')
  ], cb);
});

gulp.task('default', ['compress-js', 'minify-css', 'minify-html']);
