const path = require('node:path');

const chemin = 'API-Node/02-os.js';

console.log(path.extname(chemin));
console.log(path.parse(chemin));

console.log(path.join('API-Node', '02-os.js'))
console.log(path.resolve('API-Node', '02-os.js'))


console.log(path.join(__dirname, '02-os.js'))
console.log(path.resolve(__dirname, '02-os.js'))