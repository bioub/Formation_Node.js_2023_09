import fs from 'node:fs/promises';

try {
  const buffer = await fs.readFile('.gitignore');
  await fs.writeFile('.gitignore.copy', buffer);
  console.log('Copy Async Done');
} catch (err) {
  console.log(err.message);
}
