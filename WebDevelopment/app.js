const express = require('express')
const app = express()
const port = 3000

// These 2 endpoints return a simple text string
// app.get('/hello', (req, res) => res.send('Hello World!'))
// app.get('/bye', (req, res) => res.send('Bye World!'))

// This endpoint exposes all the static resources in the frontend directory
// app.use('/frontend', express.static('frontend'));
app.get('/', function(req, res) {
  res.sendFile('./frontend/index.html');
});

// This endpoint performs some logic and returns a variable to the client
app.get('/dosomething', function (req, res) {
  var x = 5;
  res.send(x);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//cahnges