// Source: https://www.youtube.com/watch?v=puEtGRHjOLo

const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = htnotp.createServer((req, res) => {
    const stream = fs.createReadStream(file, { encoding: 'utf-8' })
    stream.pipe(res)
})

server.listen(port)
