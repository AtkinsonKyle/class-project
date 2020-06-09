var preference = prompt('Codefellows is great, do you agree?')
var message;

if (preference === 'yes'){
  message = 'Whoo!';
} else if (preference === 'no'){
  message = 'Away with you!';
} else {
  message = 'Fine, your opinion is unneccesary!';
}

document.write('<h3>' + message + '</h3>')