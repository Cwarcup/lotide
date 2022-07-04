const join = (list) => {
  let joined = '';
  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      joined += list[i];
    } else {
      joined += list[i] + ', ';
    }
  }
  return joined;
};

module.exports = join;