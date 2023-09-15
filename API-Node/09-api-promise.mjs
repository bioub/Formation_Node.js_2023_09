import fs from 'node:fs/promises';

/*
On ne peut pas dire quand les fichiers vont etre lu
donc impossible de les écrires dans un ordre
fs.readFile('.gitignore')
  .then((bufferGitIgnore) => {
    console.log(bufferGitIgnore.toString());
  });

fs.readFile('.prettierrc')
  .then((bufferPrettierrc) => {
    console.log(bufferPrettierrc.toString());
  });
*/

// Promise.all ES2015
// Quand toutes les promesses seront résolues (en succès), l'ensemble est résolu
// et les retours sont dans l'ordre du tableau de départ (pas dans l'ordre de résolution)
// Si l'une des promesses échoue l'ensemble échoue
Promise.all([fs.readFile('.gitignore'), fs.readFile('.prettierrc')]).then(
  ([bufferGitIgnore, bufferPrettierrc]) => {
    console.log(bufferGitIgnore.toString());
    console.log(bufferPrettierrc.toString());
  }
);

const [bufferGitIgnore, bufferPrettierrc] = await Promise.all([
  fs.readFile('.gitignore'),
  fs.readFile('.prettierrc'),
]);
console.log(bufferGitIgnore.toString());
console.log(bufferPrettierrc.toString());

// Promise.allSettled ES2020
// équivalent à Promise.all mais on récupère tous les résultats qu'ils échoue ou pas
// Use case : dashboard dans lequel j'envoie toutes les requetes HTTP en meme
// temps mais on souhaite afficher les résultats partiels si une ou plusieurs requetes
// echouent

// Promise.race ES2015
// Quand la première est résolue (en succès), l'ensemble est résolu et on arrête les suivantes
// on récupère un seul résultats
// si le premier est en erreur l'ensemble échoue
// Use case : faire une opération avec un timeout
// Promise.race([fs.readFile('file.txt').then((buffer) => ({type: 'readline', value: buffer})), setTimeout(3000).then(() => ({type: 'setTimeout'}))])

// Promise.any ES2021
// Quand la première est résolue (en succès), l'ensemble est résolu et on arrête les suivantes
// on récupère un seul résultats
// si le premier est en erreur on attend la suivante
// si elles sont toutes en erreur l'ensemble est en erreur
// Use case :
// Ping de plusieurs serveurs pour connaitre le plus rapide
// Si le premier retour est une erreur on attend le suivant
