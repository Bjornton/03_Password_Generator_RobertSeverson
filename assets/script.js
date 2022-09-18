// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const randomLowercase = () => {
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

const randomUppercase = () => {
  const uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
   "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

   return uppercase[Math.floor(Math.random() * uppercase.length)];
}

const randomSpecialCharacter = () => {
  const SpecialCharacter = [ "!", "@", "#", "$", "^", "%", "&", "*", "(", ")", "{", "}", "[",
   "]", "=", "<", ">", "/", "?", ",", ".", "-", "_", "+", "~", "`"];

   return SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length)];
}

var getPasswordLength = () => {
  let passwordLengthString = 
  promt ("What is the length of the password? (The password must be at least 8 characters long and at most 128 characters long)");

  return parseInt(passwordLengthString, 10);
}

var validatePasswordLength = (passwordLength) => {
  if(Number.isNaN(passwordLength)) {
    alert("Please type out a number");
    return false;
  } else if (passwordLength < 8 && passwordLength > 128){
    alert("Please enter a number that is equal to or greater than 8, or a number that is equal to or less than 128");
    return false;
  } else {
    return true;
  }
  
}
