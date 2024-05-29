//Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

let input = "It's time to speak like you are a whale!"

//Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword. Note: The use of this array will be more apparent within the following steps.

const vowels = ["a", "e", "i", "o", "u"]

//Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

let resultArray = []

//Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

for (i = 0; i < input.length; i++) {

//Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs. This will enable you to check each letter of input against all the vowels elements during each iteration.
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
   if (input[i] === 'u') {
    resultArray.push(input[i])
  }
  for (v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      resultArray.push(input[i])
    }
  }
}

let resultString = resultArray.join('');
resultString = resultString.toUpperCase();

console.log(resultString)
