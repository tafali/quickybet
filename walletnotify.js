const {wnotify} = require('./services/notify')
const args = process.argv.slice(2);
const coin = args[0]
const txid = args[1]

wnotify(coin, txid)