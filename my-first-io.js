var fs = require('fs'),
    port = process.argv[2],
    path = process.argv[3];

var server = fs.readFileSync(port)
console.log(port)
console.log(server.toString().split('\n').length-1)
