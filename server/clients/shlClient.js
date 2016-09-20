const config = require('../../config/localSettings')
const shl = require('open-shl')

const options = {
  clientId: config.client.id,
  clientSecret: config.client.secret
}

const client = shl.connect(options)

console.log('SHL client initiated.')

module.exports = client
