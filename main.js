//Here’s how you convert your age from “human years” to “dog years”:

// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.

// created a variable to hold the value of my age
const myAge = 22;

// created a variable to hold dog years
let earlyYears = 2;
earlyYears *= 10.5;

// distracting myAge by 2 to give you the later years of dogs
let laterYears = myAge - 2 ; 

// used the multiplication assignment operator to multiple by 4 and assign the result to the variable I created 
laterYears *= 4;

// checking my work
// console.log(earlyYears);
// console.log(laterYears); 

//Added the value of two variables together and stored the result in a new variable 
myAgeInDogYears = earlyYears + laterYears;

 myName = "Amina".toLowerCase(); 

 console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);