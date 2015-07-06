var gulp = require("gulp"),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

  gulp.task('server', function() {
browserSync({
   notify: true,
   port: 9000,
   server: {
    baseDir: 'app'
   }
});
});   

gulp.task('watch', function(){
    gulp.watch([
        'app/css/*.css',
        'app/js/*.js',
        'app/*.html']).on('change', reload);
});

gulp.task('default', ['server', 'watch']);