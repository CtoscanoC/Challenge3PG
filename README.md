# Challenge3PG
Challenge #3 Password Generator
1 The approach was to creat an object and manipulate the strings inside to add to another variable
2 The sequence will be to enter the length of the password and verify if it is a number and the criteria for the length
3 After the length is submitted it is stored in a variable outside the function for it resets every time without storing
4 A series of prompts adds the selection of Upper case, Lower case, Special characters and numbers. This is achieved by using another declared variable called user selection and using the += operand that adds to the variable itself creating a extended string 
5 The selection is verified against "no selection" since at least one parameter should be selected
6 The user selection is then manipulated with the userlength and through a loop with "i" and math.random + math.floor the result is stored in another variable called userpassword
7 The userpassword is returned and gets written to the function getpassword() wich is then written in the #password area by the previous given code
8 After running the code it was then obvious that clearing the userselection variable was necessary to keep complying with the criteria the user selects so a clearing function was created ( function reset() )
9 This function was added to the eventlistener but before the write password function ..in this way everytime it gets click it runs both and the user can create limitless passwords with all the criterias 

![Screen Shot 06-03-22 at 04 11 AM 001](https://user-images.githubusercontent.com/103231213/171698150-75ddd633-9170-4f87-ae84-6a8dd12c3293.PNG)




