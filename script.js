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
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // var lowerCase = "alphabet"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  // var specCharact = "characters"
  var specCharact = "@#$%^&*()"
  // var numbers = i.e. '1'
  var numbers = "123456789"
  var pwPotentials = []

function generatePassword() {

  // makeavariabletostoretheuserpwlength = parseInt(prompt here)
  var inputLength = (prompt("How many characters?"))
  // write a conditional statement to check if the input is not a number
    if (isNaN(inputLength)){
      alert ("please enter a numeric value");
      return "";
    }
  // conditional to check if the input is < 128
    if (inputLength > 128 || inputLength < 8){
      alert ("number must be below 128");
      return "";
    }
    console.log(inputLength)

  // useconfirm for special characters in a variable
    confirm("would you like to use special characters?") 
      if (true){
        pwPotentials.push(specCharact)
        
        console.log(pwPotentials)
      }
  // useconfirm for uppercase in a variable
    confirm("would you like capital letters?")
    if (true){
        pwPotentials.push(upperCase)
        console.log(pwPotentials)
    }
  // useconfirm for lower case characters in a variable
    confirm("would you like lower case letters?")
    if (true){
        pwPotentials.push(lowerCase)
        console.log(pwPotentials)
    }
  // useconfirm for numbers in a variable
    confirm ("would you like to use numbers?")
    if (true){
      pwPotentials.push(numbers)
      console.log(pwPotentials)
    }

    JSON.stringify(pwPotentials)
    
  


    return "";
   


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
