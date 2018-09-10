'use strict';

const fs = require('fs');

fs.watch('target.txt', () => console.log('The file has changed'));

console.log('Now watching target.txt for changes');
