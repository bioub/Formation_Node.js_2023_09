function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// import d'un API (ici readline)
const readline = require('node:readline');

// configuration de l'abstraction (où je lis la ligne ?)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  // pose une question
  // - la question s'affiche de façon synchrone
  // - la réponse est attendue en asynchrone
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = Number.parseInt(answer, 10)

    if (!Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();

// call stack
// ^
// |
// |                                         [question]                   [question]
// |[question]                               [jouer]                      [jouer]
// |[jouer   ] ...                           [taskAnswer] ...             [taskAnswer] ...
// +-----------------------------------------ENTREE-----------------------ENTREE-> temps
//
