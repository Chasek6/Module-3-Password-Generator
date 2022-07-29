/* Assignment Code */
// WHEN I click the button to generate a password
//WHEN prompted for password criteria
//THEN I am presented with a series of prompts for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


var generateBtn = document.querySelector('#generate');
/* code to generate random password once button is clicked */
function generatePassword() {

    /* Write password to the #password input */
//  Defining/Declaring Variables
var passwordResult = "";
var numCharactersArr = ['0', '2', '3', '4', '5', '6', '7','8','9'];
var upperCharactersArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCharactersArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specCharactersArr = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var possibleCharacter = [];
var passwordLength = "";
var passwordResults = "";
// input values and validate //
// prompt//
passwordLength = prompt ("Enter the length of your desired password: 8 - 128");
if (passwordLength < 8 || passwordLength > 128) {
    return "Your Secure Generated Password";
}

    alert("Your password will be" + passwordLength + "characters long.");
lowerCharacters = confirm ("would you like to Include lowercase characters in your password?");
    
    upperCharacters = confirm("Would you like to include Uppercase letters.");
   
    numCharacters = confirm("Would you like to include numbers?");
   
    specCharacters = confirm("Would you like to include special Characters?");
   
    if (lowerCharacters === false && upperCharacters === false && numCharacters === false && specCharacters === false) {
        return "Select at least one Character type!";
    }

    if (lowerCharacters) {
        possibleCharacter = possibleCharacter.concat(lowerCharactersArr);
    }
    if (upperCharacters) {
        possibleCharacter = possibleCharacter.concat(upperCharactersArr);
    }
    if (numCharacters) {
        possibleCharacter = possibleCharacter.concat(numCharactersArr);
    }
    if (specCharacters) {
        possibleCharacter = possibleCharacter.concat(specCharacters);
    }
// FOR LOOP SECTION
    // For length of password
    console.log(passwordLength)
for (i = 0; i < passwordLength; i++) {
    passwordResults = passwordResults + possibleCharacter[Math.floor(Math.random() * possibleCharacter.length)];
    // let passwordResult = ""
}
console.log(passwordResults)
    return passwordResults;
};

var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}

/* Add event listener to generate button */
generateBtn.addEventListener('click', writePassword);
