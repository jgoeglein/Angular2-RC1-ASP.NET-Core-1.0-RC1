var gulp = require('gulp');

var paths = {
    wwwroot: "./wwwroot/"
};
paths.libDest = paths.wwwroot + "/lib";
paths.node_modules = "./node_modules";

gulp.task('copy-angular', function () {
    return gulp.src(paths.node_modules + '/@angular/**/*.js').pipe(gulp.dest(paths.libDest + '/@angular'));
});
gulp.task('copy-systemjs', function () {
    return gulp.src(paths.node_modules + '/systemjs/**/*.js').pipe(gulp.dest(paths.libDest + '/systemjs'));
});
gulp.task('copy-es6-shim', function () {
    return gulp.src(paths.node_modules + '/es6-shim/**/*.js').pipe(gulp.dest(paths.libDest + '/es6-shim'));
});
gulp.task('copy-zone-js', function () {
    return gulp.src(paths.node_modules + '/zone.js/**/*.js').pipe(gulp.dest(paths.libDest + '/zone.js'));
});
gulp.task('copy-reflect-metadata', function () {
    return gulp.src(paths.node_modules + '/reflect-metadata/**/*.js').pipe(gulp.dest(paths.libDest + '/reflect-metadata'));
});
gulp.task('copy-rxjs', function () {
    return gulp.src(paths.node_modules + '/rxjs/**/*.js').pipe(gulp.dest(paths.libDest + '/rxjs'));
});
gulp.task('copy-angular2-in-memory-web-api', function () {
    return gulp.src(paths.node_modules + '/angular2-in-memory-web-api/**/*.js').pipe(gulp.dest(paths.libDest + '/angular2-in-memory-web-api'));
});
gulp.task('copy-dependencies', ['copy-angular', 'copy-systemjs', 'copy-es6-shim', 'copy-zone-js', 'copy-reflect-metadata', 'copy-rxjs', 'copy-angular2-in-memory-web-api']);
