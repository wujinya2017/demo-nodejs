#!usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[2];

fs.renameSync(src,dst);
