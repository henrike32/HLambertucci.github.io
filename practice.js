// Javascripto Jumpstart notes

// Primitive data types

// Number , String, Boolean

//Number
5
10.3
10 + 3
10 / 3
10 * 3

//Strings - a collection of characters between single or double quotes

"Hello march jumpstart, we are all excited to have you here!"
"This works as well"

// Boolean - Booleans are:
// true or false 
// really useful for decision making
// result of a comparison

true
false


// Variables - comes with 4 parts 
//the declaration , var
//the name, camelCase - firs word is lowercase, all else following will be uppercase
//the assignment operator  =
//the data itself, any of the data types we want

var taillessWhipScorpionName= "Calico jack"

//taillessWhipScorpionName 
// Output --> "Calico Jack"

var petAge= 3

var isCute= true 
//Reassign the variable now data has changed
isCute= false

petAge= 4
taillessWhipScorpionName= "NoName"
//String Interpolation 
//allows for variables to be embedded in a string
// use back ticks `` instead of ""
// use the ${variableName}

"Have you met Calico Jack?"
"Have you met NoName?"
`Have you met ${taillessWhipScorpionName}?`

//Built in Methods

//Parenthesis () tell JS to perform an action
// Here's an example : 
alert("Hey this is a time for a break!")
prompt("What will this one do?")
prompt("How old are you?")
var userAge= prompt("How old are you?")

//Strict Equality Operators
 // allows us to make a comparison
 // ask the question "are these things the same?"
 // we receive the boolean as the answer

 3 === 4
 // Output --> false
 
 //With different data types
 5 === "5"
// Output --> false

// Difference between single(assignment operator) and triple equal sign

//Relational Operators

  // similar to the strict equality , will result in boolean

  7 > 3
   // Output --> true

 89 < 63
 // Output --> false

 var userAge= prompt("How old are you?")

// Conditional Statements
 // something we want to happen under a certain condition
 // IF is a keyword built into JS
 // signals the beginning of a conditional statement
 // else if - checks additional condition
 // else - catch all

 // Plain english
  //if(this condition is true){
  //perform this action
  //} else if (this condition is true){
  // perform this action} else {
  // perform this action
  //}

     
// 21+ - you can drink
// 18+ - you can vote
// 17 and under - you can't do either

if(userAge > 20) {
    alert("You can drink and vote!")
} else if (userAge > 17){
    alert("You can vote but no drinking!")
} else {
    alert("You can't vote or drink. Sorry!")
}



// Outlook not so good































































