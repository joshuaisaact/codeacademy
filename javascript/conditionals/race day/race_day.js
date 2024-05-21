let raceNumber = Math.floor(Math.random() * 1000);

//Create a variable that indicates whether a runner registered early or not.

//Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.

let registeredEarly = false;

//Create a variable for the runner’s age and set it equal to a number.

//You’ll change this later as you test different runner conditions.

let runnerAge = 18;

//Create a control flow statement that checks whether the runner is an adult AND registered early.

//Add 1000 to their raceNumber if this is true.

if ((runnerAge > 18) && (registeredEarly === true)) {
    raceNumber += 1000;
}

if ((runnerAge > 18) && (registeredEarly === true)) {
  console.log('You will race at 9:30am, your race number is ' + raceNumber)
} else if ((runnerAge > 18) && (registeredEarly === false)) {
  console.log('You will race at 11:00am, your race number is ' + raceNumber)
} else {
  console.log('Please come and speak to us at the registration desk')
}
