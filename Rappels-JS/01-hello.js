const names = ['Romain', 'Eric', 'Jean'];

function hello(name) {
  return `Hello ${name}`;
}

for (const n of names) {
  console.log(hello(n));
}
