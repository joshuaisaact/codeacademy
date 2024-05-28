/* Create a function named getSleepHours with a single parameter named day.

The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.

*/

function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 9;
    case 'thursday':
      return 8;
    case 'friday':
      return 9;
    case 'saturday':
      return 8;
    case 'sunday':
      return 8;
    default:
      return 0;
  }
}

//Test the function by calling it multiple times and printing the results to the console.

console.log(getSleepHours('friday'))
console.log(getSleepHours('tuesday'))
console.log(getSleepHours('monday'))

//Now that you’ve written a function to get the sleep hours for each night, we need to do three things:

// Get the total sleep hours that you actually slept
// Get the ideal sleep hours that you prefer
// Calculate the sleep debt, if any.

//To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

function getActualSleepHours() {
  let totalSleepHours = 0;
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  for (let day of daysOfWeek) {
    totalSleepHours += getSleepHours(day)
  }

  return totalSleepHours;
}

console.log(getActualSleepHours())

//To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.

//Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.

//You’ll want to multiply by 7 to get the total hours you prefer per week.

function getIdealSleepHours() {
  idealHours = 8
  return idealHours * 7
}

//Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.

//Create a function named calculateSleepDebt with no parameters.

//Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

//Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

//Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:

//If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
//If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
//If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

  if (actualSleepHours === idealSleepHours) {
    console.log('You get a perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You get ${actualSleepHours - idealSleepHours} too much sleep!`);
  } else if (idealSleepHours > actualSleepHours) {
    console.log(`You need ${idealSleepHours - actualSleepHours} more rest!`);
  }
}

calculateSleepDebt()
