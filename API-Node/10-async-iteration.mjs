// function setTimeout(delay) {
//   return new Promise((resolve, reject) => {
//     globalThis.setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// setTimeout(1000).then(() => {
//   console.log('setTimeout 1s');
// })

// function setInterval(delay) {
//   return new Promise((resolve, reject) => {
//     globalThis.setInterval(() => {
//       resolve();
//     }, delay);
//   });
// }

// setInterval(1000).then(() => {
//   console.log('setInterval 1s');
// })

import { setTimeout, setInterval } from 'node:timers/promises';
import { createInterface } from 'node:readline/promises';

await setTimeout(1000);
console.log('setTimeout 1s');

// for await (const _ of setInterval(1000)) {
//   console.log('setInterval 1s');
// }

const rl = createInterface({
  input: process.stdin,
})

console.log('Quel est le nombre ? ');
for await (const answer of rl) {
  console.log('Vous avez répondu : ' + answer);
  console.log('Quel est le nombre ? ');
}

// for await (const answer of rl.question('Quel est le nombre ? ')) {
//   console.log('Vous avez répondu : ' + answer);
// }

// concept équivalent : Observables (RxJS)
