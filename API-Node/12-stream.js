const fs = require('node:fs');
const { createGzip } = require('node:zlib');
const readStream = fs.createReadStream('exemple.html');

/*
let paquets = 0;

readStream.on('data', (data) => {
  console.log((++paquets) + ' === ' + data.toString());
})
*/

const writeStream = fs.createWriteStream('exemple.html.zip')

const transformStream = createGzip();

readStream.pipe(transformStream).pipe(writeStream)


// cat exemple.html | gzip > exemple.html.zip
