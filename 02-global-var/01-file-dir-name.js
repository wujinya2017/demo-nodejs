#!/usr/bin/node

console.log('dir name:', __dirname);
console.log('file name:', __filename);

//operate data file
var file = __dirname + "/data/db.xml";
console.log('file name:',file);

//windows data file
file = __dirname + "\\data\\db.xml";
console.log("file name in windows:",file);


const path = require('path');

file = path.join(__dirname,'data','db.xml');
console.log('path join file name',file);


