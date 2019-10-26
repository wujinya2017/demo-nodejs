#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you have pressed Ctrl+C');
  process.exit();
});


process.on('SIGTSTP',()=>{
  console.log('you have pressed Ctrl+Z');
});

process.stdin.resume();//输入流模式默认关闭，需要resume开启
