
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, name) {// Declares a function named search that takes an array as a parameter
    for (var i = 0; i <= array.length-1; i++) {
        if (array[i].name === name) {
          return  array[i]; // returns object if name is a name it that specified object.
        } 
      }
      return null;// returns null if name is not found in any object
  }
  

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, name, obj) {// function declaration that takes three parameters:
    //an array, a name and an object.
     for (var i = 0; i <= array.length -1; i++) {
         if (array[i].name === name) {// checks if name is a name in one of the array objects.
          console.log(array[i] = obj);// replaces the object with of the specified name with a new object.
      
        }
     }
  
  }
  // Replace() works: replace(animals, "Jerome", {});

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(array, name) {// function declaration named remove that accepts two parameters: an array 
    //and an animal parameter representing the name of an animal inside that array
    for (var i = 0; i <= array.length - 1; i++) {// iterates through array to access it's individual entry
        if (array[i].name === name) {
            array.splice(i, 1); // finds the object at the i of the array parameter and removes it.
        }

    }
}
// The remove function works : remove(animals, "Jerome")


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, obj) {// function declaration that takes two parameters:
    // an array and an object
   var nameMatch = false; // boolean flag variable used to check conditional statements
   for (var i = 0; i < arr.length; i++) {
       if (arr[i].name === obj.name) {// check if any name in any of the objects contained in arr
        //equals a name in the object to be added, if true, then:
           nameMatch = true; // sets our boolean flag variable to true
       }
   }
   if (nameMatch === false && obj.name.length > 0 && obj.species.length > 0) {
       arr.push(obj); // adds obj to arr if all conditions are met.
   }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
