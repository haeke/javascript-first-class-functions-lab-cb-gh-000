function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(func) {
  var score = 0;
  if (func === doubler) {
    score = doubler(num);
  } else if (func === tripler) {
    score = tripler(num)
  }
  return function() {
    console.log("Your score is: " + score);
  }
}

function doubler(num) {
  return num * 2;
}

function tripler(num) {
  return num * 3;
}

var multi = createMultiplier(func);