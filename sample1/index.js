const http = require('http');
const os = require('os');

http.createServer((req,res) => {
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end(`hello world from ${os.hostname()}`)
}).listen(4000, '0.0.0.0');
