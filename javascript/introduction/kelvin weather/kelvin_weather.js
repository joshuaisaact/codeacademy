// This is a constant variable that describes the current temperature in Kelvin

const kelvin = 283

// This line converts kelvin to celsius

const celsius = kelvin - 273

// This calculates Fahrenheit. We will round it so will need to use let rather than const.

let fahrenheit = celsius * (9 / 5) + 32

// This uses the .floor() method from the Math object to round the output of the previous line of code.

fahrenheit = Math.floor(fahrenheit)

// This uses string interpolation to log the temperature in fahrenheit to the console

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

// Some extra practise - this will convert celsius to the newton scale

let newton = celsius * (33 / 100)

// This rounds down the result of the previous line of code using the Math object

newton = Math.floor(newton)

// This logs the temperature in newton to the console using string interpolation

console.log(`The temperature is ${newton} on the Newton scale`)
