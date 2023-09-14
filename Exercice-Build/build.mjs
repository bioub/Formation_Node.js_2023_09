import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { Buffer } from 'node:buffer';
import url from 'node:url';
import { createHash } from 'node:crypto';
import { minify } from 'terser';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const distPath = resolve(__dirname, 'dist');
const srcPath = resolve(__dirname, 'src');
const horlogeJsPath = resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = resolve(srcPath, 'index.html');
const indexHtmlDistPath = resolve(distPath, 'index.html');
let appJsDistPath = resolve(distPath, 'app.js');

async function rmAndMkdirDist() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);
  console.log('dist created');
}

async function buildJs() {
  const buffers = await Promise.all([fs.readFile(horlogeJsPath), fs.readFile(indexJsPath)]);

  let bufferOrStrToWrite = Buffer.concat(buffers);
  let checksum;

  if (args.minify) {
    const { code } = await minify(bufferOrStrToWrite.toString());
    bufferOrStrToWrite = code;
  }

  if (args.hash) {
    checksum = createHash('md5').update(bufferOrStrToWrite).digest('hex');
    appJsDistPath = appJsDistPath.replace('app.js', `app.${checksum}.js`)
  }

  await fs.writeFile(appJsDistPath, bufferOrStrToWrite);
  console.log('app.js created');
  return checksum;
}

async function buildHtml(checksum) {
  let contentStr = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  contentStr = contentStr.replace('<script src="./js/horloge.js"></script>', '')
    .replace('js/index.js', checksum ? `app.${checksum}.js` : 'app.js');

  await fs.writeFile(indexHtmlDistPath, contentStr);
  console.log('index.html created');
}

try {
  await rmAndMkdirDist();
  const checksum = await buildJs();
  await buildHtml(checksum);
}
catch (err) {
  console.log(err);
}
