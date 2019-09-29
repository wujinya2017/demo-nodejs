#!/usr/bin/node
const addr = 'http://www.sian.com/',
      http = require('http');
/*
var isOK = false;

do{
  http.get(addr,function(res){
    //print start line
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    //print responce header
    console.log(res.headers);
    console.log(' ');
    //print responce body
    res.pipe(process.stdout);
  });
  isOK = true;
}while(!isOK);
*/

function get(){
  http.get(addr,function(res){
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    console.log(res.headers);
    console.log(' ');
    res.pipe(process.stdout);
    if(res.statusCode<400 && res.statusCode>=300){
      get(res.headers.location);
    }
  });
}
get(addr);
