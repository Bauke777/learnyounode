const http = require('http')
const [, , url] = process.argv

http.get(url, function (response) {
    response.setEncoding('utf8')
    response.on('error', function(err){
        console.log(err)
    })
    response.on('data', function(data){
        console.log(data)
    })
})


// Eventueel zou dit netter kunnen zijn:
// response.on('data', console.log)
// response.on('error', console.error)
