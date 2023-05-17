// Copyright (c) 2022-2023 Ivan Teplov

const fs = require("node:fs/promises")
const path = require("node:path")
const sass = require("sass")

const projectRoot = path.dirname(__dirname)
const packageInfo = require("../package.json")

const sourceFile = path.join(projectRoot, packageInfo.sass)
const defaultOutputFile = path.join(projectRoot, packageInfo.style)
const minifiedOutputFile = path.join(projectRoot, packageInfo.minifiedStyle)

const styles = {
  expanded: "expanded",
  compressed: "compressed"
}

/**
 * @param {"expanded" | "compressed"} style
 */
async function build(style) {
  const result = await sass.compileAsync(sourceFile, {
    sourceMap: false,
    style: style
  })

  const file = style === styles.compressed
    ? minifiedOutputFile
    : defaultOutputFile

  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, result.css)
}

exports.build = build

async function main() {
  const style = process.argv.length > 2
    ? process.argv[2]
    : styles.expanded

  if (!Object.values(styles).includes(style)) {
    console.error(`Invalid output style: ${style}`)
    return
  }

  const timerName = "Built the library in"

  console.log(`Building (output style: ${style})`)
  console.time(timerName)

  await build(style)

  console.log("Build finished")
  console.timeEnd(timerName)
}

if (require.main === module) {
  main().catch(console.error)
}
