function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  var xhttp = new XMLHttpRequest();
 
  xhttp.open('POST', `http://localhost:3000/login?username=${username}&password=${password}`, true);
  
  xhttp.setRequestHeader('Content-Type', 'application/json');
  
  xhttp.onload = function() {
      // Handle response here using e.g. xhttp.status, xhttp.response, xhttp.responseText
      console.log(xhttp.response);
      if(xhttp.status == 200) {
        console.log("Welcome");
      }
  }
  
  xhttp.send();
}

function doSomething() {
  var xhttp = new XMLHttpRequest();
 
  xhttp.open('GET', `http://localhost:3000/dosomething`, true);
  
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.setRequestHeader('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVtaWx5IiwiaWF0IjoxNTQyMTkyNDgwfQ.WcoCwgxI_Yihxs7VCRR8866ng3Yyv7SSLYcbf4q9R6k');
  
  xhttp.onload = function() {
      // Handle response here using e.g. xhttp.status, xhttp.response, xhttp.responseText
      if(xhttp.status == 200) {
        document.getElementById("info").innerHTML = xhttp.responseText;
      } else {
        console.log(xhttp.response);
      }
  }
  
  xhttp.send();
}