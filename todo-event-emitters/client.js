const EventEmitter = require('events')
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new EventEmitter()
const server = require('./server')(client)