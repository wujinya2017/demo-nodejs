#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2],
      dir2 = process.argv[3];

if(dir == 'list'){
  console.log('[');
  for(var i=0;i<fs.readdirSync(__dirname).length;i++){
    console.log('   {"fileName":'+'"'+fs.readdirSync(__dirname)[i]+'","fileSize":"'+fs.statSync(fs.readdirSync(__dirname)[i]).size+'"}');
  }
  console.log(']');
}else if(dir == 'mkdir'){
  if(dir2 == 'folder'){
    if(!fs.existsSync(dir2)){
      fs.mkdirSync(dir2);
    }
  }
}else{
  console.log('命令行参数错误！');
}
