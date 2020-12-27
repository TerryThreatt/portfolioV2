const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/terrythreatt/Dropbox/Development/portfolioV2/.cache/dev-404-page.js"))),
  "component---node-modules-wkocjan-gatsby-theme-intro-src-pages-404-js": hot(preferDefault(require("/Users/terrythreatt/Dropbox/Development/portfolioV2/node_modules/@wkocjan/gatsby-theme-intro/src/pages/404.js"))),
  "component---node-modules-wkocjan-gatsby-theme-intro-src-templates-index-js": hot(preferDefault(require("/Users/terrythreatt/Dropbox/Development/portfolioV2/node_modules/@wkocjan/gatsby-theme-intro/src/templates/index.js")))
}

