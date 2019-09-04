#!/usr/bin/node

const log = console.log;

log('CPU:',process.arch);
log('OS:',process.platfrom);
log('PID:',process.execPath);
log('execPath',process.e);
log('node.js var:',process.version);
log('uid:',process.getgid);
log('gid',process.getgid);

process.stdin.on('data',function(data){
  log(data);
});
