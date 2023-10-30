// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe ("fibonnacciArray", () => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.", () => {
    expect(fibonnacciArray(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonnacciArray(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// Psuedo code : 
// Create a function and name it fibonnacciArray
// Make a new varaible to be able to .push() our result into it 
// Make a for loop that will iterate as many times as the length of the parameter. Start with i = 2 since newArray will already contain the first two indexes. 
// get the value at the index -1 by one then add that with the value at the index of the array - 2. Then use .push() to save that value into the next index from newArray.
// create a conditional statement to verify that the arguement passed is bothe greater than 2 and that it is a number and return the newArray if those conditions are met.
 // if the conditions of the if statment are not met, then return a string telling the user to input an arguement meeting the conditions.
const fibonnacciArray = (num) => {
  let newArray = [1, 1]

  for ( let i = 2; i < num; i++ ) {
    newArray.push(newArray[i - 1] + newArray[i - 2])
  }
  if (num > 2 && typeof num === 'number')
  { 
    return newArray
  }
  else 
  {
    return "Please input a number or a variable with a value grater than 2."
  }
}
console.log(fibonnacciArray(fibonacciLength1))
console.log(fibonnacciArray(fibonacciLength2))


// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("objInOrder", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
    expect(objInOrder(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objInOrder(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
} )


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function named objInOrder
// have the parameter named object to display that an object is the arguement that should be passed
// assign a variable (minutes) that will be assigned an array of the objects values. Object.values(object): this is used to get values in an object that are numbers and it puts them into an array
// make an if statement to verify that the arguement being passed is an object. If it is not return a string telling the user to pass an object as the arguement.
// if it meets the conditions for the if statement, then return the array (minutes) sorted from leat to greatest. use .sort((a, b) => a - b) to do this: this sorts them from least to greatest. We must use a,b => a-b in the paranthesis because it would think 100 is smaller than other numbers like only 25 because it would look at the first number and see that 2 is bigger than 1.

const objInOrder = (object) => {
  const minutes = Object.values(object)
  if(typeof object === "object"){
   return minutes.sort((a, b) => a - b)
  }
  else 
  {
   return "Please enter an object as the arguement"
  }
}
console.log(objInOrder(studyMinutesWeek1))
console.log(objInOrder(studyMinutesWeek2))

