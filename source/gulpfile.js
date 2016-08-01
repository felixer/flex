var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer')

gulp.task('scss', function(){
  gulp.src('styles/main.scss')
      .pipe(sass())
      .pipe(prefix())
      .pipe(gulp.dest('../styles'));
});

gulp.task('cp',function(){
    gulp.src('index.html')
        .pipe(gulp.dest('..'));
});

gulp.task('watch',function(){
    gulp.watch(['*.html'],['cp']);
    gulp.watch(['styles/*.scss'],['scss']);
})

gulp.task('default',['scss','cp','watch']);
