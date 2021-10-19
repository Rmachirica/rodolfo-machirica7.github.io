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
 * The primitive data are immutable-- meaning that they can't be changed or mutated, that is, their individual characters.Howerver, they can be updated if assigned to a var or let variables.
 * 
 * 2. Complex data type (objects and arrays)
 * Arrays and objects are compolex data structures-- we can see them as containers for organized or meaningfully arranged collection of other types (primitive).
 * 
 */

// Example of simple/ primitive data types
//1. Strings. A sequence of alphabetical characters and digits enclosed in double quotes ("Example Number 1") or single quotes ('Example number 2').

var weatherToday = "Sunny"; // "Sunny" is a primitive data of string type and it's characters are immutable

//1.2 Number and NaN. Single or sequence of digits, these can integers (1 or 2009 or 39...) or have a floating point (1.5 or 3.5 or 7.6 ...)

var highTemperatureToday = 75; // 75 is a primitive data of  type number  and it's digits are immutable
var daysOfTheWeek = 17; // in a boolean context daysOfTheWeek will resolve to NaN because a week has 7 days.

// 1.3 Boolean. The boolean primitive datum type represents a logical entity and can embody only eithe of these two values: true and false. 

var adultsAllowedtoDrive = true; // the value of dultsAllowedtoDrive is of type boolean and is immutable. However, it can be updated. 

//1.4 undefined. If a var or let variable is not initiated at the time of declaration then its value is automatically undefined, and immutable.
var yourFavoriteFood; // The value of yourFavorite food is undefined because yourFavoriteFood was not initiated.

//Examples of complex data types.
//2. Arrays-- a collection of data (primitive or complex) arranged in a form of a list.
// Arrays are 0 indexed--meaning that each entry or element has a unique indexed position starting from index 0 (the first element) stoping at the position or index array[array.length-1] (the last element in the list).
var namesAndInterets = [{name: "jonathan", interets: ["reading", "cooking", "design"]}, ["Amelia", "games", ["business", false]], {name: "Mark", interets: ["poetry", "painting", "soccer"]}];

// The above array has three elements each one with a specific index. The first element is at index 0, the second at index 1 and the third is at index 2.


//2. 1 Objects-- a complex data structure arranged in key-value pairs. the keys are always of type "string" and the values can be anything from primitive  to complex data types, objects included.
var mySelf = {// the strings on the left side of the values are the keys/properties and the data on the right side of the colons are the values.
    "name": "Rodolfo",
    "age": 31,
    "married": true,
    "hasChildren": true,
    "nameOfChildren": ["Gabriel", "Elijah"],
    "currentOcupation": "student at operation Spark",
    "dayOfDeath": undefined
};








