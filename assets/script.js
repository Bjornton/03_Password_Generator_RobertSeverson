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
 
function generatePassword() {
 
  while (true) {
    var userInput = window.prompt("Enter how long you would like the password to be. (The password must be at least 8 characters and at most 128 characters).")
 
    if (userInput === null) {
      return
    }
 
    var passwordLength = parseInt(userInput);
 
    if (isNaN(passwordLength)) {
      window.alert("Please enter a number.")
    } else if( passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length. Please enter a number between 8 and 128.")
    } else {
      break
    }
  }

// Add event listener to generate button
generateBTN.addEventListener("click", writePassword);