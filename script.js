// Assignment Code
var generateBtn = document.querySelector("#generate");
// character type arrays
var pwdUpperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var pwdLowerChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
var pwdNumbers = '0123456789'.split('');
var pwdSpecialChars = '`!@#$%^&*()-_+={}[]|\\:;"\"<>./?'.split('');

function writePassword() {
  var allChars = [];
  var requiredChars = [];
  var pwdFinal = [];
  //prompt for pwd length
  var pwdLength = parseInt(prompt('Your Password must be at least 8 characters and no longer 128. Enter a number between 8 and 128'));

  //error if not in range
  if (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
    alert('Please choose a number between 8 and 128');
    return;
  }

  //Collect users choices
  var pwdUpperChoice = confirm('Do you want the password to contain Uppercase Characters? Click OK for Yes, Cancel for No.');
  var pwdLowerChoice = confirm('Do you want the password to contain Lowecare Characters? Click OK for Yes, Cancel for No.');
  var pwdNumberChoice = confirm('Do you want the password to contain Numbers? Click OK for Yes, Cancel for No.');
  var pwdSpecialChoice = confirm('Do you want the password to contain Special Characters? Click OK for Yes, Cancel for No.');

  // THEN my input should be validated and at least one character type should be selected
  if (pwdUpperChoice === false && pwdLowerChoice === false && pwdNumberChoice === false && pwdSpecialChoice === false) {
    alert('You must make at least 1 choice. Click OK and then Generate Password');
    return;
  }

  if (pwdUpperChoice){
    var randRequired = Math.floor(Math.random()*pwdUpperChars.length);
    requiredChars.push(pwdUpperChars[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdUpperChars)
    console.log(allChars);
  }

  if (pwdLowerChoice){
    var randRequired = Math.floor(Math.random()*pwdLowerChars.length);
    requiredChars.push(pwdLowerChars[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdLowerChars)
    console.log(allChars);
  }

  if (pwdNumberChoice){
    var randRequired = Math.floor(Math.random()*pwdNumbers.length);
    requiredChars.push(pwdNumbers[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdNumbers)
    console.log(allChars);
  }

  if (pwdSpecialChoice){
    var randRequired = Math.floor(Math.random()*pwdSpecialChars.length);
    requiredChars.push(pwdSpecialChars[randRequired]);
    console.log(requiredChars);
    allChars = allChars.concat(pwdSpecialChars)
    console.log(allChars);
  }  
  

  var generatePassword = function () {
    for (var i = 0; i < pwdLength-requiredChars.length; i++) {
      var randomNumber = Math.floor(Math.random() * allChars.length);
      // console.log(oneArray[randomNumber]);
      pwdFinal.push(allChars[randomNumber]);
    }
    return pwdFinal.concat(requiredChars).join("");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);