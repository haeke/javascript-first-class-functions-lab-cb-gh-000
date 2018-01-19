function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}

var doubler = createMultiplier(20);
var tripler = createMultiplier(20);

function multiplier(one, two) {
  return one * two;
}

var doublerWithBind = multiplier.bind(null, 2);
