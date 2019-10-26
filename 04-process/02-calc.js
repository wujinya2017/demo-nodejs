#!/usr/bin/node


const log = console.log,
      fn = process.argv[2];//返回一个数组，且获取的是下标为2的元素

if(typeof(fn) === 'undefined' || fn === '--help' || fn === '-h'){
  const msg = '' 
  + 'usage: cmd-name [OPTION] [expression]\n'
  + 'evaluate the expression.\n'
  + '\n'
  + 'Mandatory arguments to long options are mandatory for short options too.\n'
  + '-h, --help output help information and exit\n';
   log(msg);
}else{
  try {
    log(fn + '=%s', eval(fn));     
  } catch(e) {
    console.error('%s 不是合法的数学表达式！',fn);   
  }
}
