/*
* Variables 

* 0. variables are container-like tools in javascript used for storing data or values. 
Variables at the time of their creation/declaratio they are given specific names that relates directly to the time of data (string, number, boolean, array, function, object, NaN, null...etc) that they will store.

*1. Here's the structure for creating a variable: keyword (var, let, const) variableName (myName or myAge or objectListing...) followed by either semi-colon (;) or an assigment operator (=) with a value to the right of the (=).

* 2. Variable usage
There are two phases of using variables:
1. variable declaration: keyword variableName and semi-colon(;)
At the first phase the value of our variable is by default undefined. However, this is only true for variables declared with the var and let keywords. const variables have to be initiated immediately.
2. varibale assignment: varibleName = data (the data type has to relate to the variables name for clarity reasons).
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
 * 0. Control flow is a big topic and concept in JavaScript. At it's fundamental level, control flow
 * refers to how code is run and interpreted by the JavaScript engine, which is from top to bottom.
 * 
 */





