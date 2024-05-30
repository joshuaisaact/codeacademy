let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');

/*In main.js, the story variable holds the paragraph we’ll be editing. In order to edit the story, we turn it into an array on line 3. The .split() method separates the story string by the space character (' ') and stores each word as an element of the array.

To see the array we’ll be working with throughout the lesson, log storyWords to the console.

After you’ve viewed the storyWords array, comment out the console.log() statement before moving to the next task.

For a better visual comparison of the original and edited stories, we want to view the edited storyWords array as a string. To change the storyWords array back into a readable string, we can invoke the .join() method on storyWords.

Give the .join() method an argument of an empty space character (' ') to separate each array element with a space in the string.

Place the .join() method invocation as an argument of a console.log() statement to log the final story to the console.

Now it’s time to start editing the story by manipulating the storyWords array. We want to be able to see the changes, so be sure your console.log() of the joined story is the last line of code in your editor.

First, above the console.log() statement that uses the .join() method, create a variable named count that stores the number 0.

Directly below count, use a .forEach() method to iterate over the storyWords array. As an argument of the forEach() method, create an empty function to be used as the callback function.

While ES6 arrow syntax is recommended for the callback function, feel free to use any syntax you’re comfortable with.

For each word in the storyWords array, we want the count variable to increment by one.

Add a parameter named word to the callback function of the .forEach() method to be used to store the current element when iterating over the storyWords array. Each time storyWord iterates, increment count by one.

Below the .forEach() method, log count to see how many words are in the story.*/




let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0

/*
A word count of 181 is a bit long for this story. Let’s filter out all instances of the word “literally” to shorten the story and remove the unnecessary word. We will reassign the filtered story to the same storyWords variable by applying the .filter() method! Throughout the project, we’ll use this approach of reassigning the storyWords variable for each revision of the story.

Below where you logged the count variable, reassign the storyWords variable to equal the invocation of the .filter() method on the storyWords array. Give the .filter() method a callback function with a parameter of word.*/

storyWords = storyWords.filter((word) => {
  if (word !== unnecessaryWord) {
    return word
  }
});

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful"
  } else {
    return word
  }
})

let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord
})

storyWords[badWordIndex] = 'really'

console.log(badWordIndex)

let lengthCheck = storyWords.every((word) => {
  return word <= 10
})

let longWord = storyWords.filter((word) => word.length > 10)

console.log(longWord)

console.log(lengthCheck)

storyWords = storyWords.map((word) => {
  if (word === 'breathtaking') {
    return 'stunning'
  } else {
    return word
  }
})

storyWords.forEach((word) => {
  return count++
})

console.log(count)
console.log(storyWords.join(' '))
