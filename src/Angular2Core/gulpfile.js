var gulp = require('gulp');

gulp.task('copy-angular', function () {
    return gulp.src('node_modules/@angular/**/*.js').pipe(gulp.dest('wwwroot/lib/@angular'));
});
gulp.task('copy-systemjs', function () {
    return gulp.src('node_modules/systemjs/**/*.js').pipe(gulp.dest('wwwroot/lib/systemjs'));
});
gulp.task('copy-es6-shim', function () {
    return gulp.src('node_modules/es6-shim/**/*.js').pipe(gulp.dest('wwwroot/lib/es6-shim'));
});
gulp.task('copy-zone-js', function () {
    return gulp.src('node_modules/zone.js/**/*.js').pipe(gulp.dest('wwwroot/lib/zone.js'));
});
gulp.task('copy-reflect-metadata', function () {
    return gulp.src('node_modules/reflect-metadata/**/*.js').pipe(gulp.dest('wwwroot/lib/reflect-metadata'));
});
gulp.task('copy-rxjs', function () {
    return gulp.src('node_modules/rxjs/**/*.js').pipe(gulp.dest('wwwroot/lib/rxjs'));
});
gulp.task('copy-angular2-in-memory-web-api', function () {
    return gulp.src('node_modules/angular2-in-memory-web-api/**/*.js').pipe(gulp.dest('wwwroot/lib/angular2-in-memory-web-api'));
});
gulp.task('copy-dependencies', ['copy-angular', 'copy-systemjs', 'copy-es6-shim', 'copy-zone-js', 'copy-reflect-metadata', 'copy-rxjs', 'copy-angular2-in-memory-web-api']);