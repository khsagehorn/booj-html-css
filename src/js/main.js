// jquery test
$(document).on('ready', function(){

  aboutActive();
});

// es6 test
const PI = 3.14;

// mocha test
function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function aboutActive() {
  $('#about').toggleClass('active');
} 