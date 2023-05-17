// Copyright (c) 2022-2023 Ivan Teplov

const { task, src, dest, series, ...gulp } = require("gulp")

const sass = require("sass")
const gulpSass = require("gulp-sass")(sass)

const minify = require("gulp-clean-css")
const rename = require("gulp-rename")

const build = () =>
  src("sources/main.scss")
    .pipe(gulpSass({ onError: console.error }))
    .pipe(dest("build/"))
    .pipe(minify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("build/"))

const rebuildOnChange = () => gulp.watch("sources/**/*", build)

const watch = () => {
  build()
  rebuildOnChange()
}

module.exports = { build, watch }
