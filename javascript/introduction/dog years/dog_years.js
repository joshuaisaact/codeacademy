/*  This code is to calculate my age in dog years, assuming the first two years of my life are equivalent to 10.5 dog years each, and the rest are equivalent to 4 dog years 

This line of code is my age in the form of a number object. */

const myAge = 33

// This is a mutable variable with the value 2, to account for the first two years of a dog's life.

let earlyYears = 2

// The first two years of a dog's life count as 10.5 dog years each.

earlyYears = earlyYears * 10.5

// The first two years of my life would be equivalent to 10.5 dog years, so I need to exclude them from the final calculation, as we have already included them

let laterYears = myAge - 2

// This multiplies the laterYears variable by four to get the number of dog years I am in age, disregarding the first two.

laterYears *= 4

// Checking my work so far

console.log(earlyYears)
console.log(laterYears)

// Now to sum the early and later years to get my total age in dog years!

const myAgeInDogYears = earlyYears + laterYears

// This takes a new string variable, my name, and makes it lower case.

let myName = 'Josh'

myName = myName.toLowerCase()

// String interpolation to print my name and age in dog years to the console.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

