const flatten = (nested) => {
  const result = [];
  return result.concat(...nested);
};

module.exports = flatten;