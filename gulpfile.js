/*import fs from "fs";*/
/*import path from "path";*/
const buildFolder = "./build";
const srcFolder = "./src";

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from "gulp";
import {deleteAsync} from "del";
import {create as bsCreate} from 'browser-sync';
import htmlmin from "gulp-htmlmin";
import rename from "gulp-rename";

const browserSync = bsCreate();
const  sass  =  gulpSass ( dartSass ) ;

const copy = () => {
    return gulp.src('src/files/*.*')
        .pipe(gulp.dest('build'));
}

const watcher = () => {
    gulp.watch(('src/**/*.*'), copy);
    gulp.watch(('src/**/*.scss'), scss);
    gulp.watch(('src/**/*.html'), html);
    gulp.watch(('src/**/*.js'), js);
}

const reset = () => {
    return deleteAsync(('build'));
}

const html = () => {
    return gulp.src("src/**/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('build'))
}

const scss = () => {
    return gulp.src("src/scss/style.scss", {sourcemaps: true})
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream())
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "build/"
        },
        port: 3000,
        notyfy: false,
    }
)}

const js = () => {
    return gulp.src("src/**/*.js")
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream())
}

const image = () => {
    return gulp.src("src/img/**/*.{svg,png,jpg}")
    .pipe(gulp.dest('build/img/'))
    .pipe(browserSync.stream())
}

const fonts = () => {
    return gulp.src("src/fonts/*.{woff,woff2}")
    .pipe(gulp.dest('build/fonts/'))
    .pipe(browserSync.stream())
}


const mineTasks = gulp.parallel(copy, html, fonts, scss, js, image);
const dev = gulp.series(reset, mineTasks, gulp.parallel(watcher, server));

gulp.task('default', dev)