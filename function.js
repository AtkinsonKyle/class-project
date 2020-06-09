function askName() {
    var username = prompt('What is your name?');
    return document.write('<h3>Hello ' + username + '</h3>');
}
function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}
function askPreference() {
    var preference = prompt('Codefellows is great, do you agree?')
    var message;
    if (preference === 'yes') {
        message = 'Whoo!';
    } 
    else if (preference === 'no') {
        message = 'Away with you!';
    }
     else {
        message = 'Fine, your opinion is unneccesary!';
    }
    document.write('<h3>' + message + '</h3>')
    return document.write('<h3>' + message + '</h3>');
}

function logger() {
    var message = 'Hello ';
    return message;
  }
  
  logger();
  
  function logUsername(username) {
    var message = 'Hello ' + username + '!';
    return message;
  }
  
  logUsername('Kyle');
  
  var loggerOne = function() {
    var message = 'Hello ';
    return message;
  }
  
  var logUsernameTwo = function(username){
    var message = 'Hello ' + username + '!';
    return message;
  }

  var buildCake = function(cakeType, frosting, filling){
    var message = ('I need a ' + cakeType + ' cake frosted with ' + frosting + ' frosting and filled with ' + filling + '!');
    return message;
  }
  
  buildCake('red velvet', 'cream cheese', 'vanilla ice cream');