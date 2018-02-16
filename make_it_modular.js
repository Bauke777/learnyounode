var fs = require('fs')
var directory = process.argv[0]
var extension = process.argv[1]
var callback = process.argv[2]

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
