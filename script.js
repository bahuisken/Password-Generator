// character type arrays
var pwdUpperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var pwdLowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var pwdNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var pwdSpecialChars = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", '"', "'", "<", ">", ",", ".", "/", "?"];

function generatePassword() {
  //prompt for pwd length
  var pwdLength = parseInt(prompt('Your Password must be at least 8 characters and no longer 128. Enter a number between 8 and 128'));

  //error if not in range
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Please choose a number between 8 and 128")
  }


}
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
