function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(num, func) {
  var score = 0;
  if (func === doubler) {
    score = doubler(num);
  } else if (func === tripler) {
    score = tripler(num)
  }
  return function() {
    score;
}

var doubler = createMultiplier(4, doubler);

function doubler(num) {
  return num * 2;
}

function tripler(num) {
  return num * 3;
}