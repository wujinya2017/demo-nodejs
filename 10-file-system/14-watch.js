#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];
//watch 监控目录；watchFile监控文件

fs.watch(dst,function(evt,file){
  console.log('%evt happend with file:%s',evt,file);
});
