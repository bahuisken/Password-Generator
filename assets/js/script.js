// Setting a variable for the Generate Password Button
var generateBtn = document.querySelector("#generate");
// character type arrays
var pwdUpperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var pwdLowerChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
var pwdNumbers = '0123456789'.split('');
var pwdSpecialChars = '`!@#$%^&*()-_+={}[]|\\:;<>./?'.split('');

function writePassword() {
  //Empty array to be filled with all possible characters
  var allChars = [];
  //empty array to be filled with 1 random character from user selections
  var requiredChars = [];
  // empty array to be filled with random characters from allChars
  var pwdFinal = [];
  //prompt for pwd length
  var pwdLength = parseInt(prompt('Your Password must be at least 8 characters and no longer 128. Enter a number between 8 and 128'));

  //error if not in range
  if (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
    alert('You must choose a number between 8 and 128. Click OK and then Generate Password');
    return;
  }

  //Collect users choices
  var pwdUpperChoice = confirm('Do you want the password to contain Uppercase Characters? Click OK for Yes, Cancel for No.');
  var pwdLowerChoice = confirm('Do you want the password to contain Lowecase Characters? Click OK for Yes, Cancel for No.');
  var pwdNumberChoice = confirm('Do you want the password to contain Numbers? Click OK for Yes, Cancel for No.');
  var pwdSpecialChoice = confirm('Do you want the password to contain Special Characters? Click OK for Yes, Cancel for No.');

  // THEN my input should be validated and at least one character type should be selected
  if (pwdUpperChoice === false && pwdLowerChoice === false && pwdNumberChoice === false && pwdSpecialChoice === false) {
    alert('You must make at least 1 choice. Click OK and then Generate Password');
    return;
  }

  //if user chooses uppercase characters, grab 1 random character for requiredChars array, and pass all characters into allChars array
  if (pwdUpperChoice){
    var randRequired = Math.floor(Math.random()*pwdUpperChars.length);
    requiredChars.push(pwdUpperChars[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdUpperChars)
    console.log(allChars);
  }

  //if user chooses lowercase characters, grab 1 random character for requiredChars array, and pass all characters into allChars array
  if (pwdLowerChoice){
    var randRequired = Math.floor(Math.random()*pwdLowerChars.length);
    requiredChars.push(pwdLowerChars[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdLowerChars)
    console.log(allChars);
  }

    //if user chooses numbers, grab 1 random character for requiredChars array, and pass all characters into allChars array
  if (pwdNumberChoice){
    var randRequired = Math.floor(Math.random()*pwdNumbers.length);
    requiredChars.push(pwdNumbers[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdNumbers)
    console.log(allChars);
  }

  //if user chooses special characters, grab 1 random character for requiredChars array, and pass all characters into allChars array
  if (pwdSpecialChoice){
    var randRequired = Math.floor(Math.random()*pwdSpecialChars.length);
    requiredChars.push(pwdSpecialChars[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdSpecialChars)
    console.log(allChars);
  }  
  
//Function to generate final password
  var generatePassword = function () {
    //For loop to grab random characters from allChars = the length the user desires - the number of required characters
    for (var i = 0; i < pwdLength-requiredChars.length; i++) {
      var randomNumber = Math.floor(Math.random() * allChars.length);
      // pushing random charactees into pwdFinal array
      pwdFinal.push(allChars[randomNumber]);
    }
    //concatenating the pwdFinal array with the requiredChars array and converting from string to array
    return pwdFinal.concat(requiredChars).join("");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);