#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;

  //console.log(req.url);
  var filename = __dirname + req.url;
  console.log(filename);
  res.end(fs.readFileSync(filename));
}).listen(8080);
