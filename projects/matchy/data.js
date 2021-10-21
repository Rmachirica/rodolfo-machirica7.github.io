/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};// creates an empty object literal
animal.species = "Chimpanzee";
animal["name"] = "Bobi";
animal["noises"] = [];
//console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];  // creates an empty array literal 
noises[0] = "Oo oo oo!";   // assigns to noises at position 0 a string value of "oo oo oo!"
noises.push("Hoot hoot hoot!");  //pushes into the end of noises the string value of "Arh Arh Ar!"
noises.unshift("Aah Aah Aah!");  // adds the string "Aah Aah Aah!" at index 0 of the array
noises.splice(noises.length-1, 0, "urhh urhh urhh!") //using the .length property, we added the string "urhh urhh urhh!" to the end of the noises array
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;// assigns the noises array to the key noises in the animal object.
animal.noises.push("Rugh rugh rugh!"); // the push method adds the string "Rugh rugh rugh" to the end of the array noises in the animal object.
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * We can access the properties of an object using the for-in loops, and 
 * dot or bracket notations, respectively.
 * 2. What are the different ways of accessing elements on arrays?
 *We can access elements in an array using bracket notation by 
 referencing the index or position of that element, for loops, 
 .length-1,  and we can use indexOf to see if a certain element 
 exists at a certain index of the array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; // creates a variable named animals and assigns it to the value of an empty array.
animals.push(animal); // pushes the object animal into our animals array
console.log(animals); // prints our array with the animal object inside [{animal object}]
var duck = { species: 'duck', 
name: 'Jerome', 
noises: ['quack', 'honk', 'sneeze', 'woosh'] }; // a new object duck was declared and initiated
animals.push(duck); // pushes the object duck to the animals array
console.log(animals); // Now animals is an array with two arrays
var africanLion = {// Declares and initiates an object africanLion
  species: "feline",
  name: "King of the Savannah",
  noises: ["roar", "grr"]
};
var cat = {// Declares and initiates a cat object.
  species: "Domestic cat",
  name: "Moo-moo",
  noises: ["meow", "grrh"]
};
animals.push(africanLion, cat);// pushes cat and africanLion objects into the animals array.


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * In my opinian, the better suited data structure to hold this list of friends would be an array.
 * Arrays arrange things or values in a list-like structure, make it 
 * quite simple to access its elements. An object wouldn't be necessary here because our data doesn't come in pairs
 */
var friends = []; // an friend array was created for storing friends of the animals


function getRandom(array) {
  var arrayIndexes = [];// declares an array to poplutate with array's indexes
 for (var i = 0; i <= array.length - 1; i++) {// iterates through array to access individual values
      arrayIndexes.push(i); // pushes array's indexes into the 
      console.log(arrayIndexes);
 }
   var myRandomNumber = Math.floor(Math.random() * (arrayIndexes[arrayIndexes.length -1]  - arrayIndexes[0] + 1)) + arrayIndexes[0];
   console.log(myRandomNumber);
    return myRandomNumber;// returns a random array culculated by Math.floor(Math.random(max - min) + 1) + min
};
// using a random index from the function, get a random animal and it's name.
var index = getRandom(animals);
console.log(index);
var newIndex = friends.push(animals[index].name);
console.log(newIndex); 
// Using bracket notation add the friends list to an animal with a key of friends
animals[0]["friends"] = friends; // adds friends to the first object in array animal


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}