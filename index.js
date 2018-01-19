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