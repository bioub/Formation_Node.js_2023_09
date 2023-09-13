// exporter les 4 fonctions

exports.getRandom = function getRandom() {
  return Math.random();
}

exports.getRandomArbitrary = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

exports.getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

exports.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
