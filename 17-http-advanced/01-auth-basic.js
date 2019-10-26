#!/usr/bin/node

const http = require('http'),
      log  = console.log,
      assert = require('assert');

http.createServer((req, res) =>{
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
  switch(req.url){
  case '/admin':
    var auth = req.headers.authorization;
    if(typeof auth !== 'undefined'){
      var usr = getUserNamePwd(auth);
      if(usr.username === 'wangding' &&usr.password === '123'){
        showSecret(res);
      }else{
        res.statusCode = 401;
        res.setHeader('www-authenticate','basic');
        showNormal(res);
      }
  }
  else{
      res.statusCode = 401;
      res.setHeader('www-authenticate','basic');
      showNormal(res);
  }
  break;
  default :
      showNormal(res);
    break;
  }

  var auth = req.headers.authorization;
  getUserNamePwd(auth);
 
  res.end('OK!');
}).listen(8080);

function showNormal(res){
  res.end('everything is ok');
}

function showSecret(res){
  res.end("hello I'am wujinya with mobile: 13513467682");
}

function getUserNamePwd(auth){
  log('authorization:',auth);
  if(typeof auth !== 'undefined'){
    var usr = auth.split(' ');
    if(usr[0] === 'Basic'){
      var buf = new Buffer(usr[1],'base64');
      var usr = buf.toString('utf8').split(':');
      log('username:',usr[0]);
      log('password:',usr[1]);
    }
  }
  return{
    username:usr[0],
    password:usr[1]
  }
}
