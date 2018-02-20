# learnyounode
My submitted code for all learnyounode exercises

## Hello World
```javascript
console.log("HELLO WORLD")
```

## Baby Steps
```javascript
var total = 0

for ( var i = 2; i < process.argv.length; i++ ){
    total += Number(process.argv[i])
}

console.log(total)
```

## My First I/O
```javascript
var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()

var split = str.split('\n')

console.log(split.length - 1)
```

## My Async First I/O
```javascript
var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if ( err ) throw err
  console.log( data.split('\n').length - 1 )
});
```

## Filtered LS
```javascript
var fs = require('fs')
var directory = process.argv[2]
var filter = process.argv[3]

function byFileExtension( file ) {

    if ( !file.includes('.') ) return

    var extension = file.substr( file.lastIndexOf( '.' ) + 1 )

    return extension === filter

}

fs.readdir( directory, function ( err, files ) {

    if ( err ) throw err
    files.filter( byFileExtension )
        .forEach( el => {
            console.log( el )
        } )

})
```

## Make It Modular

### make_it_modular.js
```javascript
const mymodule = require('./myModule')
const [, , dir, fltr] = process.argv

mymodule( dir, fltr, ( err, data ) => {
    if ( err ) {
        console.error( err )
        return
    }
    data.forEach( el => {
        console.log( el )
    } )
 });
```

### myModule.js
```javascript
const fs = require('fs')

function filterFiles (dir, fltr, callback) {

    function byFileExtension( file ) {

        if ( !file.includes('.') ) return

        const extension = file.substr( file.lastIndexOf( '.' ) + 1 )

        return extension === fltr

    }

    fs.readdir( dir, function ( err, files ) {

        if (err) return callback(err);
        const filesFiltered = files.filter( byFileExtension )

        callback( null, filesFiltered )

    })

}

module.exports = filterFiles
```

## HTTP Client

```javascript
const http = require('http')
const [, , url] = process.argv

http.get(url, function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)
```

## HTTP Collect
```javascript
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
```

## Juggling Async
```javascript
const http = require('http');
const bl = require('bl');
const async = require('async');

const urls = process.argv.slice(2);

async.eachSeries(urls, function(url, next) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      data = data.toString();
      console.log(data);
      next();
    }));
  });
});

// Or without the use of third-party libraries like the challenge asks you to
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
```

## Time Server
```javascript
const net = require('net')
const moment = require('moment')

const port = process.argv[2]

const server = net.createServer(socket => {
    const time = moment().format('YYYY-MM-DD HH:mm')
    socket.write(time)
    socket.end('\n')
})

server.listen(port)
```

## HTTP File Server
```javascript
const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = htnotp.createServer((req, res) => {
    const stream = fs.createReadStream(file, { encoding: 'utf-8' })
    stream.pipe(res)
})

server.listen(port)
```

## HTTP Uppercaserer
```javascript
const http = require('http')
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method != 'POST') return res.end('This server only accepts POST')

    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(port)
```

## HTTP JSON API Server
