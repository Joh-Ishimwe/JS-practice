//Create a variable named myAge and store my age in it.
const myAge = 23;

//Create a variable named earlyYears and store the value 2 in it.
let earlyYears = 2;

//Let's the multiplication assignment operator to multiply and reassign it to earlyYears.
earlyYears *= 10.5;

//Let's set the result equal to a variable called laterYears.
let laterYears = myAge - 2;

//Let's multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;

//Let's check whether it works.
console.log(`Early years: ${earlyYears}`);
console.log(`Later years: ${laterYears}`);

//Let's adding earlyYears and laterYears togetherto get my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//let Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
let myName = 'Josiane Ishimwe'.toLowerCase(); 

//Write a console.log statement that displays your name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

