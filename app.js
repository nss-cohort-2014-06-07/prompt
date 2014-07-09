var prompt = require('sync-prompt').prompt;
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var full = first + ' ' + last;
console.log('your full name is', full);

var color = prompt('What is your fav color? ');
console.log('your fav color is '+ color + '.');

var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

var humanAge = age * 7;
console.log('your dog is ' + age + ' years old');
console.log('your dog is ' + humanAge + ' human years old');

age = prompt("What is your age? ");
age = parseInt(age);
if(age >= 21){
  console.log('you can drink');
}else{
  console.log('no drink for you');
}

var scale = prompt('What scale are you using (f/c)? ');
var temp  = prompt('What is the temperature? ');

temp = parseInt(temp);
var converted;
var alt;

if(scale === 'f'){
  converted = (temp - 32) * 5/9;
  alt = 'c';
}else{
  converted = (temp * 9/5) + 32;
  alt = 'f';
}

console.log(temp + scale + ' -> ' + converted + alt);

var lbs = prompt('Weight in lbs? ');
var height = prompt('Height in inches? ');

lbs = parseInt(lbs);
height = parseInt(height);
var bmi = (lbs/(height*height)) * 703;
console.log('your bmi is', bmi.toFixed(1));

