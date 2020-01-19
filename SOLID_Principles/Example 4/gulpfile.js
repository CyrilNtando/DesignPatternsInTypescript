const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

/*********TYPESCRIPT TASK****** */
gulp.task('typescript', () =>
  gulp
    .src('./src/typescript/')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('./build/js/'))
);
gulp.task('watch', () => {
  //min server or browser Sync
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  });
  console.log('watching.....start');
  watch('./build/index.html', () => {
    browserSync.reload();
  });
  watch('./src/typescript/**/*.ts', gulp.series('typescriptInject'));
});
/********* END OF WATCH FILES CHANGES****** */
gulp.task(
  'typescriptInject',
  gulp.series('typescript', () => {
    browserSync.reload();
  })
);
