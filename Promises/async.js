function doEverything(x, y) {
  setTimeout(function() {
    let result = x * y;
    sum(result, 6)
  }, 2000)
}

function sum(x, y) {
  let result = x + y;
  square(result);
}

function square(x) {
  console.log(x * x);
}

doEverything(3, 4);