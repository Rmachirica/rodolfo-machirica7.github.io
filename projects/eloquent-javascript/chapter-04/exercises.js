////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(startNum, endNum, step) {
  var min = Math.min(startNum, endNum);
  // find max of range
  var max = Math.max(startNum, endNum);
  var newRange = [];
  // find the minimum of range
  if (step) {
    if (step > 0) {
      for (var i = min; i <= max; i += step) {
        // now we push the value of i into our newRange array.
        newRange.push(i);
      }
    }else if (step <= 0) {
      return [];
    }
  } else if (min === max) {
    return [];
  } else {
    for (var j = min; j <= max; j++) {
      newRange.push(j);
    }
  }
  return newRange;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var sum1 = 0;
  for (var i = 0; i <= array.length -1; i++) {
  sum1 = sum1 + array[i];
  }
  return sum1;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // constructive manipulation of data by copying
  var newArr = array.slice();
  // array for reversed newArr
  var reversedArr = [];
// write a for loop to loop over array backwards
for (var i = newArr.length -1; i >= 0; i--) {
  //push values of newArr[i] to reversedArr
    reversedArr.push(newArr[i]);
}
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  var reversedArr = [];
  // write a for loop to loop over array backwards
  for (var i = array.length - 1; i >= 0; i--) {
    //console.log(array[i]);
    //push values of newArr[i] to reversedArr
      reversedArr.push(array[i]);
  }
  // if our input array was ["a", "b", "c", "d"]
  // Now reversedArr => ["d", "c", "b", "a"]
  // loop over reversedArr
  for(var j = 0; j <= reversedArr.length - 1; j++) {
    //console.log(reversedArr[j]);
  //splice reversedArr[i] into  arr at i
   array.splice(j, 1, reversedArr[j]);
  
  }
  //console.log(array);
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
let rest = null;
// iterate through input array backwards
for (var i = array.length -1; i >= 0; i--) {
  //take rest and set it to an object with a key of value
  rest = {value: array[i], rest};
}
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  if (list.rest === null) {
     return list.value;
  } else {
  
    return [list.value].concat(listToArray(list.rest));
  }
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
 //initial value of rest
 let rest = list;
 //add element to list
 rest = {value: element, rest}
 return rest;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  //if its 0, return list.value
  if (num === 0) {
    return list.value;
  } else if(list.rest === null) {
    return undefined;
  } else {
  //if its 1, return nth(list.rest, num - 1)
  return nth(list.rest, num - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  // determine if val1 is deeply equal to val2
  if (typeof val1 !== "object" && typeof val2 !== "object") {
    if (val1 === val2) {
      return true;
    }
    return false;
  } // termine if one of the values is null
  if (val1 === null || val2 === null) {
    return false;
  }
  // create arrays of the keys of input object
  var a = Object.keys(val1);
  var b = Object.keys(val2);
  if (a.length !== b.length) {
    return false;
  }
  // iterate through keys of a and b
  for (var i = 0; i < a.length; i++) {
    // check if element is included in b
    if (!b.includes(a[i]) || !deepEqual(val1[a[i]], val2[b[i]])) {
      return false;
    }
  }
  return true;
  }
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
