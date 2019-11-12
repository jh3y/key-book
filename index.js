const mirror = keys =>
  Object.freeze(keys.reduce((obj, key) => ({ ...obj, [key]: key }), {}));

module.exports = mirror;
