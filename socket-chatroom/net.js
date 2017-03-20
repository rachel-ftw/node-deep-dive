process.stdout.write('\u001B[2J\u001B[0;0f')

const server = require('net').createServer()

server.on('connection', socket => {
  console.log('Client Connected!')
  socket.write('Welcome new client!! :D\n')
})

server.listen(8000, () => console.log('Server Bound!'))