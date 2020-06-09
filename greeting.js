var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'GoOD MoRNing!';
} else {
    greeting = 'WElComE!';
}
document.write('<h3>' + greeting + '</h3>')