"use strict";
// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const tildeImporter = require('node-sass-tilde-importer');

// const webpack = require("webpack");
// const webpackconfig = require("./webpack.config.js");
// const webpackstream = require("webpack-stream");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "."
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./dist/"]);
}

// Optimize Images
function images() {
  return gulp
    .src("./assets/img/**/*")
    .pipe(newer("./dist/img"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest("./dist/img"));
}

function fonts() {
  return gulp
    .src("./assets/fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"))
}
function js() {
  return gulp
    .src("./assets/js/**/*")
    .pipe(gulp.dest("./dist/js"))
}

function css() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded", importer: tildeImporter })
    .on("error", sass.logError))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browsersync.stream());
}
function vendorCss() {
  return gulp
    .src("./assets/css/**/*.css")
    .pipe(gulp.dest("./dist/css/"))
}



// // Lint scripts
// function scriptsLint() {
//   return gulp
//     .src(["./assets/js/**/*", "./gulpfile.js"])
//     .pipe(plumber())
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError());
// }

// // Transpile, concatenate and minify scripts
// function scripts() {
//   return (
//     gulp
//       .src(["./assets/js/**/*"])
//       .pipe(plumber())
//       .pipe(webpackstream(webpackconfig, webpack))
//       // folder only, filename is specified in webpack config
//       .pipe(gulp.dest("./_site/assets/js/"))
//       .pipe(browsersync.stream())
//   );
// }

// Jekyll
// function jekyll() {
//   return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
// }

// Watch files
function watchFiles() {
  gulp.watch("./assets/scss/**/*", gulp.series(css));
  gulp.watch("./assets/css/**/*", gulp.series(vendorCss));
  gulp.watch("./assets/js/**/*", gulp.series(js));
  gulp.watch("./assets/img/**/*", gulp.series(images));
}

// define complex tasks
// const js = gulp.series(scriptsLint);
const build = gulp.series(clean, gulp.parallel(css, js, vendorCss, fonts, images));
const watch = gulp.parallel(watchFiles, browserSync);

const serve = gulp.parallel(
  gulp.series(build, browserSync),
  gulp.series(watchFiles, browserSyncReload),
  // watchFiles,
  // browserSync
)

// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = serve;