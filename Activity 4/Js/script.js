var user = 'George';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Atom reviews';
var greetingEl = document.getElementById('greeting');


greetingEl.textContent = greeting;
var price = 20,
  studentDiscount = .10,
  studentPrice = price - (price * studentDiscount),
  priceEL = document.getElementById("price"),
  studentPriceEl = document.getElementById('student-price');

priceEL.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2); 