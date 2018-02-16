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

## HTTP Client

## HTTP Collect

## Juggling Async

## Time Server

## HTTP File Server

## HTTP Uppercaser

## HTTP JSON API Server
