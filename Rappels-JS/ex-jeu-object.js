const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min + 1); // The maximum is exclusive and the minimum is inclusive
  },
};

// import d'un API (ici readline)
const readline = require('node:readline');

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    // pose une question
    // - la question s'affiche de façon synchrone
    // - la réponse est attendue en asynchrone
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();
