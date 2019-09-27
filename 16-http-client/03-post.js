#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      log  = console.log,
      addr = 'http://localhost:8080/',
      msg = process.argv[2];

var options = url.parse(addr);
options.method = 'POST';

var req = http.request(options, (res) => {
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');

    res.pipe(process.stdout);

});

req.end(msg);
