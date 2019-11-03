#!/usr/bin/node

const http = require("http");
const fs = require("fs");
const url = require('url');
const assert = require('assert');
//const text = require('a.txt');


var userList = [
  {username: "admin", pwd: "admin"}
];

http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;
  var path1 = path.split('/');
  var path2 = path1.slice(2);
  var path3 = '../'+path2.join('/');
  var dirpath = __dirname+path;
  var dirpath1 = dirpath.split('.')[1];

  switch(dirpath1){
    case 'css':
      var data = fs.readFileSync(path3);
      res.writeHead(200,{'Content-type':'text/css;charset=UTF-8'});
      res.end(data);
     
      break;
    case 'jpeg':
      var data = fs.readFileSync(path3);
      res.writeHead(200,{'Content-type':'image/jpeg;charset=UTF-8'});
      res.end(data);
      break;
    case 'jpg':
      var data = fs.readFileSync(path3);
      res.writeHead(200,{'Content-type':'application/x-jpg;charset=UTF-8'});
      res.end(data);
      break;
    case 'js':
      var data = fs.readFileSync(path3);
      res.writeHead(200,{'Content-type':'application/x-javascript;charset=UTF-8'});
      res.end(data);
      break;
    default:
      break;
  }
  if(req.url =='/list/'){
   fs.readFile("../chapterList.html",function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
      res.end(data);
   });
  }else if (req.url == "/login/"){
    fs.readFile("../login.html",function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
      res.end(data);   
    
    });
  }else if (req.url == "/listmanager/"){
    fs.readFile("../list.html",function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
      res.end(data);
    });
  }else if (req.url == "/addChapter/"){
    fs.readFile("../addChapter.html",function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
      res.end(data);
    });
  }else{
    fs.readFile('../.'+req.url,function(err,data){
        res.end(data);
    });
  }
 

}).listen(8080);

function password(req,res){
  var postdata = '';
  req.on('data',(data)=>{
    postdata += data;
    console.log(postdata);
    postdata = qs.parse(postdata);
  })
  req.on('end',()=>{
    if(postdata == 'wujinya'){
      console.log(123);
    }
  })
}

