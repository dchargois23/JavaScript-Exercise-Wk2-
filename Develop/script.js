//Universal Variables go here
//var computerOutput= #
//var userInput = #
//Prompt
var charSet = "qwertyuiopasdfghjklzxvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var numSet = "1234567890";
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//var passwordLength = prompt("Please select a passweod length? (Between 8-128 characters)");
// Assignment Code
var userInput = prompt(
  "Please select a password length? (Between 8-128 characters)"
);
var upperCase = confirm("Do you want to include upper case letters?");
if (upperCase === false) {
  charSet = charSet.toLowerCase();
  var userGuessUpper = charSet[Math.floor(Math.random() * charSet.length)];
}

else {
  var userGuessLower = charSet[Math.floor(Math.random() * charSet.length)];
}

var specialCharacters = confirm("Would you like any special characters?");
if (specialCharacters === true) {
  var userSpSel = charSpecial[Math.floor(Math.random() * charSpecial.length)];
}

var numbers = confirm("Would you like numbers in your password?");
if (numbers === true) {
  var userNum = numSet[Math.floor(Math.random() * numSet.length)];
}


function characterGen() {
  console.log(userGuessLower || userGuessUpper, userSpSel, userNum);


}




characterGen();
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





