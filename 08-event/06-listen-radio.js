#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
    this.track = track;
      this.playing = false;
      this.events = {
            play: 'play',
            stop: 'stop'          
      };
        
      for(var methodName in EventEmitter.prototype) {
            console.log(methodName);
            this[methodName] = EventEmitter.prototype[methodName];       
      }
}

MusicPlayer.prototype = {
  toString: () => {
    if(this.playing) {
        return 'Now Playing: ' + this.track;           
    } else {
        return 'Stopped';           
    }   
  }
};

var radio= new MusicPlayer('storm');
var e = radio.events;

radio.on(e.play, () => {
    this.playing = true;
    console.log('\n', this.toString());
});
radio.on(e.stop, () => {
    this.playing = false;
    console.log('\n', this.toString());
});
radio.emit(e.play);
setTimeout(() => {
    radio.emit(e.stop);
}, 2000);
