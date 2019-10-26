#!/usr/bin/node
const http = require('http'),
      log = console.log;
/*
http.createServer((req,res)=>{
  log('request headers:',req.headers);
  log('authorization:',req.headers.authorization);

  var auth = req.headers.authorization;

  if(typeof auth !== 'undefined'){
    auth = auth.split(' ');
    if(auth[0] === 'Basic'){
      var buf = new Buffer(auth[1],'base64');
      log('username && password:',buf.toString('utf8'));
    }
  }

  log('user-agent:',req.headers['user-agent']);
  

  res.end('OK!');
}).listen(8080);
*/
http.createServer((req, res) =>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  log('Host:', req.headers.host);// 对象的方式解析请求头字段
  log('User-Agent:', req.headers['user-agent']);// 数组的方式解析请求头字段
  log('Content-Type:', req.headers['content-type']);// 因为变量名中间不能有横线
  log('');

  //req.pipe(process.stdout);

  res.end('OK!');
}).listen(8080);
