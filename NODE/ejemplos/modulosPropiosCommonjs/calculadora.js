/*module.exports = {
  suma: function (a, b) {
    return a + b;
  },
  resta: function (a, b) {
    return a - b;
  },
}; */

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

const operaciones = {
  suma: suma,
  resta: resta,
};

module.exports = operaciones;
