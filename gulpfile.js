const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css

function style() {
  // 1. Where is my scss file?
  return (
    gulp
      .src(["node_modules/bootstrap/scss/bootstrap.scss", "./scss/**/*.scss"])
      // 2. Pass that file through sass compiler
      .pipe(sass())
      // 3. Where do I save the compiled CSS?
      .pipe(gulp.dest("./public/css"))
      // 4. stream changes across all browsers
      .pipe(browserSync.stream())
  );
}

// Move the javascript files into our js folder(doesn't work, don't know why. Had to include cdn links, instead of compiling with gulp)
function development() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js"
    ])
    .pipe(gulp.dest("./js"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(
    ["node_modules/bootstrap/scss/bootstrap.scss", "./scss/**/*.scss"],
    style
  );
  gulp.watch(
    [
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js"
    ],
    development
  );
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./public/css/*.css").on("change", browserSync.reload);
  gulp.watch("./js/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.development = development;
exports.watch = watch;
