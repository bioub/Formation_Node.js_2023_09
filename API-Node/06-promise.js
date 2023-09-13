const fs = require('node:fs/promises');

/*
fs.readFile('.gitignore')
  .then((buffer) => {
    fs.writeFile('.gitignore.copy', buffer)
      .then(() => {
        console.log('Copy Async Done');
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

/*
fs.readFile('.gitignore')
  .then((buffer) => {
    return fs.writeFile('.gitignore.copy', buffer)
  })
  .then(() => {
    console.log('Copy Async Done');
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

fs.readFile('.gitignore')
  .then((buffer) => fs.writeFile('.gitignore.copy', buffer))
  .then(() => console.log('Copy Async Done'))
  .catch((err) => console.log(err.message));
