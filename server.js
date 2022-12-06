const app = require('./app')
const http = require('http')

const port = process.env.PORT || 8080
const server = http.createServer(app)

server.listen(port)
server.on('error', onError)

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  
  let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

//TODO: sonra ac
//setInterval(require('./services/order.service')['checkTimedOut'], 60000)