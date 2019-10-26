#!/usr/bin/node

const  mgs = ['Name','QQ','Email'];

var usr={},i=1;

console.log(mgs[0]);

process.stdin.on('data',function(data){

  usr[mgs[i-1]] = data.slice(0,data.length-1).toString('utf-8');
  if(i === mgs.length){
    process.exit();
  }
  console.log(mgs[i++] + ':');
});

process.on('end',function(){
  console.log(usr);
})
