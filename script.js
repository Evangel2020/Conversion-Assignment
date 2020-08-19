//welcome message
alert('Hey! Are you ready to do some calculation?')
//declare variables and prompt user to enter numbers
var age= prompt('Enter your age');
var last= prompt('Enter your last two number of your phone number');
//Add the two number
var sum = Number(age)+Number(last); 
//alert with the result
alert('The result of your calculation is ' + sum);
//Show the result on the webpage
document.write('The result of your calculation is ' + sum);
//display result to console
console.log('sum')
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';