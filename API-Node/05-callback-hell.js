const fs = require('node:fs');

// Sync
// Avantage : simple à lire
// Inconvénient : thread bloqué pendant l'opération
try {
  const buffer = fs.readFileSync('.gitignore');
  fs.writeFileSync('.gitignore.copy', buffer);
  console.log('Copy Sync Done');
} catch (err) {
  console.log(err.message);
}

// Callback Hell / Pyramid of Doom
fs.readFile('.gitignore', (err, buffer) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile('.gitignore.copy', buffer, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy Async Done');
      }
    })
  }
});
