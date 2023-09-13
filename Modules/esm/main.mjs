import { sum, substract as sub } from './my-math.mjs';
import hello from './hello.mjs';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import chalk from 'chalk';

console.log(import.meta);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log(sum(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(chalk.blue(hello('Romain'))); // Hello Romain
const buffer = fs.readFileSync(path.join(__dirname, '..', '.prettierrc'));
console.log(buffer.toString('utf-8'));
