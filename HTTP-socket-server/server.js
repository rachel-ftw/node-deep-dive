const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  switch(request.url) {
    case '/':
      const filePath = path.join(__dirname, './public/index.html')
      const fileStat = fs.statSync(filePath)

      response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': fileStat.size
      })
      // console.log('youre at index!')

      const readStream = fs.createReadStream(filePath)
      readStream.pipe(response)
      break

    case '/hello':
      const helloFilePath = path.join(__dirname, './public/hello.html')
      const helloFileStat = fs.statSync(helloFilePath)

      response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': helloFileStat.size
      })

      const helloReadStream = fs.createReadStream(helloFilePath)
      helloReadStream.pipe(response)
      break
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
  if(error) {
    return console.error('Error: ', error)
  }
  console.log(`server is listening on ${port}`)
})