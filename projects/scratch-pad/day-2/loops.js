// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var element of array) {// iterates trough all elements of array and prints each one to the console
      console.log(element);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length-1; i >= 0; i--) { // iterates trough array and prints each element backwards, starting at index array.length-1
       console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Declare an empty array to fill in with keys later
  var arrayWithKeys = [];
  for (var key in object) { // iterates trough object and prints all of its keys and pushes them into an array
       console.log(key);
    arrayWithKeys.push(key);
  }
  
  return arrayWithKeys;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) { // iterate over an object and print the objects keys
  // YOUR CODE BELOW HERE //
  for (var key in object) {
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) { 
  // YOUR CODE BELOW HERE //
  // Declare an array literal
  var array = [];
  for (var key in object) {// iterate over object and print its keys values 
 array.push(object[key]);
  };
  
  
  return array;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {// iterate trough object and print it's  values in the console
      console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var myObjectProperties = Object.keys(object);// use Object.keys method to convert object into an array then return that arrays length;
  
  return myObjectProperties.length;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var newArray = [];// Declare an array literal to store the values of the object keys after for-in loop
  var newArr = []; // array to push in all the values of the object after a for loop iteration
  for (var key in object) {
    
    newArray.push(object[key]);// pushing all values of object keys into newArray
  }
  for (var i = newArray.length-1; i >= 0; i--) { //iterate through newArray and return its value in reverse
      console.log(newArray[i]);
      newArr.push(newArray);
  }
  return newArr;
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
