#!/usr/bin/node
//第一次读文件；然后从存储中读，省磁盘
const http = require('http'),
      fs = require('fs');

var buf = {};

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;

  //console.log(req.url);
  var filename = __dirname + req.url;
  console.log(filename);
  if(!fs.existsSync(filename)) return;

  if(!buf[filename]){
    console.log('read file');
    buf[filename] = fs.readFileSync(filename);
  }
  res.end(buf[filename]);
}).listen(8080);


