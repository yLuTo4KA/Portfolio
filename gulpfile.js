const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
// const sass = require('gulp-sass')(require('sass'));
// const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const {DIST_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS} = require('./gulp.config');

const env = process.env.NODE_ENV;


task('clean', ()=>{
    return src(`(${DIST_PATH}/**/*)`, { read: false }).pipe(rm());
});

task('copy:html', ()=>{
    return src(`${SRC_PATH}/*.html`)
        .pipe(dest(DIST_PATH))
        .pipe(reload({stream: true}))
})


task('server', function () {
    browserSync.init({
        server: {
            baseDir: `./${DIST_PATH}`
        },
        open: false
    });
});

task('default', series('clean', parallel('copy:html'), 'server'));
task('prod', series('clean', parallel('copy:html')));
