
const { src, dest, watch, parallel, series } = require("gulp");
const sync = require("browser-sync").create();


function copy(cb) {
    console.log("copy")
    src('src/**/*.js')
        .pipe(dest('demo/js'));
    cb();
}

function browserSync(cb) {
    console.log("browserSync")
    sync.init({
        server: {
            baseDir: "./demo"
        }
    });
    watch("./demo/js/*.js").on('change', sync.reload);
    cb();
}

function watchFiles(cb) {
    console.log("watchFiles")
    watch([ 'src/**/*', '!node_modules/**'], parallel(copy));
    //cb();
}

//const clean     = () => del([ 'demo/js' ]);
const build     = series(parallel(browserSync), watchFiles);
exports.watch   = watchFiles;
exports.sync    = browserSync;
exports.default = build
