function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplierBonus(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}

var doubler = createMultiplierBonus(20);
var tripler = createMultiplierBonus(20);

function multiplier(one, two) {
  return one * two;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);