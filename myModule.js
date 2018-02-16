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
