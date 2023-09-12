// objets préinstanciés :

// Langage JS
console.log(typeof Math);
console.log(typeof JSON);

// Node.js
console.log(typeof process);

// En JS l'objet est dynamique

// On peut ajouter, modifier ou supprimer des clés/valeurs
console.log(Math.sum);
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));

delete Math.random;
// console.log(Math.random()); <-- ERREUR

// MAUVAISE Pratique de modifier des objets du langage, de la plateforme

// Pour créer un objet
// 2 systèmes :

// 1 - Object Literal
// Use case :
// - pour les objets qui sont instancié 1 seule fois
// - pour des objets instanciés plusieurs sans méthodes
const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
console.log(coords.y); // 2

coords.z = 3;
console.log(coords.z); // 3

const coords1 = {
  x: 1,
  y: 2,
};

const MyMath = {
  sum(a, b) {
    return a + b;
  },
};


MyMath.sum(1, 2);
// 2 - Constructor (fonction constructor)
// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.name}`
// }

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.name);
console.log(romain.hello());

// delete romain.random;
// delete Contact.prototype.hello;

console.log(romain.hasOwnProperty('name'));
console.log(romain.hasOwnProperty('hello'));
