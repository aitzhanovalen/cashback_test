const mainConfig = require('./main.json')

const env = process.env.NODE_ENV || 'production'
const envConfig = require(`./${env}.json`)


module.exports = {
    ...mainConfig,
    ...envConfig
}

