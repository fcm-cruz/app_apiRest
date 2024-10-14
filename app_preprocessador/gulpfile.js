let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let sass = require("gulp-sass")(require("sass"));

// compila o SAA (.scss)
gulp.task(
    "sass", 
    gulp.series(() => {
        return gulp
            .src(["src/scss/*.scss"])
            .pipe(sass())
            .pipe(gulp.dest("src/css"))
            .pipe(browsersync.stream());
    }),
);

// Servidor que monitora os arquivos .html e scss

gulp.task(
    "server",
    gulp.series([], () => {
        browsersync.init({
            server: "src",
        });
    
    gulp.watch(["src/scss/*.scss"], gulp.parallel(["sass"]));

    gulp.watch(["src/*.html", "src/css/*.css"]).on("change", gulp.parallel(browsersync.reload));
    }),
);

gulp.task("default", gulp.series(["server"]));