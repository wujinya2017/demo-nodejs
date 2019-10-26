#!/usr/bin/node

const http = require('http'),
      log = console.log;

var items = [];

http.createServer((req,res)=>{
  log('reqest method:',req.method);
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`)
  log(req.headers);
  log('');
  switch(req.method){
    case 'GET':
      select(res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'DELETE':
      remove(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    default:
      err(res);
  }
  res.end('OK!');
}).listen(8080);

function select(res){
  var data = JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(data);
}

function insert(req,res){
  var item ='';
  req.on('data',(data)=>{
    item += data;
  });
  req.on('end',()=>{
    if(typeof item !== 'undefined'){
      items.push(item);
      res.end('Insert OK!');
    }else{
      res.end('Insert Error!');
    }
  })
}

function remove(req,res){
  //var id = req.url.slice(1,req.url.length);
  //id 1.type 2.range
  //delete id[item]
  //items.splice(id,1);
  //res.end('Delete OK!');

  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }
  var i = parseInt(arg[1]);
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(!items[i]) {
    res.statusCode = 404;
    res.end('Not found');
  } else {
    items.splice(i, 1);
    res.statusCode = 200;
    res.end('Delete OK');
  }
}

function update(req,res){
  //parse url get id 
  
  //parse req get content
  
  //modify items ,items[id] = new content

  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  var item = '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', (chunk) => { item += chunk; });
  req.on('end', () => {
    var i = parseInt(arg[1]);

    if(!items[i]) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      items[i] = item;
      res.statusCode = 200;
      res.end('update OK');
    }
  });
}
