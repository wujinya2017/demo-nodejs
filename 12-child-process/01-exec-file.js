#!/usr/bin/node

const cp = require('child_process');

cp.execFile('cat', ['01-exec-file.js'], (err, stdout) => {
    if(err) console.error(err);
      console.log(stdout);
});
