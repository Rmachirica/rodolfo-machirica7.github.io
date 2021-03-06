//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  // takes a object as a parameter and returns it's values
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {// takes an object as a parameter and
  // it's keys all joint in a single string
return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {// takes an object and returns 
     //find all string values in an object looping and using typeof
     var arr1 = [];
     for (var key in object) {
       // if typeof object[key] === string, push object[key] into arr1
         if (typeof object[key] === "string") {
           arr1.push(object[key]);
         }
     }
     //return concatenated arr1 elements with spaces
    return arr1.join(" ");
 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {// takes a parameter collection and
    //checks to see that it it's an array and returns "array" or "object"

   //test if array => 
  if (Array.isArray(collection)) {
    //return "array" if true
    return "array";
  }  
  else if (typeof(collection) === "object") {
    //return "object"
    return "object";
  }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {// takes string as a parameter
    // uses toUpperCase() and returns a caplitalized string
     //Split string into letters => ["h", "e", "l", "l", "o"]
     var splitStr = string.split("");
     console.log(splitStr);
     //toUpperCase() the first letter => ["H"]
     var capLetter = splitStr[0].toUpperCase();
     //splice capH into splitStr[0] => ["H", "e", ...]
     splitStr.splice(0, 1, capLetter);
     console.log(splitStr);
     //join into one string again => "Hello"
     return splitStr.join(""); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var captalizedWords = "";
  // split the string into an array => 
  var splitPhrase = string.split(" ");// ["a", "am", "a", "cat"]
    //console.log(splitPhrase);
  for (var i = 0; i < splitPhrase.length; i++) {
    //console.log(splitPhrase[i])
    var split = splitPhrase[i].replace(splitPhrase[i][0], splitPhrase[i][0].toUpperCase())
    console.log(split);
    //console.log(typeof(split))
    captalizedWords += split + " ";
  }
  // join our array of strings into a a single string: expect => "I Am A Cat"
      return captalizedWords.trim();

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  // function takes an object with a name property and returns: "Welcome <Name>!"
  return "Welcome " + object["name"].replace(object.name[0], object.name[0].toUpperCase()) + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  // function takes an object (with a name and a species ) as parameter and
  //returns: "Name is Species";
  return object["name"].replace(object.name[0], object.name[0].toUpperCase()) + " is a " 
  + object["species"].replace(object.species[0], object.species[0].toUpperCase());

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  //takes an object and if object has a noises array return the array's
  // content as a string separated by space
  for (var key in object) {
    // checks if "noises" is a property in object and that it is an array
    if (object.hasOwnProperty("noises") && object["noises"].length > 0) {

     return object["noises"].join(" ");
    } 
  }
  return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var splitString = string.split(" ");// splits string to iterate through it
for (var i = 0; i < splitString.length; i++) {
  // checks if word is included in the splitString's array.
  if (splitString[i].includes(word)) {
    return true;
  }
}
// return false if word is not included in string
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//takes a name and an object and add name the objects's friend's array
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// takes a name and an object
 if (object.hasOwnProperty("friends") && object["friends"].includes(name)) {
   return true;  // return true if name is a friend of object 
 } else 
  
  return false; // return false if name is not a friend of friends array

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function nonFriends(name, array) {
  // Take a string name and an array of people objects with a friends key 
  // = [] and return a new array of the people that <name> is not friends with 
  var newArr = []; // var newArr = [];// Declares an array to populate with nonFriends later on
   // iterate through the array at people to access each person object
  for (var i = 0; i < array.length; i++) { 
    //check if name is not contained in the friends array
    if ((array[i].friends.includes(name) ||
    array[i].name === name) === false){
    // push name value into newArr
    newArr.push(array[i].name);
    }
  }
  //return newArr;
  return newArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { // function takes an object with a key and a value
  // function takes an object with a key and a value
      object[key] = value;
    // returns the object with key updated or created
    return object;
    
} 

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {// takes an oject and an array of strings 
//create array of all keys 
var arrKeys = Object.keys(object);
//find any arrKeys indexes that are listed in array
//outer loop is arrKeys
for (var i = 0; i < arrKeys.length; i++) {
  //inner loop is arr2
  for (var j = 0; j < array.length; j++){
    //compare operation 
    if (arrKeys[i] === array[j]) {
    delete object[arrKeys[i]];
    }
  }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes a parameter array
function dedup(array) {
 // return a new array with all the duplicates removed
return newArr = [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}