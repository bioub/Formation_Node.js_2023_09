const fs = require('node:fs');

// Sync
// Avantage : simple à lire
// Inconvénient : thread bloqué pendant l'opération
const buffer = fs.readFileSync('.gitignore');
console.log('Sync');
console.log(buffer.toString('utf-8'));

// Async
// Inconvénient : difficile à lire
// Avantage : thread non-bloqué pendant l'opération
fs.readFile('.gitignore', (err, buffer) => {
  console.log('Async');
  console.log(buffer.toString('utf-8'));
});
