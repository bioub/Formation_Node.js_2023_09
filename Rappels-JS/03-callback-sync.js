const names = ['Romain', 'Eric', 'Jean'];

function hello(name) {
  return `Hello ${name}`;
}

// programmation impérative (for / if)
for (const n of names) {
  if (n.length === 4) {
    console.log(hello(n));
  }
}

// programmation fonctionnelle
names.filter((n) => n.length === 4)
    .forEach((n) => console.log(hello(n)))

console.log('FIN');
// call stack
// ^
// |
// |
// |[=>][=>][=>][=> ][=> ]
// |[filter    ][forEach ][lg]
// +---------------------------------> temps
//              Jean Eric FIN
