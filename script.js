// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

  // var upperCase = "ALPHABET"
  
  // var lowerCase = "alphabet"

  // var specCharact = "characters"

  // var numbers = i.e. '1'


function pwOptions() {

  // makeavariabletostoretheuserpwlength = parseInt(prompt here)

  // write a conditional statement to check if the input is not a number

  // conditional to check if the input is <8

  // conditional to check if the input is > 128

  // useconfirm for special characters in a variable

  // useconfirm for uppercase in a variable

  // useconfirm for lower case characters in a variable

  // useconfirm for numbers in a variable

  // conditional statement that handles the event that someone selects nothing

  //  create an object to store user input

      // var objectName = {
      // place input here
      // }


// return objectName

// create a function for getting a random element from the array math.random & math.floor

}

// function generatePassword () {
//   // TODO writing code here
//    var upperAndLower = confirm("would you like upper and lower case?")
//    var pwLength = prompt("how many characters would you like?")
//    var pwPossible = ""

//    var letters = "abcdefghijklmnopqrstuvwxyz"
//    var characterSet = "$@#%^&*()"

//   if (pwLength < 129 || pwLength > 8) {
//     window.alert("Please input a number betwen 8 and 128")
//   }
  
// }







  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
