console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput == 'bomb') {
    return userInput;
  } else {
     console.log('Please enter either rock, paper, or scissors');
  }
};

function getComputerChoice() {
  const randomnumber = Math.floor((Math.random() * 3))
  if (randomnumber === 0) {
    return 'rock';
  } else if (randomnumber === 1) {
    return 'paper';
  } else {
    return 'scissors'
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a tie!'
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!'
      } else {
        return 'You won!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lost!'
    } else {
      return 'You won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lost!'
    } else {
      return 'You won!'
    }
  } else if (userChoice === 'bomb') {
    return 'You win!'
  }
  }

function playGame() {
  userChoice = getUserChoice('bomb')
  computerChoice = getComputerChoice()
  console.log(userChoice)
  console.log(computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
