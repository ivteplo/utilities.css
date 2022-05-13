const { task, src, dest, series, ...gulp } = require("gulp")

const sass = require("sass")
const gulpSass = require("gulp-sass")(sass)

const build = () =>
  src("sources/main.scss")
    .pipe(gulpSass({ onError: console.error }))
    .pipe(dest("build/"))

const rebuildOnChange = () => gulp.watch("sources/**/*", build)

const watch = () => {
  build()
  rebuildOnChange()
}

module.exports = { build, watch }
