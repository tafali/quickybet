const app = require('./app')
const http = require('http')

const port = process.env.PORT || 8080
const server = http.createServer(app)

const { Server } = require("socket.io");
const io = new Server(server);
io.on('connection', (socket) => {
  console.log('a user connected');
  //socket.broadcast.emit('Alert', "a user connected");
});

app.get('/paytest', function(request, response) {
  io.emit("pay", 
  {
    "id": 10,
    "betid": 1,
    "optid": 1,
    "addressto": "dasdsdasdasdasdsdsadadsdasdasda",
    "addressfrom": "trfs*******456546b546asdasda",
    "txid": "t234rdrwerwr43w4r54rw4r44w4",
    "amount": "202.000000000000000000",
    "createdAt": "2024-02-11T09:41:48.000Z",
    "updatedAt": "2024-02-11T09:41:48.000Z"
}
);

response.send("OK")

})



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