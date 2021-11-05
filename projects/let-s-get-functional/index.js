// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rodolfo-machirica7.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(customers) {
  // filter customers with male gender
   var males =  _.filter(customers, function(element){
return element["gender"] === "male";
});
// find count of male customers
var count = males.length;
//return count
return count;
}

var femaleCount = function(customers) {
    //reduce the number of female customers
   var females = _.reduce(customers, function(prev, current){
        return prev + (current.gender === "female"); 
   }, 0)
   // return the female customer count
   return females;
}

var oldestCustomer = function(customers) {
var oldestCustomerName = _.reduce(customers, function(prev, current, index){
  if (current.age > prev.age) {
    return current;
  } else {
    return prev;
  }
});
return oldestCustomerName.name;
}

var youngestCustomer = function(customers) {
    var youngestCustomerName = _.reduce(customers, function(prev, current, index){
      if (current.age < prev.age) {
        return current;
      } else {
        return prev;
      }
    });
    return youngestCustomerName.name;
}

var averageBalance = function(customers){

  var reduced =_.reduce(customers, function(prev, current){
     var currbalance = Number(current.balance.replace(/[$,]/g, ""));
   console.log(currbalance);
   return currbalance += prev;
  }, 0);
  console.log(reduced);
  var average = reduced / customers.length;
  console.log(average);
  return average;
  }

var firstLetterCount = function(customers, letter){
  //use filter to filter names that begin with a certain letter
  var customersFirstLetterA = _.filter(customers, function(element){
    // check if name at position 0 starts with letter
    if (element.name[0] === letter.toLowerCase() || element.name[0] === letter.toUpperCase()) {
      // return element
      return element;
    }
  })
  //return total number of elements whose name start with letter
  return customersFirstLetterA.length;
}

var friendFirstLetterCount = function(customers,customer, letter) {
  // filter customer whose name is customer
  var countFriends =_.filter(customers, currCustomer => currCustomer.name === customer);
  // filter friends array from customer and 
  var firstLetters = countFriends[0].friends.filter(friend=> friend.name[0].toLowerCase() === letter.toLowerCase());
  console.log(firstLetters);
  return firstLetters.length;
}


  var friendsCount = function(customers, givenCustomerName) {
    //iterate over customers array to access each customer object
    var friendInList =_.filter(customers, function(customer){
     
    var friends = customer.friends;
    //console.log(friends);
    for (var i = 0; i < friends.length; i++) {
      //console.log(friends[i])
      if (friends[i].name === givenCustomerName) {
        return true;
      }
    }
    }).map(customer => customer.name);
    
    //console.log(friendInList)
      return friendInList;// array of customers
}
var topThreeTags = function(array){
  //create a variable with an array of tag arrays
  var tagsArray =_.map(array, (val) => val.tags).reduce((prev, curr) => prev.concat(curr), []);

  // console.log(tagsArray)
  // create obj to store key/value pairs of tags/occurrences
  var objectOfTags = {};
  //loop through tagsArray to create object w/ counts
  for(var i = 0; i < tagsArray.length; i++){
    if(objectOfTags[tagsArray[i]] !== undefined){
      objectOfTags[tagsArray[i]] += 1;
    } else{
      objectOfTags[tagsArray[i]] = 1;
    }
  };
  console.log(objectOfTags);
  //use Object.entries to put all key/values in an array of arrays
  return Object.entries(objectOfTags) 
  
  //sort through the array in descending order based on values
  .sort((a,b)=>b[1]-a[1])
  //map through items to return sorted keys
  .map(item=>item[0])
  //slice a copy of top three tags
  .slice(0,3)
};

var genderCount = function(customers){
  var genderCount = function(customers){
    var genderNonBinary = _.reduce(customers, function(prevGender, currentGender){
      if (currentGender.gender === "non-binary") {
        prevGender += 1;
      }
      return prevGender;
    }, 0);
    return genderNonBinary;
  };
  return {"non-binary": genderCount(customers),
          "male": maleCount(customers),
        "female": femaleCount(customers)};
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
