// Morden, Jhouvann S.

var http = require('http');
var fs = require('fs');

var pN = process.argv[2];
var ftr = process.argv[3];

var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(ftr);
    stream.pipe(response);
});

server.listen(pN);