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

   return SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length]
}