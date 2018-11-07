// Exercise - make the sum function asynchronous as well. Does a promise help?

function multiply(x, y) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(x * y)
    }, 2000)
  })
}

function sum(m, n) {
  return m + n;
}


function square(x) {
  return x * x;
}

const promise = multiply(3, 4)

multiply(3, 4)
  .then(result => {
    x = sum(result, 6)
    y = square(x)
    console.log(y)
  })

multiply(3, 4)
  .then(result => {
    let x = square(result);
    let y = sum(x, 6);
    console.log(y);
  })