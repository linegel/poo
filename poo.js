'use strict';
var http = require('http');
var poo = 200;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  function flingPoo(){
    res.write("&#x1f4a9;");
    setTimeout(flingPoo, 200);
  }
  flingPoo();
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
