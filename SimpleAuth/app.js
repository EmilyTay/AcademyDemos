const express = require('express');
const userRepo = require('./userRepo.js');
const tokenHelper = require('./tokenHelper.js');

const app = express()
const port = 3000
const router = express.Router();

app.use('/', express.static('frontend'));

router.post('/login', (req, res) => {
  let username = req.query.username;
  let password = req.query.password;
  if (!username || !password) {
    res.status(400).send({errors: ['Query params must contain both `username` and `password`']})
  } else {
    if (userRepo.doesUserExist(username, password)) {
      res.status(200).send({
        message: `Welcome, ${username}!`,
        token: tokenHelper.createTokenForUser(username)
      })
    } else {
      res.status(400).send({errors: ['Unable to match username and password to a valid user']})
    }
  }
})

router.use((req, res, next) => {
  const token = req.headers['x-access-token'];
  console.log("request");
  if (tokenHelper.isTokenValid(token)) {
    console.log("valid");
    next();
  } else {
    console.log("not valid");
    return res.status(403).send({
      success: false,
      message: 'Invalid token'
  });
  }
})

app.use(router);

app.get('/dosomething', function (req, res) {
  var x = "5";
  res.send(x);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))