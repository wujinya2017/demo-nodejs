#!/usr/bin/node
const http = require('http'),
      qs   = require('querystring');

var isLogin;
var logincount = 1;
http.createServer((req, res) => {
  var data = '';

  if(typeof req.headers['cookie'] === 'undefined') {
    isLogin = false;
  } else {
    var pair = req.headers['cookie'].split('=');
    isLogin = (pair[1] === 'true');
  }

  if(req.method === 'POST' && req.url === '/login') {
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      var account = qs.parse(data);

      if(account.username === 'zhangsan' && account.pwd === '123') {
        console.log('user: %s, password: %s', account.username, account.pwd);
        isLogin = true;
        showHome(res);
        ++logincount;
                            
      } else {
        showLogin1(res);
        ++logincount; 
      }
    });
  }

  if(req.method === 'GET') {
    if(isLogin) {
      if(req.url === '/logout') {
        isLogin = false;
        res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);
        showLogin(res);
      } else {
        showHome(res);
       
      }
    } else {
      showLogin(res);
      
    }
  }
}).listen(8080);

function showLogin(res) {
    var html = '<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
        + '<meta charset="UTF-8">'
        + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
        + '<title>Document</title>'
    + '</head>'
    + '<body>'
        + '<form action="/login" method="post">'
            + '<input type="text" name="username" />'
            + '<input type="pwd" name="pwd" />'
            + '<input type="submit" value="login" />'
        + '</form>'
    + '</body>'
    + '</html>';



  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function showHome(res) {
  var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>home</title>'
            + '  </head>'
          + '    <body>'
          + '       <span>zhangsan这是您第</span>'
          +             logincount
          + '        <span>次登陆</span>'
          + '       <a href="/logout">logout</a>'
          + '    </body>'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);

  res.statusCode = 200;
  
  res.end(html);
}



function showLogin1(res) {
    var html = '<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
        + '<meta charset="UTF-8">'
        + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
        + '<title>Document</title>'
    + '</head>'
    + '<body>'
        + '<form action="/login" method="post">'
            + '<input type="text" name="username" />'
            + '<input type="pwd" name="pwd" />'
            + '<input type="submit" value="login" />'
            + '<p>用户名或密码错误，请重新登录！</p>'
        + '</form>'
    + '</body>'
    + '</html>';



  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}
