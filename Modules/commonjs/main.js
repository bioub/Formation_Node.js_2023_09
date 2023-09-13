// function(exports, require, module, __filename, __dirname) {
const MyMath = require('./my-math')
const hello = require('./hello')
const fs = require('node:fs');
const chalk = require('chalk');

console.log(MyMath.sum(1, 2)); // 3
console.log(MyMath.sub(1, 2)); // -1
console.log(chalk.blue(hello('Romain'))); // Hello Romain

console.log(12 == "12");

const buffer = fs.readFileSync(__dirname + '/../.prettierrc');
console.log(buffer.toString('utf-8'));

// }
