// Assignment code here
function generatePassword() {
var passwordLink = prompt("When Prompted for the lenght of the password, Then choose a password with atleast 8 charactors and no more than 128 characters");


var lowercase =confirm ("When asked for character types to include in the password, Then please confirm wether or not to include lowercase");
var uppercase =confirm ("When asked for charactor types to include in the password,Then please confirm wether or not to include uppercase");
var numeric = confirm ("When asked for charactor types to include in the password,Then please confirm wether or not to include numeric");
var specialCharacters = confirm ("When asked for charactor types to include in the password, Then please confirm wether or not to include special charactors");

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);