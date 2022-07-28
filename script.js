/* Assignment Code */
var generateBtn = document.querySelector('#generate');

/* code to generate random password once button is clicked */
function generatePassword() {

    /* Write password to the #password input */
//  Defining/Declaring Variables
var passwordResult = "";
var numCharacters = ['0', '2', '3', '4', '5', '6', '7','8','9'];
var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// var passwordLength = "";
// var UserPick = [];

// input values and validate //
// prompt//
passwordLength = prompt ("Enter the length of your desired password: 8 - 128");

// Password //
if (!passwordLength) {
    return "Your Secure Generated Password";
  } else if (8 > passwordLength || passwordLength > 128) {
    alert("Enter a valid Number between 8-128!.");
    return "Your Secure Generated Password";
  } else { }

//   Password Confirm //
// input values and validate //
    var confirmNum = confirm ("Would you like to Include Numbers in your password");
    var confirmUpper = confirm("Would you like to Include Uppercase Characters in your password?");
    var confirmLower = confirm("would you like to Include lowercase characters in your password?");
    var confirmSpec = confirm("Would you like special characters in your password?");

    if (confirmLower) {
        UserPick = confirmLower.concat(UserPick);
    }
    if (confirmNum) {
        UserPick = confirmNum.concat(UserPick);
    }

    if (confirmSpec) {
        UserPick = confirmSpec.concat(UserPick);
    }

    if (confirmUpper) {
        UserPick = confirmUpper.concat(UserPick);
    }
    if  (!confirmLower && !confirmNum && !confirmSpec && confirmUpper) {
            alert("Please select ");

            return "Your Secure Generated ";
    } else{ }

// FOR LOOP SECTION
    // For length of password
for (i = 0; i < passwordLength; i++) {
    passwordResults = passwordResults + UserPick[Math.random() * UserPick.length];
    // let passwordResult = ""
}
    return passwordResult;
};

var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("password");
passwordText.value = password;

}

/* Add event listener to generate button */
generateBtn.addEventListener('click', writePassword);