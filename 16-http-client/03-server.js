#!/usr/bin/node
const http = require('http');

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log(' ');

  req.pipe(process.stdout);

  res.end('hello client!');
}).listen(8080);
