// function(exports, require, module, __filename, __dirname) {
const MyMath = require('./my-math')
const hello = require('./hello');

console.log(MyMath.sum(1, 2)); // 3
console.log(MyMath.sub(1, 2)); // -1
console.log(hello('Romain')); // Hello Romain

// }
