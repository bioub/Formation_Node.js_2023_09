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
  rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    // rejouer
    jouer();

    // arrête le programme :
    // rl.close();
  });
}

jouer();

// call stack
// ^
// |
// |                                         [question]                   [question]
// |[question]                               [jouer]                      [jouer]
// |[jouer   ] ...                           [taskAnswer] ...             [taskAnswer] ...
// +-----------------------------------------ENTREE-----------------------ENTREE-> temps
//
