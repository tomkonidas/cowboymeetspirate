'use strict';

// Depenencies ----------------------------------------------------------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');


// File Destinations ----------------------------------------------------------
const target = {
    //src
    srcHTML: 'src/*.html',
    srcFavicon: 'src/favicon/*',
    srcSASS: 'src/sass/*.sass',
    srcJS: 'src/js/*.js',
    srcIMG: 'src/images/*',
    //dist
    dist: 'dist/',
    distCSS: 'dist/assets/css/',
    distJS: 'dist/assets/js/',
    distIMG: 'dist/assets/images/'
};



// Minification & Concatination -----------------------------------------------

// HTML
gulp.task('html', () => {
    gulp.src(target.srcHTML)
        .pipe(gulp.dest(target.dist))
        .pipe(browserSync.stream());
});

// Bring over items
gulp.task('transfer', () => {
    gulp.src([target.srcFavicon])
        .pipe(gulp.dest(target.dist))
        .pipe(browserSync.stream());
});

// Sass
gulp.task('sass', () => {
    return gulp.src('src/sass/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(target.distCSS))
        .pipe(browserSync.stream());
});

// Javascript
gulp.task('js', () => {
    gulp.src(target.srcJS)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(target.distJS))
        .pipe(browserSync.stream());
});

// Images
gulp.task('image', () => {
    gulp.src(target.srcIMG)
        .pipe(imagemin())
        .pipe(gulp.dest(target.distIMG))
        .pipe(browserSync.stream());
});



// Clean & Build --------------------------------------------------------------
gulp.task('build', ['js', 'sass', 'image', 'transfer','html']);

gulp.task('clean', () => {
    del([target.dist]).then(paths => {
        console.log('Cleaning project...');
    });
})

// Auto Reload & Watch --------------------------------------------------------
gulp.task('browser-sync', () => {
    browserSync.init({
        server: target.dist
    });
});

gulp.task('watch', ['build','browser-sync'], () => {
    gulp.watch([target.srcSASS], ['sass']);
    gulp.watch([target.srcFavicon], ['transfer']);
    gulp.watch([target.srcJS], ['js']);
    gulp.watch([target.srcIMG], ['image']);
    gulp.watch([target.srcHTML], ['html']);
});

gulp.task('default', ['watch']);