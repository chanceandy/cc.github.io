const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

// 压缩 HTML
gulp.task('minify-html', function () {
  return gulp.src('src/*.html') // 源 HTML 文件路径
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist')); // 输出到 dist 目录
});

// 压缩 CSS
gulp.task('minify-css', function () {
  return gulp.src('src/*.css') // 源 CSS 文件路径
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist')); // 输出到 dist 目录
});

// 默认任务
gulp.task('default', gulp.series('minify-html', 'minify-css'));
// 监视文件变化
gulp.task('watch', function () {
    gulp.watch('src/*.html', gulp.series('minify-html'));
    gulp.watch('src/*.css', gulp.series('minify-css'));
  });