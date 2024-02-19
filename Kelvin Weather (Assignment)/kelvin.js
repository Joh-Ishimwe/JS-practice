//Declare a constant variable called kelvin and set it equal to 293.
const kelvin = 293;

//Formular to Convert Kelvin to Celsius.
const celsius = kelvin - 273;

//Formular to calculate Fahrenheit temperature from cesius value and then store value in a variable named fahrenheit

let fahrenheit = celsius * (9 / 5) + 32;

//Removes the decimals using the .floor() method.
fahrenheit = Math.floor(fahrenheit);

// Log forecasted temperature using console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// let's Set kelvin to 0 and check the temperature in Fahrenheit.
const kelvin0 = 0;
const celsius0 = kelvin0 - 273;
let fahrenheit0 = celsius * (9 / 5) + 32;
fahrenheit0 = Math.floor(fahrenheit0);
console.log(`At 0 Kelvin, the temperature is ${fahrenheit0} degrees Fahrenheit.`);

//Extra practice of Converting celsius to the Newton scale.

let newton = celsius * (33 / 100);

//To round Newton temperature.
newton = Math.floor(newton);

// Log the temperature in Newton to the console.
console.log(`The temperature is ${newton} degrees Newton.`);
