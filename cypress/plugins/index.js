const wp = require("@cypress/webpack-preprocessor")
const path = requir("path")

module.exports = on => {
  const options = {
    webpackOptions: require(path.resolve(__dirname, "../..//webpack.config.js"))
  }
  on("file:preprocessor", wp(options))
}
