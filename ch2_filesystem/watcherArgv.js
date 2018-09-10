'use strict';

const fs = require('fs');

const fileName = process.argv[2];

if (!fileName) throw Error('Yo, you must specify a filename, brah!');

fs.watch(fileName, () => console.log(`yo brah, ${ fileName } has changed, yo!`));

console.log('ey! I\'m watchin\' for changes heya');
