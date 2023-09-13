# Exercice Build

## Principe

Ecrire un script de build dans le style de votre choix (synchrone, asynchrone, promise, async/await)

## Avant de commencer

* Installer les dépendances : `npm install`
* Pour démarrer le serveur de dev : `npm run serve:dev`
* Pour builder : `npm run build`
* Pour démarrer le serveur de prod (fichiers buildés) : `npm run serve:prod`


## Etapes

### 0 - Mettre à jour les dépendances avec npm

Utiliser `npm audit` pour connaître les dépendances directes ou indirectes dont une version contient une faille de sécurité connue.

Utiliser `npm outdated` pour connaître les dépendances ayant besoin d'être mises à jour parmi nos dépendances directes : `del`, `fs-extra`, `http-server`, `md5` `uglify-es`.

Mettre à jour vers la version `WANTED` en utilisant `npm update`.

Supprimer la bibliothèque `del` avec la commande `npm rm`, pour afficher l'aide `npm rm --help`. Supprimer ensuite le `require` de `del` dans le fichier `build.js`

Supprimer la bibliothèque `fs-extra` avec la commande `npm rm`, remplacer ensuite le `require` de `fs-extra` par `require('fs/promises')`

Remplacer `uglify-es` par `terser` (attention à l'installer dans les `devDependencies`. Remplacer le `require` de `uglify-es` par `const { minify } = require("terser");`

Migrer les dépendances restantes via `npm install`.

### 0 - Mettre à jour les dépendances avec Yarn

Migrer le `package-lock.json` en `yarn.lock` avec `yarn import`

Utiliser `yarn audit` pour connaître les dépendances directes ou indirectes dont une version contient une faille de sécurité connue.

Utiliser `yarn outdated` pour connaître les dépendances ayant besoin d'être mises à jour parmi nos dépendances directes : `del`, `fs-extra`, `http-server`, `md5` `uglify-es`.

Mettre à jour vers la version `WANTED` en utilisant `yarn upgrade` ou  `yarn upgrade-interactive`.

Supprimer la bibliothèque `del` avec la commande `yarn remove`, pour afficher l'aide `npm rm --help`. Supprimer ensuite le `require` de `del` dans le fichier `build.js`

Supprimer la bibliothèque `fs-extra` avec la commande `yarn remove`, remplacer ensuite le `require` de `fs-extra` par `require('fs/promises')`

Remplacer `uglify-es` par `terser` (attention à l'installer dans les `devDependencies`. Remplacer le `require` de `uglify-es` par `const { minify } = require("terser");`

Migrer les dépendances restantes via `yarn add [package]`.

### 1 - Supprimer le dossier dist (s'il existe)

Vous pouvez utiliser la méthode `rm` de `fs/promises` avec les options `force` et `recursive` (pas besoin de tester qu'il existe, `rm` ne génèrant pas d'erreur lorsque le dossier/fichier n'existe pas)

### 2 - Créer le dossier dist

Vous pouvez utiliser la méthode `mkdir` de `fs/promises`

### 3 - Builder le JS

Copier le contenu des fichiers `src/js/horloge.js` et `src/js/index.js` dans un fichier `dist/app.js`, dans cet ordre.

### 4 - Builder le HTML

Copier le fichier `src/index.html` dans `dist/index.html` en remplaçant les balises script de dev par celle de prod (`app.js`).

Indication : readFile retourne un type `Buffer`, pour le convertir en `string` : `buffer.toString()`

### 5 - Minifier le JS (Optionnel)

Utiliser la bibliothèque `terser` pour réduire le poids du fichier js de prod : [https://www.npmjs.com/package/terser#api-reference](https://www.npmjs.com/package/terser#api-reference)

### 6 - Renommer le fichier JS (Optionnel)

Utiliser le module md5 pour signer le fichier `app.js` et remplacer son nom par le checksum md5 (pour invalider le cache), exemple : `app.5da8aa7126701c9840f99f8e9fa54976.js`

### 7 - Ajouter des options (Optionnel)

Installer et utiliser `yargs` ou `minimist` pour qu'on puisse lancer la commande avec les options suivantes :

* `--minify` pour minifier le JS ou non
* `--hash` pour ajouter le checksum dans le nom du fichier ou non

Exemple : `node build --minify --hash`
