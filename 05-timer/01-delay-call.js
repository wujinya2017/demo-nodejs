#!/usr/bin/node
/*
function Bomb() {
    this.message = 'Bomb';
}

Bomb.prototype.explode = function() {
    console.log(this.message);
};

var bomb = new Bomb();

var timeID = setTimeout(bomb.explode.bind(bomb), 2000);

clearTimeout(timeID);
*/

function Bomb(id) {
    var _id = id, timeID;
    this.start = () => {
          console.log('#%d It will bomb after 3 second!', _id);
          timeID = setTimeout(()=>{
              console.log('#%d Bomb!', _id);                   
          }, 3000);         
    };
    this.clear = () => { clearTimeout(timeID);  };
}

var b1 = new Bomb(1);
b1.start();

var b2 = new Bomb(2);
b2.start();
setTimeout(b2.clear, 1000);
