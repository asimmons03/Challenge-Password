// Assignment code here

// Arrays labelled with characters for password gen
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", 
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
  "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
     "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
     "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "+", "~", "`", "|", "}", "{", "[",
    "]", ":", ";", "?", ">", "<", ".", "-", "="];

    // 
    var confirmLength = "";
    var confirmUpperCase;
    var confirmLowerCase;
    var confirmNumber;
    var confirmSymbol;

    //Input the amount of characters the user desires
function generatePassword() {
        var confirmLength = (prompt("How many characters would you like your password to contain?"));

        // code will loop if the prompt wasn't answered correctly
        while(confirmLength < 8 || confirmLength > 51) {
            alert("Password needs to be between 8-50 characters");
            var confirmLength = (prompt("How many characters would you like your password to contain?"));
        }
        var confirmLowerCase = confirm("Would like to include lowercase characters?");
        var confirmUpperCase = confirm("Would like to include uppercase characters?");
        var confirmSymbol = confirm("Would like to include special characters?");
        var confirmNumber = confirm("Would like to include numeric characters?");    
     
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbol === false && confirmNumber === false) {
            alert("You need to select at least one parameter");
            var confirmLowerCase = confirm("Would like to include lowercase characters?");
            var confirmUpperCase = confirm("Would like to include uppercase characters?");
            var confirmSymbol = confirm("Would like to include special characters?");
            var confirmNumber = confirm("Would like to include numeric characters?");     
}

// links the variables to passwordCharacters
    var passwordCharacters = []
  
if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase)
}

if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
}

if (confirmSymbol) {
  passwordCharacters = passwordCharacters.concat(symbol)
}

if (confirmNumber) {
  passwordCharacters = passwordCharacters.concat(number)
}
  

  console.log(passwordCharacters)

  var randomPassword = ""
      
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
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
 