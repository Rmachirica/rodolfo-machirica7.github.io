/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, name) {// Declares a function named search that takes an array as a parameter
  // This functions looks trhough array and returns an object if string === key name of that object
  for (var i = 0; i <= array.length-1; i++) {
      if (array[i].name === name) {
        return  array[i]; // returns object if name name is a name it that specified object.
      } 
    }
    return null;// returns null if name is not found in any object
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, name, obj) {
   for (var i = 0; i <= array.length -1; i++) {
       if (array[i].name === name) {
        console.log(array[i] = obj);
    
      }
   }

};

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {// function declaration named remove that accepts two parameters: an array 
    //and an animal parameter representing the name of an animal inside that array
    for (var i = 0; i <= animals.length - 1; i++) {// iterates through array to access it's individual entry
        if (animals[i].name === name) {
            animals.splice(i , 1);
        }

    }
}



// ## Step 3 - Remove
//  1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
//    - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//    - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(array, animal) {// function declaration add that accepts two parameters: 
  //an array of animals and an object to be added into that array
  for (var i = 0; i <= array.length - 1; i++) {
    if (animal.hasOwnProperty("name") && animal["name"].length > 0 && animal.hasOwnProperty("species") && animal["species"].length > 0 && array[i].name !== animal["name"]) {
           array.unshift(animal);
    }
  }
}
// ## Step 4 - Add
//  1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//    - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//    - Checks that the animal Object has a `name` property with a length > 0.
//    - Checks that the animal Object has a `species` property with a length > 0.
//    - Has a **unique** name, meaning no other animals have that name.
//    - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//    - Make sure it works.



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
