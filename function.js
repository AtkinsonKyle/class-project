function askName() {
    var username = prompt('What is your name?');
    return document.write('<h3>Welcome' + username + '</h3>');
}

function greeting() {
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
    return document.write('<h3> ' + greeting + '</h3>');
}

function getCount() {
    var count = prompt('How many would you like?');

    while (isNaN(count) || count === '') {
        count = prompt('Please enter the exact number you would like.');
    }
    return count;

}

function getProduct() {
    var response = prompt('Would you like to buy a meme or game?')
    var item;
    while (response !== 'meme' && response !== 'game') {

    }
    if (response === 'game') {
        item = '<img src="controller.jpg">';
    }
    if (response === 'meme') {
        item = '<img src="code-meme.jpg">';
    }
    return item;
}

function showOrder() {
    var result = ''
    var itemType = getProduct();
    var total = getCount();

    for (var i = 0; i < total; i++) {
        result = result + '<p>' + itemType + '</p>';
    }

    return document.write(result);
}

//function askPreference() {
//    var preference = prompt('Codefellows is great, do you agree?')
//    var message;
//    if (preference === 'yes') {
//        message = 'Whoo!';
//    }
//    else if (preference === 'no') {
//        message = 'Away with you!';
//    }
//    else {
//        message = 'Fine, your opinion is unneccesary!';
//    }

//    return document.write('<h3>' + message + '</h3>');
//}