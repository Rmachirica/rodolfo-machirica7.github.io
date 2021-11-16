// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
// write a function name greeting that takes three
//parameters (greeting, location and time)
var greeting = (greeting, location, time) => {

   // declare a variable and assign it to the concatenation of
   // greeting parameters
    var greetingForPatrons = `${greeting} ${location} ${time}`;
   console.log(greetingForPatrons);
}

// 2.// assign a function to contestants 
var contestants = (array) => {
   return array.length;
}


// 3.
// dogContestants is a function that takes an array

    // call filter on dogContestants to filter all animals
    // that aren't dogs
    var filterSpecies  = dogs.filter(object=>{
        if (object.species === "dog") {
            return true;
        }
        return false;
    });
// 4. 

var dogContestants = [...filterSpecies];



// 5. 

var dogsWithClasses = dogContestants.map(function(dog) {
    var mappedDog = Object.assign({}, dog);
     if (mappedDog.weight >= 0 && mappedDog.weight <= 10) {
         mappedDog["class"] = "red";
     } else if (mappedDog.weight >= 11 && mappedDog.weight <= 20) {
        mappedDog["class"] = "yellow";
     } else if (mappedDog.weight >= 21) {
         mappedDog["class"] = "green";
     }
    
    console.log(mappedDog)
    return mappedDog;
});
    


// 6.
var firstInClass = (topDogs)=> {
    // declare an empty object
    var object = {};
    // base case
    if (topDogs.length === 0) {
        return {};
    } else { 
        //recursive case
    Object.assign(object, topDogs[0])
    return Object.assign(object, firstInClass(topDogs.slice(1)));
    }

}
console.log(firstInClass)

// 7.
var votes = dogs.reduce(function(totalVotes, currentCount){
    return totalVotes += currentCount.votes;
}, 0);
//console.log(votes);
