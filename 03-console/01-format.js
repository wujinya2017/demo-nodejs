#!/usr/bin/node
const user = {
  
  Name:'吴金雅',
  Age:20,
  QQ:'2601519403'
};

const log = console.log;

log('Name:%s',user.Name);//字符串类型
log('Age:%d',user.Age);//整数类型
log('WangDing Info JSON:%j',user);//对象类型

log('QQ:%s',user.QQ);//占位符输出
log('QQ:',user.QQ);//逗号间隔，多变量输出
log('QQ: '+user.QQ)//拼接字符串输出
log(`QQ:${user.QQ}`);//模板字符串输出
