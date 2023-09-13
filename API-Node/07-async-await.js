const fs = require('node:fs/promises');

async function copyGitIgnore() {
  try {
    const buffer = await fs.readFile('.gitignore');
    await fs.writeFile('.gitignore.copy', buffer);
    console.log('Copy Sync Done');
  } catch (err) {
    console.log(err.message);
  }
}

copyGitIgnore();

/*
async function copyGitIgnore() {
  const buffer = await fs.readFile('.gitignore');
  await fs.writeFile('.gitignore.copy', buffer);
  console.log('Copy Sync Done');
}

copyGitIgnore().catch((err) => console.log(err.message));
*/
