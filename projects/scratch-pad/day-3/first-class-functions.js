// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//input (base)
// output : return a function that tests wether a given value is greater than the base
return function (value) {
return value > base ? true : false;
}
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
  return function (value) { // test if value (a string or a number) is less than base
  if (typeof value === "string") {
      return value < base ? true : false;
  } else if (typeof value === "number") {
      return value < base ? true : false;
  }
  }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function startChar(str) {
        {return str[0].toUpperCase() === startsWith.toUpperCase() ? true : false; // tests to see wether a given character is at the first index of a given string.
 
       }
       
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
   return function (str) {// checks if last character of string strickly equals the parameter endsWith
       return str[str.length -1].toLowerCase() === endsWith.toLowerCase() ? true : false;
   }

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE // 
    // declare an empty array to populate it with the modified values of strings
    var modifiedStrings = [];
    //Write a loop to iterate over strings array
    for (var element of strings) {
        // pass elements of strings into the modify function to mutate them and then push into modifiedStrings
        modifiedStrings.push(modify(element));
    }
    return modifiedStrings; 
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

    //inputs : array of strings (strings) and a function (test) 
    // test the string and return a boolean on whether it passed the test
    for (var element of strings) {
        if (test(element) === false) {
            return false;
        }
    }
    return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
