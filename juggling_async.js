// Gebruikte bron: https://www.youtube.com/watch?v=IkySe5IoZtU

const http = require('http')
const bl = require('bl')
const async = require('async')

const urls = process.argv.slice(2)

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
