////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  // return the minimum number between two numbers
return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  //checks if num is equal to 0 and returns true
  if (num == 0) {
  return true;
  //checks if number is equal to 1 and returns false
  } else if (num == 1) {
    return false;
  //checks if number is less that 0 and returns the recursive functions
  // with a negative number
  } else if (num < 0) {
  return isEven(-num);
  } else {
    //returns the recursive function with the param num subtracted by 2
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, ch) {
  // declares a counting variable and set it to 0
  var counted = 0;
  // iterates through string 
  for (var i = 0; i < string.length; i++) {
    // looks to see if strings[i] equals the character ch
     if (string[i] == ch) {
       counted += 1;
     }
   }
   //returns the counting variable counted
    return counted;
 }
  


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  function countBs(string) {
  //returns a function tasked with the ability to count the letter B in a string
    return countChars(string, "B");
  }
  


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
