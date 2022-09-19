// Assignment Code
var generateBTN = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Adds random function to the password
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + (rand * max))
}
 
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Main function
function generatePassword() {
 
  while (true) {
    var userInput = window.prompt("Enter how long you would like the password to be. (The password must be at least 8 characters and at most 128 characters).")
 
    if (userInput === null) {
      return
    }
 
    var passwordLength = parseInt(userInput);
    
    // Checks if the input is within the limits.
    if (isNaN(passwordLength)) {
      window.alert("Please enter a number.")
    } else if( passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length. Please enter a number between 8 and 128.")
    } else {
      break
    }
  }

  // Prompts the user to choose what their password will include
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
 
  // List of all the characters
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "^", "%", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "?", ",", ".", "~", "`", "-", "_", "+"]
 
  var options = []

  // Takes the options that the user chose and puts passes them to the generator
  if (userWantsLowercase === true) {
    options.push(lowercaseList)
  }
 
  if (userWantsUppercase === true) {
    options.push(uppercaseList)
  }
 
  if (userWantsNumbers === true) {
    options.push(numberList)
  }
 
  if (userWantsSymbols === true) {
    options.push(symbolList)
  }
 
  if (optionsCart.length === 0) {
    options.push(lowercaseList)
  }
 
  var generatedPassword = ""
 
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
 
  return generatedPassword
 
}

// Add event listener to generate button
generateBTN.addEventListener("click", writePassword);