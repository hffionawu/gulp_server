 var gulp = require('gulp'),
  connect = require('gulp-connect');
  gulp.task('connectServer', function() {
    connect.server({
      livereload: true,/*支援及時修改預覽*/
      port: 1000, /*指定使用哪個 port, 避免撞 8000*/
    });
  });
  /*執行gulp工作程序*/
  gulp.task('default', ['connectServer']);
