#!/usr/bin/node

const Radio = require('./05-radio'),
      log = console.log;

const station = {
  freq:'106.8',
  name:'music1 radio'
};

var radio = new Radio(station);

radio.on('play',(station)=>{
  log('%s FM %s opened!',station.name,station.freq);
  log('lalal...');
});

radio.on('stop',(station)=>{
  log('%s FM %S closed!',station.name,station.freq);
})
