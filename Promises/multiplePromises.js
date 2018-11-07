function multiply(x, y) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(x * y)
    }, 2000)
  })
}

function sum(x, y) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(x + y)
    }, 2000)
  })
}

function square(x) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(x * x)
    }, 2000)
  })
}

multiply(3, 4)
  .then(result => {
    console.log(result)
    return sum(result, 6);
  })
  .then(result => {
    console.log(result)
    return square(result);
  })
  .then(result => {
    console.log(result)
  })