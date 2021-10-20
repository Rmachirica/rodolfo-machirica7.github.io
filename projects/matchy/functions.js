
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
function replace(array, name, obj) {// function declaration that takes three parameters:
    //an array, a name and an object.
     for (var i = 0; i <= array.length -1; i++) {
         if (array[i].name === name) {// checks if name is a name in one of the array objects.
          console.log(array[i] = obj);// replaces the object with of the specified name with a new object.
      
        }
     }
  
  }
  

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



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, obj) {
   var nameMatch = false;
   for (var i = 0; i < arr.length; i++) {
       if (arr[i].name === obj.name) {
           nameMatch = true;
       }
   }
   if (nameMatch === false && obj.name.length > 0 && obj.species.length > 0) {
       arr.push(obj);
   }
}
//loop through the other names and compare arr[i].name to obj.name


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
