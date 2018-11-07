function multiply(x, y, callback) {
  setTimeout(function() {
    let result = x * y;
    callback(result)
  }, 2000)
}

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

multiply(3, 4, result => {
  let x = sum(result, 6);
  let y = square(x);
  console.log(y)
});

multiply(3, 4, result => {
  let x = square(result);
  let y = sum(x, 6);
  console.log(y)
});