#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  var html = ''
  + '<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
        + '<meta charset="UTF-8">'
        + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        + '<title>hello world</title>'
    + '</head>'
    + '<body>'
        + '<h1>hello world！</h1>'
    + '</body>'
    + '</html>';

  if(req.url === '/'){
    //200 ok
    res.writeHead(200,
      {'Content-Type':'text/html',
        'Content-length':Buffer.byteLength(html,'utf8')
      });
    res.end(html);
  }else{
    //404 not found
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');

    res.end('error');
  }
  res.end('OK!');
}).listen(8080);
