let userName = '';

//Let take an example of name 
userName = 'Jane';
//Create a ternary expression to decide what to do based on whether the user enters a name or not.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Create a variable named userQuestion.
const userQuestion = "Are you ready?"; 

//Write a console.log() for the userQuestion and stating what was asked.
console.log(`${userName ? userName + ' asks' : 'Someone asks'}, "${userQuestion}"`);

//Generate a random number between 0 and 7 for the Magic Eight Ball's answer.
const randomNumber = Math.floor(Math.random() * 8);

//Let's create a variable named eightBall and set it equal to an empty string.
let eightBall = '';

//Let's create a control flow that assigns eightBall to a reply based on the value of randomNumber.
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}

//Let's print the Magic Eight Ball’s answer by using console.log().
console.log(`The Magic Eight Ball says: ${eightBall}`);
