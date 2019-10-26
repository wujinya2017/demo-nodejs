#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      qs = require('querystring')

http.createServer((req,res)=>{
  console.log('request URL:',req.url);

  //var addr = url.parse(req.url);
  var addr = url.parse('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');
  console.log('protocol:',addr.protocol);
  console.log('auth:',addr.auth);
  console.log('username:',addr.username);
  console.log('password:',addr.password);
  console.log('host:',addr.host);
  console.log('port:',addr.port);
  console.log('hash:',addr.hash);
  console.log('path-name:',addr.pathname);
  console.log('path parse:',addr.pathname.split('/'));
  console.log('query string:',addr.query);
  console.log('qs parse:',qs.parse(addr.query));
  res.end('OK!');
}).listen(8080);
