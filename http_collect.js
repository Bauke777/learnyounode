const http = require('http')
const concat = require('concat-stream')

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on('error', function(err){
        return console.log(err)
        console.log(err)
    })
    var concatBuffer = concat(function(buffer){
        console.log(buffer.length)
        console.log(buffer)
    })
    response.pipe(concatBuffer)
})
