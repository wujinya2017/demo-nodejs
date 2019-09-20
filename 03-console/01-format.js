#!/usr/bin/node
const user = {
  
  Name:'吴金雅',
  Age:20,
  QQ:'2601519403'
};

const log = console.log;

log('Name:%s',user.Name);//字符串类型
log('Age:%d',user.Age);//整数类型
log('WangDing Info:%j',user);//对象类型
