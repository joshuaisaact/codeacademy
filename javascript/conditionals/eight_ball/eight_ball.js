
//In the first line of the program, define a variable called userName that is set to an empty string.

//If the user wants, they can enter their name in between the quotation marks.

let userName = 'Josh';

//Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.

userName === '' ? console.log('Hello!') : console.log('Hello ' + userName + '!');

let userQuestion = 'Will I beat my half marathon PB?';

userName === '' ? console.log(userQuestion) : console.log(userName + ' asks  "' + userQuestion + '"');

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
} 

console.log(eightBall)

