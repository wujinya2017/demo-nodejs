#!/usr/bin/node

function Radio(station){
  var _Listeners = {};

  setTimeout(()=>{
    emit('play',station);
  },0);
  setTimeout(()=>{
    emit('stop',station);
  },5000);

  function emit(evt,arg){
    if(typeof(_Listeners[evt]) === 'undefined'){
      console.error('Error:%s not undefined',evt);
      process.exit(1);
    }

    _Listeners[evt].forEach((fn)=>{
      fn.call(this,arg);
    });
  }
  //注册
  this.on = (evt,fn)=>{
    if(typeof _Listeners[evt] === 'undefined'){
      _Listeners[evt] = [];
    }
    _Listeners[evt].push(fn);
  };
}

module.exports = Radio;
