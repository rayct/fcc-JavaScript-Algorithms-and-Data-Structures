// Use Destructuring Assignment to Extract Values from Objects







// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// Use the Rest Parameter with Function Parameters
const sum = (...args) => { 
    return args.reduce((a, b) => a + b, 0);
  };

console.log(sum(1, 2, 3, 4));

// Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  return new Date();
};
console.log(magic);

// Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

s [0] = 2;
s [1] = 5;
s [2] = 7;
  

  // Only change code above this line
}
editInPlace();
console.log(s);
 
// Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  // const SENTENCE = str + "is amazing!";

  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");


//Compare Scopes of the var and let Keywords.
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();

// ES6 Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
console.log(catTalk(data));
// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
  return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr
  }
};
console.log(rangeOfNumbers(5, 8));

// Use Recursion to Create a Countdown
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

// Use Multiple Conditional (Ternary = ?) Operators
function checkSign(num) {
  return num > 0 ? "positive"
    : (num < 0) ? "negative"
      : "zero";
 }

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
console.log(checkEqual);

// Use the parseInt Function with a Radix
function convertToInteger(str) {
return parseInt(str, 2);
}
convertToInteger("10011");

// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("007");


// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  // Only change code above this line
}
var myRandom = randomRange(5, 15);
console.log(randomRange());


// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  // Only change code below this line
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());


// Generate Random Fractions with JavaScript
function randomFraction() { 
  return Math.random ();
  console.log(randomFraction);
}

// Profile Lookup
// Array of Objects with key value pairs
var contacts = [
  // 1st Object
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  // 2nd Object
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
    // 3rd Object
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
  },
   // 4th Object
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
// Look up function
function lookUpProfile(name, prop) {
  // Only change code below this line

    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";

  // Only change code above this line
}


var data = lookUpProfile("Kristian", "lastName");
console.log(data);


// Replace Loops using Recursion (n = negate, or NOT gate)
function sum(arr, n) {
if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1)+ arr[n - 1];
    }
}
console.log(sum([2, 3, 4], 1));


// Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(myArray);

// Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);


// Count Backwards With a For Loop
var myArray = [];
for (var i = 10; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);
 
 
// Iterate Odd Numbers With a For Loop
var myArray = [];
for (var i = 1; i < 11; i += 2) {
  myArray.push(i);
}
console.log(myArray);


// Iterate with JavaScript For Loops
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);


// Iterate with JavaScript While Loops
// Setup
var myArray = [5, 4, 3, 2, 1, 0];
var i = 5;
while(i < 0) {
  myArray.push(i);
  i++;
}
console.log(myArray);
// Only change code below this line


// Record Collection

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Solution 1
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
// Code Explanation

//     First checks if value is a blank string. If so, then the key (prop) is removed from the object.
//     If that first check doesn’t pass, it next checks if prop is equal to tracks. The tracks array is initialized if it does not exist, and then value is pushed into the tracks array. (This step uses shortcircuit evaluation)
//     If both these checks fail (meaning value is not an empty string and prop is not tracks), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.

// Example Run

//     updateRecords(5439, "artist", "ABBA"); runs.
//     value is not a blank string, so the first condition of the else if statement fails.
//     prop is equal to “artist”, not “tracks”, so the second condition of the else if statement fails.
//     in the ‘else’ clause, artist: "ABBA" is added to the 5439 id.

// Relevant Links

//     fCC’s challenge: Accessing Objects Properties with Bracket Notation 545
//     fCC’s challenge: Add New Properties to a JavaScript Object 185
//     fCC’s challenge: Delete Properties from a JavaScript Object 67
//     fCC’s challenge: Accessing Nested Objects 168
//     “Array.prototype.push()” - MDN JavaScript reference 196
//     “delete operator” - MDN JavaScript reference 126
//     shortcircuit evaluation 474



// Solution 2
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}


console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);


// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

// Manipulating Complex Objects
var myMusic = [
    // Object One
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],

        "gold": true
    },
    // Object Two
    {
        "artist":  "Pink_Floyd",
        "title": "Dark_Side_of_the_Moon",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "Vynal LP",
            "Cassette"
    ],
        "gold": true

    }

];

function checkObj(obj, checkProp) {
    // Only change code below this line
    var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh",
        city: "Seattle"
    };
    if (obj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
    // Only change code above this line
}


// Using Objects for lookups
// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    
    // Only change code above this line
    return result;
}

console.log(phoneticLookup("charlie"));
// switch (val) {
//     case "alpha":
//         result = "Adams";
//         break;
//     case "bravo":
//         result = "Boston";
//         break;
//     case "charlie":
//         result = "Chicago";
//         break;
//     case "delta":
//         result = "Denver";
//         break;
//     case "echo":
//         result = "Easy";
//         break;
//     case "foxtrot":
//         result = "Frank";
// }



// Delete Properties from a JavaScript Object
// Setup using . or Bracket Notation
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog["tails"];
delete myDog.tails;
console.log(myDog);



// Add new properties to a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
console.log(myDog.bark);



// Updating Object Properties
// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
console.log(myDog.name);


// Accessing Object Properties with Variables
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

console.log(player);



// Accessing Object Properties with Bracket Notation
// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line



// Accessing Object Properties with Dot Notation
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line
console.log(hatValue);





// Build JavaScript Objects
var myDog = {
    // Only change code below this line
    "name": "Buster",
    "legs": 4,
    "tails": 1,
    "friends": []

    // Only change code above this line
};



// Counting Cards
var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = 'hold'
    if (count > 0) {
        holdbet = 'bet'
    }

    return count + " " + holdbet;
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');




// Return Early Pattern for Functions
// function abTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(2, 8));


// function isLess(a, b) {

    // return a < b; {
        // return true;


    // isLess(10, 15);



// function chainToSwitch(val) {
//     var answer = "";
//     // Only change code below this line

//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case "John":
//             answer = "";
//             break;
//         case 156:
//             answer = "";
//             break;
//         default:
//         case 7:
//             answer = "Ate Nine";
//     }

//     // Only change code above this line
//     return answer;
// }

// console.log(chainToSwitch(7));