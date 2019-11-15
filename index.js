const mirror = (keys, prefix = '', suffix = '') =>
  Object.freeze(
    keys.reduce(
      (obj, key) => ({
        ...obj,
        [`${prefix}${key}${suffix}`]: `${prefix}${key}${suffix}`
      }),
      {}
    )
  );

module.exports = mirror;
