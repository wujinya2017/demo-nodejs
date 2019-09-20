#!/usr/bin/node

const fs = require('fs'),
      log = console.log;

const width = 16,
      height = 16;

var pixelByteSize = width * height * 4;
var totalSize = pixelByteSize + 54;

var buf = new Buffer(totalSize);

buf.fill(0);

// head
log(buf.write('BM'));
log(buf.writeUInt32LE(totalSize, 0x02));
log(buf.writeUInt32LE(54, 0x0a));
log(buf.writeUInt32LE(40, 0x0e));
log(buf.writeUInt16LE(1, 0x1a));
log(buf.writeUInt16LE(32, 0x1c));
log(buf.writeUInt32LE(pixelByteSize, 0x22));
log(buf.writeInt32LE(width, 0x12));
log(buf.writeInt32LE(height, 0x16));

// data
for(var i=54; i<totalSize; i+=4) {
   buf.writeUInt32LE(0xff0000ff, i);
}

fs.writeFile('./out.bmp', buf, (err) => {
    if(err != null) {
        console.error(err);
        process.exit(1);
    }
});

