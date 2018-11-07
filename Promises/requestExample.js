var request = require('request');

// At the moment we have all written our BUsBoard code to use a lot of callbacks and winding logic.
// The call stack gets very deep with this approach!

function makeRequest(url, callback) {
  request(url, function (error, response, body) {
    return response.result;
  });
}

function getLongLont(postcode) {
  // Do somthing async, then callback the next function with the result
  makeRequest("postcodeUrl", longLat => getStopPoints(longLat))
}

function getStopPoints(longLat) {
  // Do somthing async, then callback the next function with the result
  makeRequest("longLatUrl", stopPoints => getBuses(stopPoints))
}

function getBuses(stopPoints) {
  // Do somthing async, then callback the next function with the result
  makeRequest("busesUrl", longLat => getStopPoints(longLat))
}

// We'd like to write...

var longLat = getLongLat(postcode);
var stopPoints = getStopPoints(longLat);
var buses = getBuses(stopPoints);

console.log(buses);

// But these functions do not finish in time...

// So we use promises!

function requestPromise(url) {
  request(url, function (error, response, body) {
    return response.result;
  });
}

function getLongLont(postcode) {
  // Do somthing async, then callback the next function with the result
  return requestPromise("postcodeUrl")
}

function getStopPoints(longLat) {
  // Do somthing async, then callback the next function with the result
  return requestPromise("longLatUrl")
}

function getBuses(stopPoints) {
  // Do somthing async, then callback the next function with the result
  return requestPromise("busesUrl")
}

getLongLat(postcode)
  .then(longLat => {return getStopPoints(longLat)})
  .then(stopPoints => {return getBuses(stopPoints)})
  .then(buses => {return console.log(buses)})