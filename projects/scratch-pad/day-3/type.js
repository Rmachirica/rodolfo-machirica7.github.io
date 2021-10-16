// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // use Array.isArray to strickly determine if typeof value is indeed and "array".
    // Use ternary operator to write the condifition logical in the return statement
    return Array.isArray(value) ? true : false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value !== "object") {// checks for values different from object's and returns false
        return false;
    } else {
        // checks for object intended as a collection by invalidating other forms of objects that aren't intended as a collection.
        return typeof value === "object" && value !== null && value instanceof Date === false && !Array.isArray(value);
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // checks and passes only objects intended as collection or Array.isArray and rejects other types of objects.
    if (Array.isArray(value) || typeof value === "object" && value !== null && value instanceof Date === false) {
        return true;
    } else {
        return false;
    };
   
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    console.log(value);
if (typeof value !== "object") {
    return typeof value;
    } else if (typeof value === "object" && value !== null && value instanceof Date === false && !Array.isArray(value)) {
      return "object";
   } else if (value === null) {
         return "null";
   } else if (Array.isArray(value)) {
      return "array";
  } else if (value instanceof Date === true) {
     return "date";
 }

//    if (typeof (value) === "object" && value !== null && value instanceof Date === false && Array.isArray(value) === false) {
//         return "object";
//     } else if (typeof (value) === "null") {
//         return "null";
//     } else if (typeof (value) === "function") {
//         return "function";
//     } else if ((value) instanceof Date) {
//         return "date";
//     } else if (Array.isArray(value) === true) {
//         return "array";
//     } else if (typeof (value) === "number" || typeof value === "NaN") {
//         return "number";
//     } else if (typeof (value) === "string") {
//         return "string";
//     } else {
//         return typeof value;
//     }
    // YOUR CODE ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
