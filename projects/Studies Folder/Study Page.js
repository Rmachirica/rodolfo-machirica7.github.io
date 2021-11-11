/*
* Variables 

* 0. variables are container-like tools in javascript used for pointing at data or values. 
Variables at the time of their creation/declaratio they are given specific names that 
relates directly to the time of data (string, number, boolean, array, function, object, NaN, null...etc) 
that they will point at.

*1. Here's the structure for creating a variable: keyword (var, let, const) variableName (myName or myAge or objectListing...) 
followed by either semi-colon (;) or an assigment operator (=) with a value to the right of the (=).

* 2. Variable usage
* There are two phases of using variables:
* 1. variable declaration: keyword variableName and semi-colon(;)
* At the first phase the value of our variable is by default undefined. However, this is only true for variables
* declared with the var and let keywords. const variables have to be initiated immediately when they are created.
* 2. Varibale assignment: variableName = data; (the data type has to relate to the variables name for clarity reasons).
*/ 

// Example:
//1. var variable
var myName; // variable declaration with a default value of undefined.
myName = "Gabriel"; // variable assignment with the string value "Gabriel"
console.log(myName) // prints Gabriel to the console

//2. let variable
let myAge; // variable declaration with a default value of undefined.
myAge = 5.5; // variable assignment with the number value 5.5;
console.log(myAge) // prints 5.5 to the console;

//3. const variable
//Const variables are imutable-- meaning  that once they are declared theyr can't be changed, and they have to initiated or assigned a value at the time of their declaration.
//Example:
const birthYear; // SyntaxError: Missing initializer in const variable
const myBirthYear = 2016; // const variable initialized at the moment of declatation
console.log(myBirthYear); // prints 2016 in the console.

// Mutating or updating the values of var and let variables
myName = "Elijah"; // Now myName is "Elijah" and no longer "Gabriel"
myAge = 2.5; // Now myAge is 2.5 and no longer 5.5.
console.log( myName, myAge); // prints Elijah, 2.5 to the console.


/**
 * Data types 
 * There are two major categories of data in JavaScript and they follow: primitive data type and complex data types.
 * All the data that programmers handle or manipulate fall within those two categories. 
 * 
 * 0. 
 * 1. These are the primitive data types: strings, numbers, booleans, null, undefined, NaN;
 * 2. These are the complex data types: arrays and objects. 
 * 
 * 1.
 * 1. Primitive data type
 * The primitive data are immutable-- meaning that they can't be changed or mutated, that is, 
 * their individual characters.Howerver, they can be updated if assigned to a var or let variables.
 * 
 * 2. Complex data type (objects and arrays)
 * Arrays and objects are complex data structures-- we can see them as containers for organized
 *  or meaningfully arranged collection of other types (primitive).
 * 
 */

// Example of simple/ primitive data types
//1. Strings. A sequence of alphabetical characters and digits enclosed in double quotes
// ("Example Number 1") or single quotes ('Example number 2').

var weatherToday = "Sunny"; // "Sunny" is a primitive data of string type and it's characters are immutable

//1.2 Number and NaN. Single or sequence of digits, these can integers (1 or 2009 or 39...) 
//or have a floating point (1.5 or 3.5 or 7.6 ...)

var highTemperatureToday = 75; // 75 is a primitive data of  type number  and it's digits are immutable
var daysOfTheWeek = 17; // in a boolean context daysOfTheWeek will resolve to NaN because a week has 7 days.

// 1.3 Boolean. The boolean primitive datum type represents a logical entity and can 
//embody only eithe of these two values: true and false. 

var adultsAllowedtoDrive = true; // the value of dultsAllowedtoDrive is of type boolean and is immutable. However, it can be updated. 

//1.4 undefined. If a var or let variable is not initiated at the time of declaration
// then its value is automatically undefined, and immutable.
var yourFavoriteFood; // The value of yourFavorite food is undefined because yourFavoriteFood was not initiated.

//Examples of complex data types.
//2. Arrays-- a collection of data (primitive or complex) arranged in a form of a list.
// Arrays are 0 indexed--meaning that each entry or element has a unique indexed position starting 
//from index 0 (the first element) stoping at the position or index array[array.length-1] (the last element in the list).
var namesAndInterets = [{name: "jonathan", 
interets: ["reading", "cooking", "design"]}, ["Amelia", "games", ["business", false]], 
{name: "Mark", 
interets: ["poetry", "painting", "soccer"]}];

// The above array has three elements each one with a specific index. The first element is at index 0, the second at index 1 and the third is at index 2.


//2. 1 Objects-- a complex data structure arranged in key-value pairs. the keys are always
// of type "string" and the values can be anything from primitive  to complex data types, objects included.
var mySelf = {// the strings on the left side of the values are the 
    //keys/properties and the data on the right side of the colons are the values.
    "name": "Rodolfo",
    "age": 31,
    "married": true,
    "hasChildren": true,
    "nameOfChildren": ["Gabriel", "Elijah"],
    "currentOcupation": "student at operation Spark",
    "dayOfDeath": undefined
};


/**
 * operators 
 *0.  Operators are imposing behaviors-- they perfom an action our data, thus, provoking changes. 
 * Operators are group by classes, and there are a few classes of operators:
 * 
 *1 Arithmetic operators-- are those that take numerical values either constant expressions
 * or staments as their operands and return a single value. Here they are:
 * addition (+), subtraction (-), division (/), multiplication (*), remeinder (%), exponent (**). 
 * 
 * 2 Assignment operators-- are those that assign values to JavaScript variables. 
 * These are the common assignment operators:
 *2.1   (=) assigns a value to a variable.
 *2.2  (+=) plus equals adds a value to the variable;
 *2.3  (-+) minus equals subtracts a value from a variable;
 *2.4  (/=) division equal divides a variable by a value
 *2.5  (*=) multiplication equals multiplies a varible by a value;
 *2.6  (%=) assignment remeinder, assigns a remeinder to a variable;
 * 
 * 3. Comparison operators-- are those that compare two different operunds 
 * in a boolean context and return a boolean (true or false). 
 * The most common comparison operators are: 
 * 3.1 strict equality (===), which checks to see if the operand on the left is 
 * exactly equal to the operand on the rigth and returns true or false;
 * 3. 2 equality operator (==), which checks to see if the operand on the left is 
 * equal to the one on the right, and it does type conversion, meaning if the values are 
 of different type it will convert them into the same type and then compare again and return true or false;
 *3.3 Strictly inequality (!==), which checks to see if the operand on the left is 
 * exactly not equal to the operand on the rigth and returns true or false;
 *3. 4 Inequality operator (!=), which checks to see if the operand on the left is not 
 * equal to the one on the right, and it does type conversion, meaning if the values are 
 of different type it will convert them into the same type and then compares again and return true or false;
 * 3.5 Greater (>) and less than (<), these compare two operands and 
 *return true or false based on the values and criteria.
 *3.6 Greater than or equal (>=) and less than or equal (<=), these compare the operands 
 and resolves to true or false based to the valitidy of the expression.

 *4. Logical operators
 *Logical operators are used to determine the logic between variables or values and 
 *resolves the operation to true or false. Here are the common logical operators:
 *4.1 The and operator (&&), when used in boolean context (boolean expressions) it
 * returns true if both operands evaluate to true otherwise it returns false;
 
 *4.2 The logical operator Or (||), when used in the boolean context the || operator 
 *returns true if either of the operands is true and if both are false then it return false

* 4.3 Logical Not (!), returns false if it's single operand can be converted to true otherwise it returns true.

*5. Unary operator-- is an operation with only one operand. Some of unary operators include: 
*5.1 typeof, acts on a single operand or value and returns it's data type;
*5.2 instance of, acts on a single operand and returns true or false based on the operand 
*being or not an instance of a particular object type. 
*5.3 in operator, returns true if a specific property is a property in the specified object. 

*6. Conditional or ternary operator-- it is an operator that takes thre operands, conditon ? expr1 : exp2;

 */

// Examples of practical use of operators

//Assignment operators
var cityName = "Tanganhica" // Here (=) assigns the string value "Tanganhica" to the variable name;

cityName += " Thomas"; // here (+=) adds to cityName the string "Thomas". Now cityName = "Tanganhica Thomas";

var number = 16;
number /= 4; // here (/=) divides number by 4. Now number = 4;

var remainder = number %= 3; // here (%=) assigns the remainder of number% 3 to remainder. remainder = 1;

// comparison operators
var greatThan = 9 > 4; // returns true

var strictEquality = "Anna" === "Anna"; // returns true;

var equalityOperator = "12" == 12  // converts "12" into number and returns true;

var strictlyNotEqual = "Anna" !== "anna";// returns false because "Anna" is not exactly the same as "anna", not in value;

// logical operators

var andOperator = 9 > 6 && 6 > 5; // returns true

var anotherAndOperator = "Anna" === "Anna" && "car" !== "car";// returns false because the second boolean expression resolves to false

var orOperator = true || false // returns true 
var anotherOrOperator = false || false // returns false

var notOperator = !true; // returns false;
var anotherNotOperator = typeof "Anna" === "string" && "Anna" !== "number"; // returns true;

// Unary operators
var typeOf = typeof number; // returns "number";

var newDate = Date();
var instanceOf = newDate instanceof Date; // returns false


/**
 * String Manipulation
 * 
 * 0. String manipulation refers to how strings are or can be handled/used in 
 * JavaScript programing.
 * 1. There are two main branches relative to how strings are manipulated:
 * 
 * 1.1. manipulation with operators => strings use assignment operators (+=) 
 * concatenation operator(+) and string interpolation with template literals(``)
 * to change or mutate data in a way fits the programmer's intention. 
 * 
 * 1.2. manipulatation with methods => apart from operators, strings also dispose
 * of built-in functions or methods to maximize the importance of strings as data type.
 * These methods, transform orginal strings in a meaningful and productive way.
 */

//0. Operator string manipulation examples:

//using += assigment operator
var timeOfDay = "Morning";
timeOfDay += " today is going to be a good day!"// assigns a new string to timeOfDay
console.log(timeOfDay);// prints "Morning, today is going to be a good day!";

//using concatenation
var question = "what time is it?";

console.log(timeOfDay + " " + question)// prints "Morning, what time is it?" to the console

//using string interpolation and template literals
console.log(`${timeOfDay}, afernoon...${question}`)// prints "Morining, afternoon...what time is it?"

//1. String manipulation by methods, examples:

//using the built-in methods to upperCase() and toLowerCase() 
var upperCaseString = question.toUpperCase();// prints => "WHAT TIME IS IT?"; to the console
var lowerCaseString = question.toLocaleLowerCase();// prints=> "what time is it?" all characters are lowercase.

// There are many more string manipulation methods, amongst them all is:
//.split() => takes a string and with a specified delimeter it splits the string and returns an array
var splitString = question.split(" ");// prints=> ["what", "time", "is", "it?"]

// other methods include: toString()-- takes a number or other primitive values and forces them to string.
var boolean = true;
var stringBoolean = boolean.toString();// prints=> "true" to the console.


/**
 * Controle Flow
 * 0. Control flow is a big concept in JavaScript. At it's fundamental level, control flow
 * refers to how code is run and interpreted by the JavaScript engine, which is from top to bottom.
 * However, there are, in JavaScript, built-in structures that change the flow or order in which
 * code normally runs. These structues are used for making decisions with our code, and thus, decide
 * what we want to be excuted and what will be skipped. 
 * 
 * 1. control flow structures:
 * 
 * 1.0. if statements and if-elseif-else statement chain: used for making decisions with our code based
 * on an expression evaluating to true and false.The anatomical structure of if-elseif-else statements 
 * looks like this: if (condition) {code block};
 *  If, is the first conditional statement used in the if
 *-elseif-else conditional statement chain. Also, if statement can exist and be used withought else-if 
 * and else staments, these last ones are only in a chain and after an if statement.
 * If boolean expression(condition1) evaluates to true
 * the code in it's respective code block {} will be executed and returned or printed in the console
 * and if it evaluates to false then it will be skipped and the next code block{} will execute
 *  if its boolean expression(condition2) evaluate to true. Now, if the if statement(condition1) 
 * evaluates to falsey and so does the else-if statement (condition2), then the else code block will execute. 
 * The if-elseif-else conditional statement chain can have multiple else-ifs statements based on the re-
 * quirement of the program.
 * 
 * 1.1: switch statements: similarly to if-elseif-else statements, switch statements is another control
 * flow structure used for decision making. The anatomical structure of switch statements looks like this:
 * switch (value to be evaluated) {
 * case : //value to be matched goes here
 * break; // stops the execution if match if found
 * default: // if match if not found the value to be executed goes here
 * };
 * switch statements in the place of else, take a default statement, and in the place of a return statement
 * take a break statement. That's how switch statements differ from if-elseif-else statements. 
 */

 //Example of if/else-if/else statements implementation
 var recursionIsTricky = "It's true for most beginners in programming";

 if (recursionIsTricky === "It's true for most beginners in programming") {// the condition evaluates to true
    console.log("You will get better with time and practice!");// This code block executes
 } else if (recursionIsTricky === "for some people it's not") {// this code block is never reached
     console.log("This is a rare case");
 } else {// this code block is never reached
     console.log("Word hard and you'll be a function master!");
 }

 // example of switch statement

 switch (timeOfDay) {
  case "afternoon": "Good afternoon!"; // this case clause will not execute-- it doesn't match timeOfDay
  break;
  case "evening": "Good evening!"; // this case clause will not execute-- it doesn't match timeOfDay
  break;
  case "morning": "Good morning!" // this case clause will execute because it matches timeOfDay === "morning"
  break;
  default: "Good night"; // the default is never reached.
 }


 /**
  * Loops
  * 0. Loops are build-in constructs or features available for programers to execute a block of code
  * as many times as necessary. Another term for looping is iteration, which means to reapeat-- in this case
  * an action or task as many times as instructed by the code of the programmer. Loops are great tools
  * used to manipulate collections of data like arrays and objects. 
  * 
  * 1. There are three main types of loops:
  * for loop;
  * for in-loop;
  * while loop and;
  * do while loop.
  * 
  * 1.1. All those loops mentioned above are relevant. However, for loop, while loop and for in-loop 
  * are by far the most common types of loops and also the most important ones, with these loops we
  * can manipulate any kind or size or data collection.
  * 
  * 1.2. for loops
  * Oftern used to iterated over arrays. Here's the structure of a for loop: 
  * for (initialization; stop condition; incrementor) {
  * // this is for loop code block
  * }
  * Iniialization: we declare the counter or iteration varible to represent our data or the indexes
  * of our data; 
  * stop condition: this expresstion tells the syntax parser when to stop the iteration;
  * incrementor: this statement tells the javascript intepreter to increment or decrement the iteration
  * variable by a certain given number.
  * for loops give to the programmer access to two subparts of an array: indexes and items, which is what
  * we manipulate.
  * 
  * 1.3 for in-loop 
  * For in loop is a special type of loop designed to iterate over objects. 
  * Here's the structure of for in-loop:
  * for (var key in object) {
  * // for in loop code block
  * };
  * for in Loops give the programmers access to two subparts of an object: keys and values, which
  * is what in turn, we use to manipulate our data.
  * 
  * 1.4. While loops
  * While loop is a type of iteration construct better suited for situation when the programmer doesn't
  * know when to stop the loop. For this, for loop uses a boolean expression that evaluates to true or
  * false as a stop condition. So the loop will continue as long as the stop condition evaluate to 
  * true.
  * Here's the structure for a while loop: while (condition) {
  * // do something;
  * incrementor;
  * };
  */


 // Implementing for loop in an ascending manner

 var names = ["Jona", "Squish", "Gabe", "Juany", "Titi", "Mia", "Hunter"];

 for (var i = 0; i < names.length; i++) {
     console.log(names[i]);// prints => "Jona", "Squish", "Gabe", "Juany","Titi", "Mia", "Hunter" 
 };

 // Implementing for loops in a descending manner/ backwards

 for (var j = names.length - 1; i >= 0 ; i--) {
     console.log(names[i]);// prints=>"Hunter", "Mia", "Titi", "Juany", "Gabe", "Squish", "Jona"    
 };

//Implementing for in-loop
var users = {
   first: { name: "Tomas",
   age: 35,
   occupation: "teacher"
    },
second: { name: "Togara",
age: 34,
occupation: "nurse",
    }
};

for (var key in users) {
    console.log(key) // prints: first, second
    console.log(users[key])// prints { name: "Tomas",
                                     // age: 35,
                                    // occupation: "teacher"
                                 //  }, 
                                //  { name: "Togara",
                                //  age: 34,
                                //  occupation: "nurse",
                                //      }
}


// Implementing while loop
var i = 5;
while (i > 0) {
    console.log("Class is about to start"); // prints => "Class is about to start" 5
    i--;                                     // "Class is about to start"          4     
}                                            // "Class is about to start"          3
                                            // "Class is about to start"           2
                                           // "Class is about to start"            1


/**
 * Functions 
 * 0. A function is a a logic data in JavaScript that encapsulates a block of code to 
 * be executed at any time and  as many times in the lifetime of a program. 
 * Functions can accept parameters or inputs(placeholders variables)
 * at the time of their creation and accept arguments(values for the placeholders) at the time of 
 * function invocation or function call.
 * There are two phases or stages of using functions:
 * 0.1. Function declaration: at this phase the function is created, given a name and a set of
 * instructions for it to execute. 
 * 0.2. Function invocation/call: at this phase the function executes the task it was designed for.
 *  
 * 1. There are a few types of functions with somewhat unique or modified syntax. 
 * Here are the types of functions common in JavaScript programming language:
 * 
 * 1.0.Function declaration. It has the following structure:
 * function(key word) name(name of the function) (parenteses for placeholders) {
 * // function body;
 * };
 * 
 * 1.1. Function expression. It has the following structure:
 * var name(functionName) = function(function key word) (parenteses for placeholders) {
 * // function Body
 * }
 * 
 * 1.2. Arrow function. It has the following struture:
 * var name(functionName) = (parenteses for placeholders) => {
 * // function body
 * }
 * 
 * 1.3. Anonymous function. It has the following structure:
 * function(function keyword) (parenteses for placeholders) {
 * // function body
 * }
 * 
 *2. Scope
 * Functions have the ability to see and access variables in the global scope,
 * manipulate and mutate them. Hower, functions local variables can not be seen 
 * or accessed outside of the function scope.
 * 
 * 3. Closures
 * Closure is a function declared inside of another function or in the global context 
 * environment with granted access to variables in it's parent scope in the global 
 * scope.
 */

 // Examples of function definition/declaration with no parameters

 var newName = "Edson";
 function printName () {// this function doesn't take any parameters
     console.log(newName);
 }

// function invocation
printName();//prints=> "Edson" to the console.

// Example of function declaration with parameter(s)

var person = {
    name: "Francis",
    age: 45
};

function personalInfo(object) {
    return `${object.name} is ${object.age} years old.`;
}
console.log(personalInfo(person)); // prints=> "Francis is 45 years old."

// Function expression withought parameters
var returnObject = () => {
    return this.person.age;
}

console.log(returnObject()); // prints=> 45
