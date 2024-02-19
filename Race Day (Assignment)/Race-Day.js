//Let's Race numbers be assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);

//Variable indicating whether a runner registered early or not.
const registeredEarly = false;

//Variable for the runner's age.
const age = 25;

//Control flow statement for early registration and being an adult.
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

//Control flow statement for race time for early adults.
if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
}

//Control flow statement for late adults.
else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
}

//Control flow statement for youth registrants.
else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
}

//Else statement for runners exactly 18 years old.
else {
  console.log('Please see the registration desk.');
}
