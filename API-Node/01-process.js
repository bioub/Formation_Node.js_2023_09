const process = require('node:process');

// node 01-process.js --name Romain
console.log(process.argv);

// Current Working Dir (la ou se trouve le terminal)
console.log(process.cwd()); // lecture
process.chdir(__dirname); // écriture
console.log(process.cwd());

const env = process.env.NODE_ENV ?? 'development';

console.log(process.platform); // win32, darwin, linux...

console.log(process.uptime());
process.exit(0);
