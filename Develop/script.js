//Universal Variables go here
//var computerOutput= #
//var userInput = #
//Prompt
var charSet = "qwertyuiopasdfghjklzxvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var numSet = 1234567890;
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//var passwordLength = prompt("Please select a passweod length? (Between 8-128 characters)");
//var numbers = confirm("Do you want to inlucde numbers?");
// Assignment Code
var userInput = prompt(
  "Please select a passweod length? (Between 8-128 characters)"
);
for (var i = 0; i < userInput; i++) {
  var num = Math.floor(Math.random() * 5) + 1;
  console.log(num);
}
var upperCase = confirm("Do you want to include upper case letters?");
if (upperCase === false) {
  charSet = charSet.toLowerCase();
  var computerGuessUpper = charSet[Math.floor(Math.random() * charSet.length)];
  console.log(computerGuessUpper);
} else {
  var computerGuessLower = charSet[Math.floor(Math.random() * charSet.length)];
  console.log(computerGuessLower);
}
var specialCharacters = confirm("Do want to include special characters?");
if (specialCharacters === true) {
  var userSpSel = charSpecial[Math.floor(Math.random() * charSpecial.length)];
  console.log(userSpSel);
}

var numbers = confirm("Do you want number in your password?");
if (numbers === true) {
  var userSpSel = charSpecial[Math.floor(Math, random() * numSet.length)];
}








var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
