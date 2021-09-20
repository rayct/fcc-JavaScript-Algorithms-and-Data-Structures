// ============================== OBJECT ORIENTATED PROGRAMMING ============================ //
// Object Orientated Programming = Q26/26 - 
// NOTES:




// Object Orientated Programming = Q25/26 -
// NOTES:




// Object Orientated Programming = Q24/26 -
// NOTES:




// Object Orientated Programming = Q23/26 -
// NOTES:




// Object Orientated Programming = Q22/26 -
// NOTES:




// Object Orientated Programming = Q21/26 -
// NOTES:




// Object Orientated Programming = Q20/26 -
// NOTES:




// Object Orientated Programming = Q19/26 -
// NOTES:




// Object Orientated Programming = Q18/26 -
// NOTES:




// Object Orientated Programming = Q17/26 - Use Inheritance So You Don't Repeat Yourself
// NOTES: There's a principle in programming called Don't Repeat Yourself (DRY).
// The reason repeated code is a problem is because any change requires fixing code in multiple places.
// This usually means more work for programmers and more room for errors.
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    // console.log('My name is ' + this.name);
  }

};
console.log(Animal.prototype);
console.log(Bear.prototype);
console.log(Cat.prototype);

 
// Object Orientated Programming = Q16/26 - Understand the Prototype Chain
// NOTES:
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));


// Object Orientated Programming = Q15/26 - Understand Where an Object’s Prototype Comes From
// NOTES:
// Solution 1
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));
console.log(beagle);

// Solution 2
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));

beagle = {
  constructor: Dog,
  numLegs: 4
};

console.log(beagle.constructor);
console.log(Dog.prototype.isPrototypeOf(beagle));


// Object Orientated Programming = Q14/26 - Remember to Set the Constructor Property when Changing the Prototype
// NOTES: Define the constructor property on the Dog prototype. 
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, // Define the constructor property
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
let buster = new Dog('Buster');
console.log(buster.constructor === Object);


// Object Orientated Programming = Q13/26 - Change the Protoype to a New Object Orient
// NOTES: Protype properties have the console.log in them.
// 
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log('Dog Food');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};
let buster = new Dog('Buster')

console.log(buster);
buster.describe();


// Object Orientated Programming = Q12/26 - Understand the Constructor Property
// NOTES: Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
// SOLUTION 1.
function Dog(name) {
  this.name = name;
}
let buster = new Dog('Buster')

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }

}
console.log(buster.constructor === Dog);

// SOLUTION 2.
function Dog(name) {
  this.name = name;
}

let buster = new Dog('Buster')

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor !== Dog) {
    return false;
  } else {
    return true;
  }

}
console.log(buster.constructor === Dog);


// Object Orientated Programming = Q11/26 - Iterate Over All Properties
// NOTES: 
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(beagle);
console.log(ownProps);
console.log(prototypeProps);


// Object Orientated Programming = Q10/26 - Use Prototype Properties to Reduce Duplicate Code
// NOTES: Added a numLegs property to the prototype of Dog
function Dog(name) {
  this.name = name;
}

Dog.protoype.numLegs = 4;

// Only change code above this line
let beagle = new Dog('Snoopy');
console .log(beagle);


// Object Orientated Programming = Q9/26 - Understand Own Properties
// NOTES: 
function Bird(name) { //  Start of the Object
  this.name = name; // Property 1
  this.numLegs = 2; // Property 2
}  // End of Object

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProbs.push(proprty);
  }
}
console.log(ownProps);

// Object Orientated Programming = Q8/26 - Verify an Object's Constructor with instanceof
// NOTES: 1. myHouse should have a numBedrooms attribute set to a number.
// NOTES: 2. You should verify that myHouse is an instance of House using the instanceof operator.
// NOTES: 3. Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.
// JavaScript gives a convenient way to verify this with the instanceof operator.
// instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;

}
let myHouse = new House(4);
myHouse instanceof House;
console.log(myHouse);

// Object Orientated Programming = Q7/26 - Extend Constructors to Receive Arguments
// NOTES:
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog();
console.log(terrier);

// Object Orientated Programming = Q6/26 - Use a Constructor to Create Objects
// NOTES: 
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
console.log(hound);

// Object Orientated Programming = Q5/26 - Define a Consturctor Function
// NOTES: Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object.
// Think of them as a blueprint for the creation of new objects
function Dog() {
  this.name = 'Buster';
  this.color = 'Brown';
  this.numLegs = 4;
}
console.log('Dog');

// Object Orientated Programming = Q4/26 - Make Code More Reusable with the this Keyword
// NOTES: Modify the dog.sayLegs method to remove any references to dog.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs());

// Object Orientated Programming = Q3/26 - Create a Method on an Object
// NOTES: Objects can have a special type of property, called a method.
// Methods are properties that are functions. This adds different behavior to an object.

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){return "This dog has " + dog.numLegs + " legs."}

};

console.log(dog.sayLegs());

// Object Orientated Programming = Q2/26 - Use Dot Notation to Access the Properties of an Object
// NOTES: 
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);

// Object Orientated Programming = Q1/26 - Create a Basic JavaScript Object
// NOTES: Below is an Example of a JavaScript Object with two propertie/value pairs.
let dog = {
  name: 'Buster',
  numLegs: 4
};
console.log(dog);


// ============================== BASIC ALGORITHM SCRIPTING ================================ //
// Basic Algorithm Scripting = Q16/16 - Chunky Monkey
// NOTES: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let result = [];


  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
  
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Basic Algorithm Scripting = Q15/16 - Mutations
// NOTES: 
// Mutations - Solution 1
function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();

  for (let j = 0; j < secondElement.length; j += 1) {
    let letter = secondElement[j];
    
    if (firstElement.indexOf(letter) === -1) {

      return false;
    }
  }
 return true;
}

console.log(mutation(["hello", "hello"]));

// Mutations - Solution 2
function mutation(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arr[i].toLowerCase();
  }
  
  for (let j = 0; j < newArr[1].length; j += 1) {
    if (newArr[0].indexOf(newArr[1][j]) < 0)
      return false;
  }
 return true;
}

console.log(mutation(["hello", "hey"]));

// Basic Algorithm Scripting = Q14/16 - Where do I Belong
// NOTES: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
  let sortedArray = arr.sort(function(a, b){return a - b});

  for (let i = 0; i < sortedArray.length; i += 1) {
    if (num > arr[i - 1] && num <= arr[i]) {
      return i;
    }
  }
  if (sortedArray[sortedArray.length -1] < num){
    return sortedArray.length;
  }
  return 0;
}

console.log(getIndexToIns([40, 60], 50));

// Basic Algorithm Scripting = Q13/16 - Falsy Bouncer
// NOTES: 
function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

// Basic Algorithm Scripting = Q12/16 - Slice and Splice
// NOTES: You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
let splicedArr = [...arr2];

  splicedArr.splice(n, 0, ...arr1);  

  return splicedArr;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Basic Algorithm Scripting = Q11/16 - Title Case a Sentence Case
// NOTES: Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
function titleCase(str) {
  let result = '';
  let words = str.split('');
  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    for (let j = 0; j < word.length; j += 1) {
      if (j === 0) {
        result += word[j].toUpperCase();
      } else {
        result += word[j].toLowerCase(); 
      }
    }
    if (words.length - 1 !== i) {
      
      result += '';
    }
  } 
  return str.toLowerCase().split(" ").map(upper => upper[0].toUpperCase() + upper.slice(1)).join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Basic Algorithm Scripting = 10/16 - Boo who
// NOTES: Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
function booWho(bool) {
  if (typeof bool == 'boolean') {
    // console.log(bool);
    return true;
  }

  return false;
}

console.log(booWho(typeof true));

// Basic Algorithm Scripting = Q9/16 - Finders Keepers
// NOTES: A function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i]) Output the Array at position [i]
    if (func(arr[i])) {
      return arr[i];
    
    }
  }
  return undefined;
  
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// Basic Algorithm Scripting = Q8/16 - Truncate a String
// NOTES:
function truncateString(str, num) {
  if (num >= str.length) {
    return str;

  }
  return str.slice(0, num) + '...';

  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
}

// Basic Algorithm Scripting = Q7/16 - Repeat a String Repeat a String
// NOTES:
function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return '';
  }
  let result = '';

  for (let i = 0; i < num; i+= 1) {
    result += str;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3));

// Basic Algorithm Scripting = Q6/16 - Confirm the Ending
// NOTES:
function confirmEnding(str, target) {
  let targetLength = target.length;
  let targetMatch = str.slice(str.length - targetLength);
  // console.log(targetMatch);
  if (targetMatch == target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));

// Basic Algorithm Scripting = Q5/16 - Return Largest Numbers in Arrays
// NOTES:
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let individualArray = arr[i];
    let individualHighestNum = -Infinity;
    for (let v = 0; v < individualArray.length; v += 1) {
      if (individualHighestNum < individualArray[v]) {
        individualHighestNum = individualArray[v];
      }
    }
      result.push(individualHighestNum);
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Basic Algorithm Scripting = Q4/16 - Find the Longest Word in a String
// NOTES: 
function findLongestWordLength(str) {
  let longestWord = "";
  let words = str.split(" ");

  for (let i = 0; i < words.length; i += 1) {
    let individualWord = words[i];
    if (individualWord.length > longestWord.length) {
      longestWord = individualWord;
    }

  }

  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Basic Algorithm Scripting = Q3/16 - Factorialize a Number
// NOTES: Using A WHile Loop and a FOR Loop

// ====== FOR LOOP ===== //
function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(factorialize(10));

// ====== WHILE LOOP ===== //
function factorialize(num) {
  let result = 1;

  while (num > 0) {
    result *= num;
    num -= 1;
  }
  return result;
}

console.log(factorialize(10));

// Basic Algorithm Scripting = Q2/16 - Reverse a String
// NOTES: 
function reverseString(str) {
  return str.split("").reverse().join(['']);
}

console.log(reverseString("hello"));

// WITH A FOR LOOP
function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length - 1; i -= 1) {
    result += str[i];

  }
  return result;
  console.log(reverseString("hello"));

// Basic Algorithm Scripting = Q1/16 - Convert Celsius to Fahrenheit
// NOTES: 
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

console.log(convertToF(30));

// REFACTORED_ALGORITHM
function convertToF(celsius) {
  return celsius * 9/5 + 32;
}

console.log(convertToF(30));


// ============================== BASIC DATA STRUCTURES ================================ //
// Basic Data Structures = Q20/20 -  Modify an Array Stored in an Object
// NOTES: 
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));

// Basic Data Structures = Q19/20 - Generate an Array of All Object Keys with Object.keys()
// NOTES: Finished writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

// Basic Data Structures = Q18/20 - Iterate Through the Keys of an Object with a for...in Statement
// NOTES: 
function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = 0;

  // for (let user in usersObj) {
  //   if (usersObj [user] ['online']) {
  for (let user in usersObj) {
    let onlineStatus = usersObj[user]['online']; // Refactored Code
    if (onlineStatus) { // Refactored Code
      onlineUsers += 1;
    }
  }

  return onlineUsers;
}
  
  let exampleUsers = {
    Alan: { online: false },
    Jeff: { online: true },
    Sarah: { online: false }
  }

console.log(countOnline(exampleUsers));
  // Only change code above this line

// Basic Data Structures = Q17/20 - Check if an Object has a Property
// NOTES:
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  let everyone = ['Alan', 'Jeff', 'Sarah', 'Ryan'];

  for (let i = 0; i < everyone.length; i += 1) {
    let people = everyone[i];
    if (userObj.hasOwnProperty(people) === false){
      return false;
    }
  }
  return true;

  // Only change code above this line
}

console.log(isEveryoneHere(users));

// Basic Data Structures = Q16/20 - Use the delete Keyword to Remove Object Properties
// NOTES:
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods['oranges']);

// Basic Data Structures = Q15/20 - Access Property Names with Bracket Notation
// NOTES: 
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// Basic Data Structures = Q14/20 - Modify an Object Nested Within an Object
// NOTES: Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects.
// Consider the following
// nestedObject has three properties: id (value is a number), date (value is a string), and data (value is an object with its nested structure).
// While structures can quickly become complex, we can still use the same notations to access the information we need.
// To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property:
// ===================================================================
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
// ===================================================================

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
// userActivity.data.online = 45; // Using Dot Notation
userActivity['data']['online'] = 45; // Using Bracket Notation
// Only change code above this line

console.log(userActivity.data);

// ===================================================================
// Basic Data Structures = Q13/20 - Add Key-Value Pairs to JavaScript Objects
// NOTES: At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).
// Object Notation
// Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
// The property is enclosed in quotes to denote it as a string and will be added exactly as shown.
// Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is.
// Here's an example with a variable:
const strawberries = 'strawberrie color';

foods[strawberries] = 'red';

// ===========================
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13; // Dot Notation 
foods['grapes'] = 35; // Bracket Notation
foods.strawberries = 27; // Dot Notation
// Only change code above this line

console.log(foods['strawberries']);
// ===========================



// Basic Data Structures = Q12/20 - Create complex multi-dimensional arrays or Nested Arrays
// NOTES:
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  [
    'concat',
    false,
    true,
    'spread',
    'array',
    ['deep',
     ['deeper', 
       ['deepest'
        ]
        ] 
      ]
    ],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
console.log(myNestedArray.length);

// Basic Data Structures = Q11/20 - Iterate Through All an Array's Items Using For Loops
// NOTES: 
//  Shortcut way
// for (let i = 0; i < arr.length; i++) {
    // if (!arr[i].includes(elem)) {
      // newArr.push(arr[i]);
    // }    
// }
 
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
  // for (let i = 0; i < arr.length; i += 1) { // You could also use this method
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Basic Data Structures = Q10/20 - Check For The Presence of an Element With indexOf()
// NOTES: Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists.
// Luckily, JavaScript provides us with another built -in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array.
// indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or - 1 if the element does not exist on the array. 
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) === -1) {

    return false;      
  } else {
    return true;
  }
  // Only change code above this  line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Basic Data Structures = Q9/20 - Combine Arrays with the Spread Operator
// NOTES: Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index.
// With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another.
// Spread syntax makes the following operation extremely simple:
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

// Basic Data Structures = Q8/20 - Copy an Array with the Spread Operator
// NOTES: In practice, we can use the spread operator to copy an array
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
// console.log(copyMachine([1, 2 ,3], 5));

// Basic Data Structures = Q7/20 - Copy Array Items Using Splice
// NOTES:
function forecast(arr) {
  // Only change code below this line

  return arr.slice(2, 4); // This will return [ 'warm', 'sunny' ]
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Basic Data Structures = Q6/20 - Add Items Using Splice
// NOTES: You can use the third parameter, comprised of one or more element(s), to add to the array.
// This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
function htmlColorNames(arr) {
  // Only change code below this line

  const startIndex = 0;
  const amountToDelete = 2;

  arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Basic Data Structures = Q5/20 - Remove Items Using Splice
// NOTES: 
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let newArray = arr.splice(1, 4);
// Only change code above this line
console.log(arr);

// Basic Data Structures = Q4/20 - Remove Items from an Array with pop() and shift()
// NOTES: 
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Basic Data Structures = Q3/20 - Add Items to an Array with push() and unshift()
// NOTES: Push() method adds elements to the end of an array, and unshift() adds elements to the beginning. Consider the following:
function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// Basic Data Structures = Q2/20 - Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray['b'] = 'f';
// Only change code above this line
console.log(myArray);
// NOTE: If we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:
let ourVariable = ourArray[0];

// Basic Data Structures = Q1/20 - Use an Array to Store a Collection of Data
// NOTE: #1 A One Dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it.
let yourArray = ['Ray', 1972, '26', true, null]; // Change this line

// A more complex implementation of an array can be seen below.
// This is known as a multi - dimensional array, or an array that contains other arrays.
// Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.
// NOTE: #2
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];


// ============================== DEBUGGING ================================ //
// Debugging = Q12/12 - Prevent Infinite Loops with a Valid Terminal Condition
// NOTE: 
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

// Debugging = Q11/12 - Use Caution When Reinitializing Variables Inside a Loop.
// NOTES: This error occurs due to the row[] array being declared as a global variable outside of the nested for loop.
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; // NOTE: array is not a global variable as it is inside the nested for loop
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// Debugging = Q10/12 - Catch Off By One Errors When Using Indexing (sometimes called OBOE).
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

// Debugging = Q9/12 - Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(e, b) {
  return Math.pow(e, b);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// Debugging = Q8/12 - Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

// Debugging = Q7/12 - Catch Use of Assignment Operator Instead of Equality Operator
// NOTES: Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript.
// The condition sometimes takes the form of testing whether a result is equal to a value.
// This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the =, or assignment operator.
// This leads to unexpected control flow in your program.
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Debugging = Q6/12 - Catch Mixed Usage of Single and Double Quotes
// NOTES: JavaScript allows the use of both single (') and double (") quotes to declare a string.
// Deciding which one to use generally comes down to personal preference, with some exceptions.
// Having two choices is great when a string has contractions or another piece of text that's in quotes.
// Just be careful that you don't close the string too early, which causes a syntax error.
// Example One: Using Single Quotes for the href
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
// Example Two: Using escape quotes inside the string by using the backslash (\) escape character:
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

// Debugging = Q5/12 - Catch Unclosed Parentheses, Brackets, Braces and Quotes
// NOTES:
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current ) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Debugging = Q4/12 - Catch Misspelled Variable and Function Names
// NOTES: The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output.
// Now it's time to get into the common forms that bugs take.
// One syntax-level issue that fast typers can commiserate with is the humble spelling error.
// Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error.
// JavaScript variable and function names are case-sensitive.
// TASK: Fix the two spelling errors in the code so the netWorkingCapital calculation works
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// Debugging = Q3/12 - Use typeof to Check the Type of a Variable
// NOTES: 
// You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types.
// If you think you're adding two numbers, but one is actually a string, the results can be unexpected.
// Type errors can lurk in calculations or function calls.
// Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven); // Number
console.log(typeof three); // String

// Debugging = Q2/12 - Understanding the Differences between the freeCodeCamp and Browser Console
// NOTES: 
let output = "(Get this to log once in the freeCodeCamp console and twice in the browser console";
console.clear();
console.log(output);

// Debugging = Q1/12 - Use the JavaScript Console to Check the Value of a Variable
// NOTES: Placing it at strategic points in your code can show you the intermediate values of variables.
// It's good practice to have an idea of what the output should be before looking at what it is.
// Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.
let a = 5;
let b = 1;
a++;
// Only change code below this line
let sumAB = a + b;
console.log(a);

// ============================== REGEX ================================ //
// Regular Expressions = Q33/33 - Remove Whitespace from Start to End
// NOTES: Sometimes whitespace characters around strings are not wanted but are there.
// Typical processing of strings is to remove the whitespace at the start and end of it.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);

// Regular Expressions = Q32/33 - Use Capture Groups to Search and Replace
// NOTES: Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
// You can search and replace text in a string using .replace() on a string.
// The inputs for .replace() is first the regex pattern you want to search for. 
// The second parameter is the string to replace the match or a function to do something.
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);

// Regular Expressions = Q31/33 - Reuse Patterns Using Capture Groups
// NOTES: Capture groups can be used to find repeated substrings.
// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.
// In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
// The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1).
// Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);

// Regular Expressions = Q30/33 - Check For Mixed Grouping of Characters
// NOTES: Use .* to allow for middle names.
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
console.log(result);
// After passing the challenge experiment with myString and see how the grouping works

// Regular Expressions = Q29/33 - Positive and Negative Lookahead
// NOTES: Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
// This can be useful when you want to search for multiple patterns over the same string.
// There are two kinds of lookaheads: positive lookahead and negative lookahead.
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// A negative lookahead will look to make sure the element in the search pattern is not there.
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
// The rest of the pattern is returned if the negative lookahead part is not present.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);

// Regular Expressions = Q28/33 - Check for All or None
// NOTES: Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
// You can specify the possible existence of an element with a question mark, 
// You can think of this symbol as saying the previous element is optional.
// For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line = ?. This checks for zero or one of the preceding element.
let result = favRegex.test(favWord);
console.log(result);

// Regular Expressions = Q27/33 - Specify Exact Number of Matches =
// NOTES: Sometimes you only want a specific number of matches.
// To specify a certain number of patterns, just have that one number between the curly brackets.
// For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; //Change this line to something result 
let result = timRegex.test(timStr);
console.log(result);

// Regular Expressions = Q26/33 - Specify Only the Lower Number of Matches
// NOTES: You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.
// Sometimes you only want to specify the lower number of patterns with no upper limit.
// To only specify the lower number of patterns, keep the first number followed by a comma.
//  For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
console.log(result);

// Regular Expressions = Q25/33 - Specify Upper and Lower Number of Matches
// NOTES: You can specify the lower and upper number of patterns with quantity specifiers. 
// Quantity specifiers are used with curly brackets({ and }).
// You put two numbers between the curly brackets - for the lower and upper number of patterns.
// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
// \s = include white space, and /on{3,6}\sno/i. i = ignores case sensitivity
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);


// Regular Expressions = Q24/33 - Match Non-Whitespace Characters
// NOTES: Search for non-whitespace using \S, which is an uppercase s. 
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
// You can think of it being similar to the character class [^ \r\t\f\n\v].
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result);

// Regular Expressions = Q23/33 - Match Whitespace
// NOTES: You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
// You can think of it as similar to the character class [\r\t\f\n\v].
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

// Regular Expressions = Q22/33 - Restrict Possible Usernames
// NOTES: 
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+|[0-9]\d+)\d*$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

// Regular Expressions = Q21/33 - Match All Non-Numbers
// NOTES: You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
// The shortcut to look for non-digit characters is \D.
// This is equal to the character class [^ 0 - 9], which looks for a single character that is not a number between zero and nine.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);

// Regular Expressions = Q20/33 - Match All Numbers
// NOTES: The shortcut to look for digit characters is \d, with a lowercase d.
// This is equal to the character class [0 - 9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result);

// Regular Expressions = Q19/33 - Match Everything But Letters and Numbers
// NOTES: The shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// You can search for the opposite of the \w with \W. 
// Note, the opposite pattern uses a capital letter.
// This shortcut is the same as [^ A - Za - z0 -9_].
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

// Regular Expressions = Q18/33 - Match All Letters and Numbers
// NOTES: \w = This character class matches upper and lowercase letters plus numbers.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

// Regular Expressions = Q17/33 - Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result);
// Regular Expressions = Q16/33 - Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);

// Regular Expressions = Q15/33 - Find One or More Criminals in a Hunt
// NOTES:  plus + sign to look for characters that occur one or more times.
let reCriminals = /C+/; // Change this line
console.log(reCriminals);

// Regular Expressions = Q14/33 - Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line = the ? character to change it to lazy matching.
let result = text.match(myRegex);
console.log(result);
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// Regular Expressions = Q13/33 - Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line = * Matches characters that occur zero or more times.
// Only change code above this line
let result = chewieQuote.match(chewieRegex);
console.log(result);

// Regular Expressions = Q12/33 - Match Characters that Occur One or More Times, plus + sign to look for characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

// Regular Expressions = Q11/33 - Match Single Characters Not Specified eg: negated character sets.
let quoteSample = "3 blind mice";
let myRegex = /[^aeiou,3]/gi; // Change this line
let result = quoteSample.match(myRegex);
console.log(result);

// Regular Expressions = Q10/33 - Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

// Regular Expressions = Q9/33 - Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]gi/; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);

// Regular Expressions = Q8/33 - Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line = Using Global Flags g and i.
let result = quoteSample.match(vowelRegex); // Change this line
console.log(vowelRegex);

// Regular Expressions = Q7/33 - Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line = The wildcard character . will match any one character.
let result = unRegex.test(exampleStr);
console.log(unRegex);

// Regular Expressions = Q6/33 - Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let startRegex = /Twinkle/gi; // g-flag Extracts a pattern more than once, i-flag ignores case sensitivety
let result = twinkleStar.match(starRegex);
console.log(starRegex);

// Regular Expressions = Q5/33 - Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(codingRegex); // Change this line

// Regular Expressions = Q4/33 - Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(fccRegex);
// Regular Expressions = Q3/33 - Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(petRegex);
// Regular Expressions = Q2/33 - Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result);

// Regular Expressions = Q1/33 - Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(myRegex);

// ============================== ES6 ================================ //

// ES6 = Q31 - Handle a Rejected Promise with catch - ES6 Completed
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.catch(error => {
  console.log(error);
});

//  ES6 = Q30 - Handle a Fulfilled Promise with then
// # Solution 1
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => console.log(result));
// # Solution 2
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => { 
  console.log(result);
});

//  ES6 = Q29 - Complete a Promise with resolve and reject
// FYI A promise has three states: pending, fulfilled, and rejected
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
    resolve("We got the data");
  } else {  
    reject("Data not received");
    // Change this line
  }
});

//  ES6 = Q28 - Create a JavaScript Promise
const makeServerRequest = new Promise((reolve, reject) => {

});

//  ES6 = Q27 - Import a Default Export 
import subtract from './math_functions.js';
// Only change code above this line
subtract(7,4);

//  ES6 = Q26 - Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

// ES6 = Q25 - Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// ES6 = Q24 - Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

// ES6 = Q23 - Use expot to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { lowercaseString, uppercaseString };

// ES6 = Q22 - Create a Module Script
<html lang="en">
  <body>
    <script src="module" src="index.js"></script>
  </body>
</html>

// ES6 = Q21 - Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
  constructor(temp) {
    this._temp = 5/9 * (temp - 32); 
  }
  // getter
  get temperature() {
    return this._temp;
  }
  // setter
  set temperature(updatedTemp) {
    this._temp = updatedTemp;
  }
}
// Only change code above this line
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

// ES6 = Q20 Use a Class Syntax to Define a Constructor Function.
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// ES6 = Q19 - Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
  gear: 48,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// ES6 = Q18 - Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  // const createPerson =  (name, age, gender)
  return ({name, age, gender})
  // Only change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

// ES6 = Q17 - Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(result.failure);

// ES6 = Q16 - Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0; 
// Only change code above this line
console.log(stats);
console.log(half(stats));

//  ES6 = Q15 - Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line

  const [ , , ...arr] = list; // Change this line - Solution 1
  // const [a, b, ...arr] = list; // Change this line - Solution 2

  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr, source); // - Solution 1
console.log(arr); // - Solution 2
console.log(source); // - Solution 3

// ES6 = Q14 - Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b);

// ES6 Q13 - Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const {today: {low: lowToday, high: highToday }} = LOCAL_FORECAST;
console.log(LOCAL_FORECAST);
console.log(highToday, lowToday);
// Only change code above this line

// ES6 Q12 -  Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  // const highToday = HIGH_TEMPERATURES.today;
  // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  console.log(HIGH_TEMPERATURES);
// Only change code above this line


// ES6 Q11 -  Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { yesterday, today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES);


// ES6 Q10 -  Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// ES6 Q9 -  Use the Rest Parameter with Function Parameters
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

// ES6 Q8 - Use Arrow Functions to Write Concise Anonymous Functions
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


// ES6 Q7 - Mutate an Array Declared with const
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
 
// ES6 Q6 - Declare a Read-Only Variable with the const Keyword
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


// ES6 Q5 - Compare Scopes of the var and let Keywords.
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

// ES6 Q4 - Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
console.log(catTalk(data));
// ES6 Q2 - Use Recursion to Create a Range of Numbers
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

// ES6 Q1 - Use Recursion to Create a Countdown
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

// ES6 Q3 - Use Multiple Conditional (Ternary = ?) Operators
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