const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Compile SCSS to CSS with sourcemaps
function compileSass() {
    return gulp.src('./styles/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            silenceDeprecations: ['legacy-js-api'], // Ignore legacy JS API warnings
        }).on('error', sass.logError)) // Handle errors
        .pipe(sourcemaps.write('./')) // Write sourcemaps
        .pipe(gulp.dest('./css')) // Output the CSS
        .pipe(browserSync.stream()); // Stream changes to BrowserSync
}

// Minify CSS
function minifyCss() {
    return gulp.src('./styles/index.scss')
        .pipe(sass.sync({
            outputStyle: 'compressed', // Compress the output CSS
            silenceDeprecations: ['legacy-js-api'], // Ignore legacy JS API warnings
        }).on('error', sass.logError)) // Handle errors
        .pipe(cleanCSS()) // Minify the CSS
        .pipe(rename({ suffix: '.min' })) // Rename the minified file
        .pipe(gulp.dest('./css')) // Output the minified CSS
        .pipe(browserSync.stream()); // Stream changes to BrowserSync
}

// Serve and watch files for changes
function serve() {
    browserSync.init({
        proxy: "http://mhswebsite.local/" // Local by Flywheel site URL
    });

    gulp.watch('./styles/**/*.scss', gulp.series(compileSass, minifyCss)); // Watch for SCSS changes
    gulp.watch('./*.php').on('change', browserSync.reload); // Reload on PHP changes
}

// Define default task
exports.default = gulp.series(gulp.parallel(compileSass, minifyCss), serve);