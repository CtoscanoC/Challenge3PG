// Assignment Code
var generateBtn = document.querySelector("#generate");
const decisionlists = { 
  LowercConfirm: 'abcdefghijklmnopqrstuvwxyz',
  UppercConfirm: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numberconfirm: '0123456789',
  specialcharacterc: "@%+\\,/'!#$^?:)(}{][~-_.",
}

// I have created the user choices as variables to be taken later by the prompt ..not sure if it is the most elegant solution
// I also had to use userpassword to write the combination of userselection
var userselection = '';

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  function generatePassword() {
    //ask for the length to the user and verify lies within parameters
    //isNan to verify that is a number 
    var userlength = prompt('How many characters would you like on your password? (between 8 and 128)');
    while (isNaN(userlength)||userlength < 8 || userlength > 128||!userlength) {
   userlength = prompt("A valid 'number' is neded to proceed",);
    }

    var confirmlowercase = window.confirm('Would your password contain Lower case letters');
    if (confirmlowercase) {//this checks for true condition on the lower case question
      userselection += decisionlists.LowercConfirm; //adds the value in the string
    };

    var spconfirm = window.confirm('Would your password contain Special Characters?');
    if (spconfirm) { //same as for lower case
      userselection += decisionlists.specialcharacterc;
    };

    var numbersconf = window.confirm('Would your password contain numbers?');
    if (numbersconf) {
      userselection += decisionlists.numberconfirm;
    };

    var confirmuppercase = window.confirm('Would your password contains Upper case letters');
    if (confirmuppercase) {
      userselection += decisionlists.UppercConfirm;
    };

    while (!confirmlowercase && !confirmuppercase && !numbersconf && !spconfirm) {
      alert('At least one special feature must be selected',);
      confirmlowercase = confirm('Would your password contain Lower case letters');
    if (confirmlowercase) {//this checks for true condition on the lower case question
      userselection += decisionlists.LowercConfirm; //adds the value in the string
    };

    spconfirm = confirm('Would your password contain Special Characters?');
    if (spconfirm) { //same as for lower case and for the rest below
      userselection += decisionlists.specialcharacterc;
    };

    numbersconf = confirm('Would your password contain numbers?');
    if (numbersconf) {
      userselection += decisionlists.numberconfirm;
    };

    confirmuppercase = confirm('Would your password contains Upper case letters');
    if (confirmuppercase) {
      userselection += decisionlists.UppercConfirm;
    };

    }

    console.log(userselection); //sanity check for checking if variables are writing --kept getting click violation someting ms

    var userpassword = '';

    for (let i = 0; i<userlength; i++) { //loops for the amount of number of characters selected in userlength and then generates random string using the
      //the addition of userselection 
      userpassword += userselection[Math.floor(Math.random()*userselection.length)]
      
    }
    return userpassword;
 
   }

   
}
//function to reset the userselection on each click
function reset() {
  userselection= '';
}


// Add event listener to generate button
generateBtn.addEventListener("click", reset);//I need this function on the same click to clear the variable and for the program to run endelessly according to the instructions
generateBtn.addEventListener("click", writePassword);
