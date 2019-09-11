#!/usr/bin/node

const chalk = require('chalk'),
      log = console.log;

log('This is '+chalk.red('red.'));
log('This is '+chalk.green('green'));
log('This is '+chalk.red('red')+'This is '+chalk.green('green'));
