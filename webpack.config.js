/* eslint-env node */
let target = process.env.npm_lifecycle_event

// find environment
if (target === 'build') {
  target = 'prod'
} else if (target === 'start') {
  target = 'dev'
} else {
  // fallback
  target = 'common'
}

module.exports = require(`./config/webpack.${target}.config.js`)
