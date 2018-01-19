function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplierBonus(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}

var doubler = createMultiplier(20);
var tripler = createMultiplier(20);