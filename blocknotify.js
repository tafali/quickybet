const {bnotify} = require('./services/notify')
const args = process.argv.slice(2);
const coin = args[0]
const bhash = args[1]

bnotify(coin, bhash)