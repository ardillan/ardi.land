const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const requireEsm = require("esm")(module)

module.exports = {
  ...requireEsm("./gatsby-node-esm.js"),
}
