#!/usr/bin/node

const Radio = require('./04-radio'),
      log = console.log;

const station = {
  freq:'8888',
  name:'radio'
};

var radio = new Radio(station);

radio.on('play',(station)=>{
  log('%s FM %s opened!',station.name,station.freq);
  log('lalal...');
});

radio.on('stop',(station)=>{
  log('%s FM %S closed!',station.name,station.freq);
})
