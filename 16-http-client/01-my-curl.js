#!/usr/bin/node

const http = require('http'),
      addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

http.get(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //print responce header
  console.log(res.headers);
  console.log(' ');
  //print responce body
  res.pipe(process.stdout);
});
