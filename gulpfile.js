var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries'),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    WebpackDevServer = require("webpack-dev-server");
sourcemaps = require("gulp-sourcemaps");
babel = require("gulp-babel");
concat = require("gulp-concat");
var path = {
    watch: {// за чем следить
        js: 'app/js/**/*.js',
        styles: 'app/scss/**/*.scss'
    },
    src: {// что брать
        styles: 'app/scss/style.scss',
        js: 'app/js/index.js'
    },
    build: {// куда складывать
        js: 'dist/js/',
        styles: 'dist/css/'
    }
};
gulp.task('styles', function() {
    return gulp.src(path.src.styles)
        .pipe(sass({outputStyle: 'expanded', indentType: 'tab', indentWidth: 1}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Safari >= 8'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(csscomb())
        .pipe(gulp.dest(path.build.styles));
});

gulp.task('default', function() {
    gulp.watch(path.watch.styles, ['styles']);
    gulp.watch(path.watch.js, ['webpack']);
});
gulp.task("webpack", function(callback) {
    // run webpack
    webpack(require("./webpack.config.js"),
        function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        // configuration
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});
gulp.task('sass', function(){
    gulp.src('app/sass/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});
