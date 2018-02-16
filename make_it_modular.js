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
