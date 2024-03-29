// ============================== INTERMEDIATE ALGORITHM SCRIPTING - PROJECTS ============================ //
// Intermediate Algorithm Scripting Projects = Project 1/5 -  Palindrome Cheaker
// Task: Return true if the given string is a palindrome. Otherwise, return false.

// Notes: A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
// Solution:
function palindrome(str) {
  const alphanumericOnly = str
    // 1) Lowercase the input
    .toLowerCase()
    // 2) Strip out non-alphanumeric characters
    .match(/[a-z0-9]/g); // <= RegEx

  // 3) return string === reversedString
  return alphanumericOnly.join('') ===
    alphanumericOnly.reverse().join('');
}



let result = palindrome("eye");
console.log(result)



// ============================== INTERMEDIATE ALGORITHM SCRIPTING - PROJECTS ============================ //
// Intermediate Algorithm Scripting Projects = Project 2/5 -  Roman Numeral Converter
// Task: Convert the given number into a roman numeral.
// All letters will be uppercase.
// Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Notes: All roman numerals answers should be provided in upper-case.
// The Roman Symbols
// Romans Numerals are based on the following symbols:
// M: 1000
// D: 500
// C: 100
// L: 50
// X: 10
// V: 5
// I: 1
// Basic Combinations
// 1: I
// 2: II
// 3: III
// 4: IV
// 5: V
// 6: VI
// 7: VII
// 8: VIII
// 9: IX
// 10: X
// 20: XX
// 30: XXX
// 40: XL
// 50: L
// 60: LX
// 70: LXX
// 80: LXXX
// 90: XC
// 100: C
// 200: CC
// 300: CCC
// 400: CD
// 500: D
// 600: DC
// 700: DCC
// 800: DCCC
// 900: CM
// 1000: M
// Solution:
function convertToRoman(num) {
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,

  };
  let accumulator = ''; // Eg: Empty Bucket

  for (const key in lookupTable) { // <= Accumulator - Loop through every key
    const numberValue = lookupTable[key]; // <= Get number value using this syntax

    while (numberValue <= num) {
      num -= numberValue; // <= Take from One
      accumulator += key; // <= Add to another
    }
  }

  return accumulator;
}

let result = convertToRoman(12);
console.log(result)
// Test Cases:
// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
// convertToRoman(16) should return the string XVI.
// convertToRoman(29) should return the string XXIX.
// convertToRoman(44) should return the string XLIV.
// convertToRoman(45) should return the string XLV.
// convertToRoman(68) should return the string LXVIII
// convertToRoman(83) should return the string LXXXIII
// convertToRoman(97) should return the string XCVII
// convertToRoman(99) should return the string XCIX
// convertToRoman(400) should return the string CD
// convertToRoman(500) should return the string D
// convertToRoman(501) should return the string DI
// convertToRoman(649) should return the string DCXLIX
// convertToRoman(798) should return the string DCCXCVIII
// convertToRoman(891) should return the string DCCCXCI
// convertToRoman(1000) should return the string M
// convertToRoman(1004) should return the string MIV
// convertToRoman(1006) should return the string MVI
// convertToRoman(1023) should return the string MXXIII
// convertToRoman(2014) should return the string MMXIV
// convertToRoman(3999) should return the string MMMCMXCIX



// ============================== INTERMEDIATE ALGORITHM SCRIPTING - PROJECTS ============================ //
// Intermediate Algorithm Scripting Projects = Project 3/5 -  Caesars Cipher
// Task: Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// Notes: One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// ROT13 replaces each letter by its partner 13 characters further along the alphabet.

// =============================================== ROT 13 CIPHER LOOKUP TABLE ========================================== //
// Input   = A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z
// Output  = N O P Q R S T U V W X Y Z A B C D E F G H I J K L M n o p q r s t u v w x y z a b c d e f g h i j k l m

// Solution:
const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function rot13(str) { // LBH QVQ VG!
  // Create the accumulator
  let accumulator = '';
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isALetter = alphabet.includes(char);
    // if the char is not letter, add to acc
    if (isALetter === false) {
      accumulator += char;
    } else {
      // else, rotate + or - 13, add to acc
      let charIndex =
        alphabet.findIndex((c) => c === char); // (c)  <= the comparison function

      accumulator += alphabet[charIndex + 13] ||
        alphabet[charIndex - 13];
    }

  }

  return accumulator;
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
// Test Cases:
// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// rot13("SERR YBIR?") should decode to the string FREE LOVE ?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.



// ============================== INTERMEDIATE ALGORITHM SCRIPTING - PROJECTS ============================ //
// Intermediate Algorithm Scripting Projects = Project 4/5 -  Telephone Number Validator
// Task: For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided above.
// The area code is required.If the country code is provided, you must confirm that the country code is 1.
// Return true if the string is a valid US phone number; otherwise return false.
// Return true if the passed string looks like a valid US phone number.
// NOTES: The user may fill out the form field any way they choose as long as it has the format of a valid US number.
// The following are examples of valid formats for US numbers(refer to the tests below for other variants):
// 555-555-5555
// (555) 555 - 5555(555) 555 - 5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// Solution: 1
function telephoneCheck(str) { // <= At least 5 times slower
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,
    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,
    // (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    //  5555555555
    /^\d{10}$/,
    // (555) 555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,
    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,
    // 1 (555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/
  ]
  // return regex.test(str);
  // return true;
  return validPatterns.some((pattern) => pattern.test(str));
}
// let result = telephoneCheck("555-555-5555");
// console.log(result);

// Solution: 2
// Long RegEx Version, but will run alot faster than the above.
function telephoneCheck(str) {
  const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/; // <= A load of conditionals inside of one statement Eg: ? means optional

  return regex.test(str);
  // return true;
}

let result = telephoneCheck("555-555-5555");
console.log(result);

// Solution: 3
function telephoneCheck(str) {
  const regex = /^\d{3}-\d{3}-\d{4}$/;

  return regex.test(str);
  // return true;
}

let result = telephoneCheck("555-555-5555");
console.log(result);



// Test Cases
// telephoneCheck("555-555-5555") should return a boolean.
// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false.
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("555)-555-5555") should return false.
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.
// telephoneCheck("55 55-55-555-5") should return false.



// ============================== INTERMEDIATE ALGORITHM SCRIPTING - PROJECTS ============================ //
// Intermediate Algorithm Scripting Projects = Project 5/5 -  Cash Register
// Task: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Notes: cid is a 2D array listing available currency.

// Solution: 1
function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  // console.log(change);
  let cidTotal = 0;
  for (let elem of cid) {
    // console.log(elem);
    cidTotal += elem[1] * 100
    // console.log(cidTotal);
  }
  if (change > cidTotal) {

    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  } else if (change === cidTotal) {
    return {
      status: 'CLOSED',
      change: cid
    }
  } else {
    let answer = []
    cid = cid.reverse()
    let moneyUnits = {
      'ONE_HUNDRES': 1000,
      'TWENTY': 2000,
      'TEN': 1000,
      'FIVE': 500,
      'ONE': 100,
      'QUARTER': 25,
      'DIME': 10,
      'NICKEL': 5,
      'PENNY': 1
    }
    for (let elem of cid) {
      let holder = [elem[0], 0]
      console.log(holder);
      elem[1] = elem[1] * 100
      while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
        change -= moneyUnits[elem[0]]
        elem[1] -= moneyUnits[elem[0]]
        holder[1] += moneyUnits[elem[0]] / 100
      }
      if (holder[1] > 0) {
        answer.push(holder)
        // console.log(holder);
      }
    }
    if (change > 0) {
      return {
        status: 'INSUFFICIENT_FUNDS',
        change: []
      }
    }
    return {
      status: "OPEN",
      change: answer
    }
  }
}
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));

// Test Cases:
// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]) should
// return an object.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]) should
// return {
//   status: "OPEN",
//   change: [
//     ["QUARTER", 0.5]
//   ]
// }.

// checkCashRegister(3.26, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]) should
// return {
//   status: "OPEN",
//   change: [
//     ["TWENTY", 60],
//     ["TEN", 20],
//     ["FIVE", 15],
//     ["ONE", 1],
//     ["QUARTER", 0.5],
//     ["DIME", 0.2],
//     ["PENNY", 0.04]
//   ]
// }.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]) should
// return {
//   status: "INSUFFICIENT_FUNDS",
//   change: []
// }.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]) should
// return {
//   status: "INSUFFICIENT_FUNDS",
//   change: []
// }.

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]) should
// return {
//   status: "CLOSED",
//   change: [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
//   ]
// }.


// ============================== INTERMEDIATE ALGORITHM SCRIPTING ============================ //
// Intermediate Algorithm Scripting = Q21/21 - Map the Debris
// TASK: Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// NOTES:
// Need to find the formula for orbital periods, make sure the output is in seconds
// Most probably will get a decimal, we need to round up to the next whole number
// Will have to utilize Math object, as they have built in properties which would be useful Math.round() to round
// Need to figure out how to calculate
// Remove avgAlt and add in orbitalPeriod
// From a lot of searching, the proper formula is T = 2*pi*sqrt(r^3/GM); r = earthRadius+avgAlt
// Can use `Math.PI` and also `Math.sqrt()`
// Can map through `arr`, calculating the formula, deleting `avgAlt` then adding the new key-value pair
// Make sure to return arr! 

// Solution: 1

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map(obj => {
    let oP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    delete obj.avgAlt;
    obj.orbitalPeriod = oP;
  })
  return arr;
}

console.log(orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}]));

// Test Cases
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].



// Intermediate Algorithm Scripting = Q20/21 - Make a Person
// TASK: Fill in the object constructor with the following methods below:

// NOTES:
// We have to complete this object constructor.They have defined what methods they want.
// We can start by listing them out within the object constructor Our input, 'firstAndLast' is a string of a first and last name
// We can split(' ') the names into their own variables getFirst / Last / Full will just return the variables
// When it comes to the set methods, they take in an input of a string
// We can set those inputs to our current variables and return them
// Solution: 1

var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly

  let [firstName, lastName] = firstAndLast.split(' ');

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function (first) {
    firstName = first;
    return firstName;
  };

  this.setLastName = function (last) {
    lastName = last;
    return lastName;
  };

  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    return `${firstName} ${lastName}`;
  };
};

var bob = new Person('Bob Ross');
let result = bob.getFullName();
console.log(result);

// TESTS
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").



// Intermediate Algorithm Scripting = Q19/21 - Arguments Optional
// TASK:

// NOTES:
// Confusing problem.We are given at least one input, number or string We have to return a number or undefined
// We can turn arguments object into an array.Looking at the tests, it will always be 1 - 2 args
// We want to sum if all are arguments are numbers
// If there is a string or non number, we want to return undefined
// We can make a function to check if the type is a number otherwise we will return undefined 
// We can use a few if/else ifs
// We can first check if there are two arguments, and both numbers, can add them and return that value
// If there is just one argument and its not a number, we will return undefined
// If there is not a second argument, we will return a function (like the instructions), passing in a newArg.
// We will check if that is a number.if so, add it to arg 1
// Solution: 1

function addTogether() {
  let [arg1, arg2] = arguments;

  function isNum(num) {
    return Number.isInteger(num);
  }

  if (!isNum(arg1)) {
    return undefined;
  } else if (isNum(arg1) && isNum(arg2)) {
    return arg1 + arg2;
  } else if (!arg2) {
    return function (newArg) {
      if (isNum(newArg)) {
        return arg1 + newArg;
      }
    }
  }

}

let result = addTogether(2, 3);
console.log(result);

// TESTS
// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.



// Intermediate Algorithm Scripting = Q18/21 - Everything Be True
// TASK: 

// NOTES: We have two arguments as input.An array of objects, and a string.
// The string is a key within the objects.We need to output a boolean value, true or false.
// We need to check every object 's properties, if they have `pre` and then if the value is truthy So
// if the value is not an empty string, 0, undefined, NaN, null
// Luckily JS comes with a built in object, `Boolean` We can map through the array, checking if the object property exists and
// if its truthy or not Since we are mapping, we 'll return an array of T and F We can just check with `includes()`
// if there is a false value, then we will return false.

// Solution: 1
function truthCheck(collection, pre) {
  let checkedArr = collection.map(obj => {
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  })

  return checkedArr.includes(false) ? false : true;
}

let result = truthCheck([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy",
  "sex": "male"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "sex");
console.log(result);

// TESTS
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true
// truthCheck([{"single": "yes"}], "single") should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false



// Intermediate Algorithm Scripting = Q17/21 - Binary Agents
// TASK: Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
// NOTES: Our input is a string (sentence) of binary items
// We need to output a string, converting the binary to alphabets
// Like other problems, we can `split(' ')` the `str` into an array
// There is a string method, `fromCharCode()` we will use
// fromCharCode() will convert the digits to letters
// We will also use parseInt() on each item in the array, converting from radix 2
// `parseInt(binaryItem, 2)`
// All of this can be chained together
// Then join() back into a string, we have an sentence in English

// Solution: 1
function binaryAgent(str) {
  return str.split(' ')
    .map(b => String.fromCharCode(parseInt(b, 2)))
    .join('');
}

let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(result);

// TESTS
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"



// Intermediate Algorithm Scripting = Q16/21 - Steamroller
// TASK: Flatten a nested array. You must account for varying levels of nesting.
// NOTES: Read carefully. We are given an array of some subarrays
// We must return a flat array (an array without an subarrays)
// We cannot use the more modern methods of `.flat()` and `.flatMap()`
// Tried some methods like join() to conver to strings but wasn't the way to go
// There is an Array method to check if its an array, `Array.isArray()`
// We can create an empty array
// We will map through `arr`, pushing non arrays into the new empty array
// If it is an array, we can use the ... operator to deconstruct the array
// A recursive method
// Return the new flat array

// Solution: 1
function steamrollArray(arr) {
  let flattened = [];

  arr.map((val) => {
    if (!Array.isArray(val)) {
      flattened.push(val);
    } else {
      flattened.push(...steamrollArray(val));
    }
  });

  return flattened;
}

let result = steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);
console.log(result);

// TESTS
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.



// Intermediate Algorithm Scripting = Q15/21 - Drop It
// TASK: Given the array arr, iterate through and remove each element starting from the first element(the 0 index) until the
// function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// NOTES:
// Two arguments, an array and a function
// We have to return an array
// This is a bit tough, had to re - read directions multiple times.
// We do not want to create a new array, work with and
// return the original
// We can 't just loop through and push into a new array
// We want to remove elements until we hit the first true value
// We always want to begin with the first element, so `shift()`
// will be of use
// If we are altering `arr`, we want to save the original lenght in a variable
// So we know how many times to loop
// We check the first arr[0],
// if its false then we shift() and remove that
// This repeats until we hit a true value

// Solution: 1
function dropElements(arr, func) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (!func(arr[0])) {
      arr.shift();
    } else {
      return arr;
    }
  }
  return arr;
}

let result = dropElements([1, 2, 3], function (n) {
  return n < 3;
});
console.log(result);

// Solution: 2



// TESTS
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]. // 



// Intermediate Algorithm Scripting = Q14/21 - Smallest Common Multiple
// TASK: 
// NOTES: 6*1 = 0 with no remainder so it is evenly divisible.
// Solution: 1
function smallestCommons(arr) {
  arr = arr.sort((a, b) => b - a);
  let [high, low] = arr;
  let multiple = high;

  for (let i = low; i < high; i += 1) {
    if (multiple % i !== 0) {
      multiple += high;
      i = low - 1;
    } else if (i == high) {
      return multiple;
    }
  }
  return multiple;
}

let result = smallestCommons([1, 5]);
console.log(result);

// Solution: 2
function smallestCommons(arr) {
  let lowerNum, higherNum;
  if (arr[0] > arr[1]) {
    lowerNum = arr[1];
    higherNum = arr[0];
  } else {
    lowerNum = arr[0];
    higherNum = arr[1];
  }
  let range = getRange(lowerNum, higherNum);
  // console.log(range);

  let multiple = 1;
  while (multiple < 100000) {
    let higherComMult = (lowerNum * multiple) * higherNum;


    let trueCount = 0;
    for (let i = 0; i < range.length; i += 1) {
      // console.log(higherComMult, range);

      if (higherComMult % range[i] === 0) {
        trueCount += 1;

        // console.log('true count = ', trueCount, 'Range length = ', range.length);
        if (trueCount === range.length) {
          return higherComMult;
        }
      }
    }

    multiple += 1;
  }

  return arr;
}

function getRange(lowN, highN) {
  let resultRange = [];
  for (let i = lowN; i <= highN; i += 1) {
    resultRange.push(i);
  }
  return resultRange;
}
let result = smallestCommons([1, 3]);
console.log(result);
// TESTS
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.



// Intermediate Algorithm Scripting = Q13/21 - Sum All Primes
// TASK: Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num
// NOTES: A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Solution: 1
function sumPrimes(num) {
  if (num <= 1) {
    return 'Numbers lower than 0 not welcome'
  }

  let counter = 2;
  let sum = 0;

  while (counter <= num) {
    if (isPrime(counter)) {
      sum += counter;
    }
    counter += 1;
  }
  return sum;
}

function isPrime(singleNum) {
  let counter = 2;
  while (counter < singleNum) {
    if (singleNum % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
}

let result = sumPrimes(977);
console.log(result);
console.log(isPrime(977));

// Solution: 2
function sumPrimes(num) {
  let sum = 0;
  for (let j = 1; j <= num; j += 1) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= (n / 2); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);



// Intermediate Algorithm Scripting = Q12/21 - Sum All Odd Fibonacci Numbers
// TASK: 
// Given a positive integer num,
// return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should
// return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
// NOTES: 
// TEST CASES:
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
// Solution: 1
function sumFibs(num) {
  let fibSeq = [0, 1];
  let counter = fibSeq[fibSeq.length - 2] +
    fibSeq[fibSeq.length - 1]
  while (counter <= num) {
    fibSeq.push(counter);
    counter = fibSeq[fibSeq.length - 2] +
      fibSeq[fibSeq.length - 1]

  }
  let sumOfFibNum = 0;
  fibSeq.forEach(num => {
    if (num % 2 != 0) {
      sumOfFibNum += num;
    }
  });
  return sumOfFibNum;
}

let result = sumFibs(75024);
console.log(result);

// Solution: 2 - Refactored
function sumFibs(num) {
  let fibSeq = [0, 1];
  let sumOfFibNum = 1;
  let counter = iterateUpFibSeq(counter)

  function iterateUpFibSeq(counter) {
    return fibSeq[fibSeq.length - 2] +
      fibSeq[fibSeq.length - 1]
  }

  function isOdd(counter) {
    return counter % 2 != 0
  }

  while (counter <= num) {
    fibSeq.push(counter);
    if (isOdd(counter)) {
      sumOfFibNum += counter;
    }
    counter = iterateUpFibSeq(counter)
  }
  return sumOfFibNum;
}

let result = sumFibs(75025);
console.log(result);



// Intermediate Algorithm Scripting = Q11/21 - Convert HTML Entities
// TASK: Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// NOTES: 
// Solution: 
function convertChar(letter) {
  if (letter === "&") {
    return "&amp;";
  } else if (letter === "<") {
    return "&lt;";
  } else if (letter === ">") {
    return "&gt;";
  } else if (letter === '"') {
    return "&quot;";
  } else if (letter === "'") {
    return "&apos;";
  }
}

function convertHTML(str) {
  let charactersToCheckFor = ['&', '<', '>', '"', "'"];
  for (let i = 0; i < str.length; i += 1) {
    if (charactersToCheckFor.indexOf(str[i]) != -1) {
      str = str.slice(0, i) + convertChar(str[i]) + str.slice(i + 1);
    };
  }
  return str;

}
let result = convertHTML("Dolce & Gabbana");
console.log(result);



// Intermediate Algorithm Scripting = Q10/21 - Sorted Union
// TASK: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// TEST CASES:
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// NOTES: Check the assertion tests for examples.
// Solution: 1
function uniteUnique(arr) {
  let finalCollection = [];
  let values = Object.values(arguments);
  for (let i = 0; i < values.length; i += 1) {
    for (let j = 0; j < values[i].length; j += 1) {
      if (finalCollection.indexOf(values[i][j]) === -1) {
        finalCollection.push(values[i][j]);
      }
    }
  }

  return finalCollection;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result)

// Solution: 2 - Refactored
function uniteUnique(arr) {
  let finalCollection = [];
  let values = Object.values(arguments);

  values.forEach(groupOfGroups => {
    groupOfGroups.forEach(individualValues => {
      if (finalCollection.indexOf(individualValues) === -1) {
        finalCollection.push(individualValues);
      }
    });
  });

  return finalCollection;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result)



// Intermediate Algorithm Scripting = Q9/21 - Missing Letters
// TASK: Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// TEST CASES:
// fearNotLetter("abce") should return the string d.
// fearNotLetter("abcdefghjklmno") should return the string i.
// fearNotLetter("stvwx") should return the string u.
// fearNotLetter("bcdf") should return string e.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return string undefined.
// NOTES:
// Solution:
function fearNotLetter(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let startPos = alpha.indexOf(str[0]);

  for (let i = startPos; i < startPos + str.length; i += 1) {
    if (alpha[i] != str[i - startPos]) {
      return alpha[i];
    };
  }
}
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// A more Simpler and refined Solution:
function fearNotLetter(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let startPos = alpha.indexOf(str[0]);
  let accurateAlpha = alpha.slice(startPos);

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] != accurateAlpha[i]) {
      return accurateAlpha[i];
    }
  }
}

console.log(fearNotLetter("abce"));



// Intermediate Algorithm Scripting = Q8/21 - DNA Pairing
// TASK: // The DNA strand is missing the pairing element.
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. 
// NOTES: 
function pairElement(str) {

  function calculatePair(initial) {
    if (initial === 'A') {
      return 'T';
    } else if (initial === 'T') {
      return 'A';
    } else if (initial === 'G') {
      return 'C';
    } else if (initial === 'C') {
      return 'G';
    }
  }

  return str.split('').map(initialPair => {
    let pair = [initialPair, calculatePair(initialPair)];
    return pair;
  });

}
// Test here
console.log(pairElement("GCG"));



// Intermediate Algorithm Scripting = Q7/21 - Search and Replace
// TASK: Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

// NOTES: Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
// Solution
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplacemyReplace("I think we should look up there", "up", "Down");



// Intermediate Algorithm Scripting = Q6/21 - Pig Latin
// TASK: Translate the provided string to Pig Latin.
// Input strings are guaranteed to be English words in all lowercase.
// NOTES:
// Solution 1 
function translatePigLatin(str) {
  let regex = /[bcdfghjklmnpqrstvwxyz]{1,}/;
  let vowelRegex = /[aeiou]{1,}/;
  let found = str.match(regex);
  if (str.search(vowelRegex) == 0) {
    return str += 'way';
  } else if (str.search(regex) == 0) {
    let newStr = str.replace(regex, '');
    return newStr + found + 'ay';
  }
}

translatePigLatin('consonant'); // 'onsonantcay'

// Solution 2
function translatePigLatin(str) {
  let pigs = 'aeiou'.split('');

  for (let i = 0; i < str.length; i += 1) {
    let individualLetter = str[i];
    if (pigs.indexOf(individualLetter) != -1 && i === 0) {
      return str + 'way';
    }
    if (pigs.indexOf(individualLetter) != -1 && i === 0) {
      return str.slice(i) + str.slice(0, i) + 'ay';
    }
  }
  return str + 'ay';
}
let result = translatePigLatin(consonant);
console.log(result);

// Solution 3 <= Refactored
function translatePigLatin(str) {
  let pigs = 'aeiou'.split('');

  function isPigs(letter) {
    return pigs.indexOf(letter);
  }

  for (let i = 0; i < str.length; i += 1) {
    let individualLetter = str[i];
    if (isPigs(individualLetter) != -1 && i === 0) {
      return str + 'way';
    }
    if (isPigs(individualLetter) != -1) {
      return str.slice(i) + str.slice(0, i) + 'ay';
    }
  }
  return str + 'ay';
}
let result = translatePigLatin(california);
console.log(result);



// Intermediate Algorithm Scripting = Q5/21 - Spinal Tap Case
// TASK: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// NOTES: A regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
// Solution 1 
function spinalCase(str) {
  return str.replace(/(?!^)([A-Z])/g, ' $1')
    .replace(/[_\s]+(?=[a-zA-Z])/g, '-')
    .toLowerCase();
}

console.log(spinalCase('ThisIsSpinalTap'));

// Solution 2
function spinalCase(str) {
  let camelCaseHandled = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  let spacesAndDashedHandled = camelCaseHandled.replace(/\s|_/g, '-')
  return spacesAndDashedHandled.toLowerCase();
}
let result = spinalCase('thisIsSpinalTap');
console.log(result);



// Intermediate Algorithm Scripting = Q4/21 - Wherefore art thou
// TASK: Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// NOTES:
// Solution 1:
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  arr = collection.filter(function (obj) {
    return sourceKeys.every(function (sourceKeys) {
      return obj.hasOwnProperty(sourceKeys) && obj[sourceKeys] === source[sourceKeys];
    });
  });

  // Only change code above this line
  return arr;
}


// Solution 2: 
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  // function below converts an object sent into an array of stringified concatenated key-value pairs
  function convertObj(object) {
    let arrOfKeyValuePairs = [];
    for (const [key, value] of Object.entries(object)) {
      arrOfKeyValuePairs.push(`${key}${value}`);
    }
    return arrOfKeyValuePairs;
  }

  // check whether an array within the collection array contains all elements of the source array
  function checkIfIncludesEvery(collectionArray, sourceArray) {
    return sourceArray.every(element => collectionArray.includes(element));
  }

  // convert the source object into an array of stringified concatenated key-value pairs
  let sourceObjArray = convertObj(source);

  // for each array within the collection array check whether it contains all elements of the source array and if so, then push the corresponding object to the final return arr
  for (let j = 0; j < collection.length; j++) {
    if (checkIfIncludesEvery(convertObj(collection[j]), sourceObjArray)) {
      arr.push(collection[j]);
    }
  }

  return arr;
}

console.log(whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
}));

// Solution 3:
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  var n = 0;

  var l = Object.keys(source);
  var nb = l.length;
  for (var j in collection) {
    var res = 0;
    for (var i in source) {
      if (source.hasOwnProperty(i)) {
        var valeur = source[i];
        var s = new Object();
        var d = collection[j].hasOwnProperty(i);

        for (var k in collection[j]) {
          if (k === i) {
            if (collection[j][k] === valeur) {
              res++;
              if (res === nb) {
                s = collection[j];
                arr[n] = s;
                n++;
              }
            }
          }
        }
      }
    }
  }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
}));


// Intermediate Algorithm Scripting = Q3/21 - Seek and Destroy
// TASK: Remove all elements from the initial array that are of the same value as these arguments.
// NOTES: 
function destroyer(arr) {
  const result = Array.prototype.slice.call(arguments);
  const [first, ...rest] = result;

  const fileList = first.filter(function (event) {
    // const fileList = first.filter(event => { // Refactored to ES6 arrow function
    return rest.indexOf(event) === -1;
  })

  return fileList;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
  "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));


// Intermediate Algorithm Scripting = Q2/21 - Diff Two Arrays
// TASK: 
// NOTES: Using two for loops and two if statements to find the diff in two arrays
// Solution 1
function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i += 1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }

  }
  for (var x = 0; x < arr2.length; x += 1) {
    if (arr1.indexOf(arr2[x]) === -1) {
      newArr.push(arr2[x]);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Solution 2 <= Refactored - Reusable function
function diffArray(arr1, arr2) {
  var newArr = [];

  function comparisonAgainst(first, second) {
    for (var i = 0; i < first.length; i += -1) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  comparisonAgainst(arr1, arr2);
  comparisonAgainst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Solution 3 <= Refactored with a forEach method
function diffArray(arr1, arr2) {
  var newArr = [];

  function comparisonAgainst(first, second) {
    first.forEach(number => {
      if (second.indexOf(number) === -1) {
        newArr.push(number)
      }
    });
  }

  comparisonAgainst(arr1, arr2);
  comparisonAgainst(arr2, arr1);

  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// Intermediate Algorithm Scripting = Q1/21 - Sum All Numbers in a Range
// TASK: We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// NOTES: For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
  let minNum = Math.min(arr[0], arr[1]);
  let maxNum = Math.max(arr[0], arr[1]);
  var result = 0;

  for (var i = minNum; i <= maxNum; i += 1) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 15]));


// ============================== FUNCTIONAL PROGRAMMING IN JAVASCRIPT - HIGHER ORDER FUNCTIONS ============================ //
// Functional Programming = Q24/26 - Introduction to Currying and Partial Application
// TASK: Fill in the body of the add function so it uses currying to add parameters x, y, and z.
// NOTES:
// Solution 1
function add(x) {
  // Only change code below this line

  return function (y) {
    return function (z) {
      return x + y + z;

    }
  }

  // Only change code above this line
}
console.log(add(10)(20)(30)); // <= Output will be 60

// Solution 2
function add(x) {
  // Only change code below this line

  return y => z => y + x + z; // Curried ES6 using arrow functions

  // Only change code above this line
}
console.log(add(10)(20)(30)); // <= Output will be 60



// Functional Programming = Q23/26 - Use the some Method to Check that Any Elements in an Array Meet a Criteria
// TASK: 
// NOTES:
// Solution 1
function checkPositive(arr) {
  // Only change code below this line

  let result = arr.some(function (value) {
    console.log(value);
    return value > 0;
  });
  return result;

  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// Solution 2 - Refactored ES6
function checkPositive(arr) {
  // Only change code below this line

  return arr.some(v => {
    return v > 0;
  });

  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));


// Functional Programming = Q22/26 - Use the every Method to Check that Every Element in an Array Meets a Criteria
// TASK: Use the every method inside the checkPositive function to check if every element in arr is positive.
// The function should return a Boolean value.
// NOTES:
// Solution 1. Refactored Solution
function checkPositive(arr) {
  // Only change code below this line

  return arr.every(v => {
    return v > 0;
  });

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// Solution 2. Long way.
function checkPositive(arr) {
  // Only change code below this line

  let result = arr.every(function (value) {
    return value > 0;
  });
  return result;

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);


// Functional Programming = Q21/26 - Apply Functional Programming to Convert Strings to URL Slugs
// TASK: Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
// You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
// 1. The input is a string with spaces and title-cased words
// 2. The output is a string with the spaces between words replaced by a hyphen(-)
// 3. The ouput should be all lower-cased letters
// 4. The output should not have any spaces
// NOTES:
// Only change code below this line
var globalTitle = 'Winter is Coming';

function urlSlug(title) {
  let slug = title.slice();
  return slug.toLowerCase().split(/\W+/).filter((item) => item.length > 0).join("-");

}
console.log(globalTitle);
// Only change code above this line


// Functional Programming = Q20/26 - Combine an Array into a String Using the join Method
// TASK: Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
// The function should return a string.For example, I - like - Star - Wars would be converted to I like Star Wars.
// For this challenge, do not use the replace method.
// NOTES:
function sentensify(str) {
  // Only change code below this line

  let newResult = str.split(/\W/); // <= /\W/ = NON Alpha Numeric characters
  let joinedResult = newResult.join(' ');
  return joinedResult;

  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you")); // <= Output: May the force be with you

// Another Solution to the above challenge.
function sentensify(str) {
  return str.split(/\W/).join('');
}
let globalString = 'The.force.is.strong.with.this.one';
console.log(sentensify(globalString));
console.log(globalString);


// Functional Programming = Q19/26 - Split a String into an Array Using the split Method
// TASK: Use the split method inside the splitify function to split str into an array of words.
// The function should return the array.
// Note that the words are not always separated by spaces, and the array should not contain punctuation.
// NOTES:
function splitify(str) {
  // Only change code below this line

  return str.split(/\W/); // <= Solution 1

  //  let newArray = str.split(/\W/); // <= Solution 2
  //  return newArray;

  // Only change code above this line 
}
console.log(splitify('Hello World,I-am code'));


// Functional Programming = Q18/26 - Return a Sorted Array Without Changing the Original Array
// TASK: Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
// The function should return a new array, and not mutate the globalArray variable.
// NOTES:
var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function (a, b) {
    // return [].concat(arr).sort((a, b) => { // ES6
    return a - b;
  });
  // Add your code above this line
}
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));


// Functional Programming = Q17/26 - Sort an Array Alphabetically using the sort Method
// TASK: 
// NOTES: The sort method sorts the elements of an array according to the callback function.
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function (a, b) {
    // return arr.sort((a, b) => { // ES6
    return a === b ? 0 : a > b ? 1 : -1;
  });
  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


// Functional Programming = Q16/26 - Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// TASK: Complete the code for the squareList function using any combination of map(), filter(), and reduce().
// The function should return a new array containing the squares of only positive integers(decumal numbers are not integers) when an array of real numbers is passed to it.
// NOTES: An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2]. 
// Your function should not use any kind of for or while loops or the forEach() function.
const squareList = arr => {
  // Only change code below this line
  // let result = []; ES6 Refactored
  // let positiveIntegersSquared = arr.filter(function (num) {
  let positiveIntegersSquared = arr.filter(num => { // ES6
    if (Number.isInteger(num) && num > 0) return num;
    // }).map(function (num) {
  }).map(num => {
    return num * num;
  }); // ES6 


  return positiveIntegersSquared;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);


// Functional Programming = Q15/26 - Use the reduce Method to Analyze Data
// TASK: 
// NOTES: A variable watchlist that holds an array of 5 objects with info on 5 movies.
// The global variable
// The global variable
var watchList = [{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  // Solution:

  // let cnolanMovies = watchList.filter(function (movie) {
  let cnolanMovies = watchList.filter(movie => { // ES6 
    if (movie.Director === 'Christopher Nolan') return movie;
  });

  let cnolanMovieRatingSum = cnolanMovies.reduce((total, movie) => { // ES6
    // let cnolanMovieRatingSum = cnolanMovies.reduce(function (total, movie, currentIndex, arr) {
    total += parseFloat(movie.imdbRating);
    return total;

  }, 0);

  // let cnolanMovieCount = cnolanMovies.length;

  let averageRating = cnolanMovieRatingSum / cnolanMovies.length;

  // Only change code above this line

  return averageRating;

}
console.log(getRating(watchList));


// Functional Programming = Q14/26 - Add Elements to the End of an Array Using concat Instead of push
// TASK: Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push.
// The function should return an array.
// NOTES: Functional programming is all about creating and using non-mutating functions.
function nonMutatingPush(original, newItem) {
  // Only change code below this line

  return original.push(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
// A deeper explanantion of the non-muting function's purpose
var first = [1, 2, 3];
var second = [4, 5];
var result = nonMutatingPush(first, second);
console.log(result);
console.log(first);
console.log(second);


// Functional Programming = Q13/26 - Combine Two Arrays Using the concat Method
// TASK: Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
// The function should return the concatenated array.
// NOTES:
function nonMutatingConcat(original, attach) {

  // Only change code below this line
  // Solution 1
  // let newArray = [1, 2, 3].concat([4, 5]);
  // return newArray;

  // Solution 2
  return original.concat(attach);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);


// Functional Programming = Q12/26 - Remove Elements from an Array Using slice Instead of splice
// TASK: Rewrite the function nonMutatingSplice by using slice instead of splice.
// It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
// NOTES:
function nonMutatingSplice(cities) {
  // Only change code below this line

  return cities.slice(0, 3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
console.log(inputCities, '<= should not change');


// Functional Programming = Q11/26 - Return Part of an Array Using the slice Method
// TASK: Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices.
// The function should return an array.
// NOTES:
functionsliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  // let slicedResult = anim.slice(beginSlice, endSlice);
  return anim.slice(beginSlice, endSlice); // A more concise solution

  // return slicedResult;
  // Only change code above this line
};
var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);
console.log(inputAnim);


// Functional Programming = Q10/26 - Implement the filter Method on a Prototype
// TASK: Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
// You should not use the built -in filter method.
// The Array instance can be accessed in the myFilter method using this.
// NOTES: 
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  // Only change code below this line
  this.forEach(individualElement => { // ES6 Refactored
    // this.forEach(function (individualElement) {
    if (callback(individualElement))
      newArray.push(individualElement);
  });
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
console.log(new_s);
// console.log(newArray);


// Functional Programming = Q9/26 - Use the filter Method to Extract Data from an Array
// TASK: Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys.
// The new array should only include objects where imdbRating is greater than or equal to 8.0.
// NOTES: The rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.
// The global variable
var watchList = [{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

var filteredList = watchList.map(individualMovie => {
  let refinedFilmData = {};

  refinedFilmData.title = individualMovie.Title;
  refinedFilmData.rating = individualMovie.imdbRating;

  return refinedFilmData;

}).filter(individualMovie => {
  if (parseFloat(individualMovie.rating) > 8.0)

    return individualMovie;
});

// Only change code above this line

console.log(filteredList);


// Functional Programming = Q8/26 - Implement map on a Prototype
// TASK: Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// You should not use the built -in map method.
// The Array instance can be accessed in the myMap method using this.
// 1. new_s should equal [46, 130, 196, 10].
// 2. Your code should not use the map method.

// The global variable
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line

  // Solution 1.
  // for ( let i = 0; i < this.length; i += 1) {
  //   newArray.push(callback(this[i]));
  // }

  // Solution 2 (using a forEach loop)
  // this.forEach(function (individualElement) { // Original function Implementation
  this.forEach(individualElement => { // ES6 Implementation
    newArray.push(callback(individualElement));
  });

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
console.log(new_s);


// Functional Programming = Q7/26 - Use the map Method to Extract Data from an Array
// TASK: Use map on watchList to assign a new array of objects to the ratings variable.
// Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating.
// 1. The watchList variable should not change.
// 2. Your code should not use a for loop.
// 3. Your code should use the map method.
// 4. ratings should equal 
// [
// {"title":"Inception","rating":"8.8"},
// {"title":"Interstellar","rating":"8.6"},
// {"title":"The Dark Knight","rating":"9.0"},
// {"title":"Batman Begins","rating":"8.3"},
// {"title":"Avatar","rating":"7.9"}
// ]. 
// NOTES: The code currently uses a for loop to do this, so you should replace the for loop functionality with your map expression.
// The global variable
var watchList = [{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
// for(var i=0; i < watchList.length; i++){
//   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// }
// NOTES: Commented out the for loop and replaced the for loop functionality with a map expression.

// A REFACTORED SOLUTION

// Only change code below this line
let ratings = watchList.map(function movie(movie) {
  let refinedMovieData = {};

  refinedMovieData.title = movie.Title;
  refinedMovieData.rating = movie.imdbRating;

  return refinedMovieData;
});



// Only change code above this line

console.log(JSON.stringify(ratings));



// Functional Programming = Q6/26 - Refactor Global Variables Out of Functions
// TASK: Rewrite the code so the global array bookList is not changed inside either function.
// The add function should add the given bookName to the end of the array passed to it and return a new array (list).
// The remove function should remove the given bookName from the array passed to it.
// NOTES: Both functions should return an array, and any new parameters should be added before the bookName parameter.
// The global variable
var bookList = ["The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

// Change code below this line
function add(myBooklist, bookName) {

  let newBookList = [...myBooklist]; //Create's a new variable which is a clone of the original booklist var

  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(myBooklist, bookName) {
  var book_index = myBooklist.indexOf(bookName);
  if (book_index >= 0) {

    let newBookList = [...myBooklist];
    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList);

// Functional Programming = Q5/26 - Pass Arguments to Avoid External Dependence in a Function
// TASK: Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.
// 1. Your function incrementer should not change the value of fixedValue (which is 4).
// 2. Your incrementer function should take an argument.
// 3. Your incrementer function should return a value that is one larger than the fixedValue value.
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(numToIncrement) {

  return numToIncrement + 1;

  // Only change code above this line
}
console.log(fixedValue);


// Functional Programming = Q4/26 - Avoid Mutations and Side Effects Using Functional Programming
// TASK: Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
// 1. Your function incrementer should not change the value of fixedValue (which is 4).
// 2. Your incrementer function should return a value that is one larger than the fixedValue value.
// 3. Your incrementer function should return a value based on the global fixedValue variable value.
// The global variable
var fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1;

  // Only change code above this line
}
var newValue = incrementer();
console.log(fixedValue);


// Functional Programming = Q3/26 - Understand the Hazards of Using Imperative Code
// TASK: Change Window.prototype.tabClose so that it removes the correct tab.
// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (_tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line
  // Solution 1.
  // var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  // var tabsAfterIndex = this.tabs.splice(index = 1); // Get the tabs after the tab
  // Solution 2
  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsAfterIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


// Functional Programming = Q2/26 - Understanding Functional Programming Terminology
// TASK: Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
// Note We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares.
// This makes getTea more flexible, and gives the programmer more control when client requests change.
// Note: The data (the number of cups of tea) is supplied as the last argument.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// MY MODIFIED SOLUTION:
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

// Function that returns a string representing a cup of hibiscus tea
const prepareHibiscusTea = () => 'hibiscusTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
// // The Modified getTea function to accept a function as a parameter to be able to change the type of tea it prepares.

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4HibiscusTeamFCC = getTea(prepareHibiscusTea, 33);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC,
  tea4HibiscusTeamFCC
);


// Functional Programming = Q1/26 - Learn About Functional Programming
// TASK: In the code editor, the prepareTea and getTea functions are already defined for you. 
// Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.
// Function that returns a string representing a cup of green tea
// NOTES: Types of Functions
// There are four main types of functions.

// 1. First Class Functions
// In JavaScript all functions are first class functions.
// That means they can be treated like any other variable.
// First class functions are functions that can be assigned as values to variables, returned from other functions, and passed as arguments to other functions.

// 2. Callback Functions
// Callback functions are functions that are passed into other functions as arguments and are called by the function in which they are passed.
// Simply, callback functions are functions that we write as arguments in other functions.
// We can't invoke callback functions. They are invoked when the main function in which they were passed as arguments is called.

// 3. Higher Order functions
// Higher order functions are functions that receive other functions as arguments or return a function.
// These types of functions receive other functions as arguments or return functions.

// 4. Asynchronous Functions
// Asynchronous functions are functions that don't have a name and cannot be reused.
// These functions are normally written when we need to carry out something once and in only one place.
// 
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
  a specific type of tea).
  */
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// SOLUTION BELOW: 
// Only change code below this line
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
// Only change code above this line


// ============================== OBJECT ORIENTATED PROGRAMMING ============================ //
// Object Orientated Programming = Q26/26 - Use an IIFE to Create a Module
// TASK: Create a module named funModule to wrap the two mixins isCuteMixin and singMixin.
// funModule should return an object.
// 1. funModule should be defined and return an object.
// 2. funModule.isCuteMixin should access a function.
// 3. funModule.singMixin should access a function.
// NOTES: Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule.
// This returned object contains all of the mixin behaviors as properties of the object.
// The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.
let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true;
  };
};
let singMixin = function (obj) {
    obj.sing = function () {
      console.log("Singing to an awesome tune");
    };

    // SOLUTION BELOW:
    let funModule = (function () {
      return {
        isCuteMixin: function (obj) {
          obj.isCute = function () {
            console.log('I am really cute');
            return true;
          };
        },

        singMixin: function (obj) {
          obj.sing = function () {
            console.log("Singing to an awesome tune");
          };
        }
      }
    })();
    // DEMO
    function Bird(name) {
      this.name = name;
    }

    let bigBird = new Bird('Big Bird');

    // bigBird.sing();

    funModule.singMixin(bigBird);

    bigBird.sing();
    // console.log(isCuteMixin);
    // console.log(singMixin);


    // Object Orientated Programming = Q25/26 - Understand the Immediately Invoked Function Expression (IIFE)
    // TASK: Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
    // 1. The function should be anonymous.
    // 2. Your function should have parentheses at the end of the expression to call it immediately.
    // NOTES: Anonymous Function
    function makeNest() {
      console.log('A cozy nest is ready');
    }

    makeNest();

    // Solution Below = Function Called Immediately
    (function () {
      console.log("A cozy nest is ready");
    })();


    // Object Orientated Programming = Q24/26 - Use Closure to Protect Properties Within an Object from Being Modified Externally
    // TASK: Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
    // 1. The weight property should be a private variable and should be assigned the value of 15.
    // 2. Your code should create a method in Bird called getWeight that returns the value of the private variable weight.
    // 3. Your getWeight function should return the private variable weight.
    // NOTES: In JavaScript, a function always has access to the context in which it was created. This is called closure.
    // Solution 1
    function Bird() {
      let.weight = 15; // Private Variable adds closure.!
      this.getWeightCount = function () { // Method
        return weight;
      }
    }


    // Solution 2
    function Bird(name) {
      let weight = 15;
      this.name = name;

      this.getWeight = function () {
        return weight;
      };

    }

    let newWeight = new Bird('New Weight');

    console.log(newWeight.getWeight());
    console.log(newWeight.name);

    newWeight.weight += 1;
    newWeight.name += '!';

    console.log(newWeight.getWeight());
    console.log(newWeight.name);

    // Object Orientated Programming = Q23/26 - Use a Mixin to Add Common Behavior Between Unrelated Objects
    // TASK: Create a mixin named glideMixin that defines a method named glide.
    // Then use the glideMixin to give both bird and boat the ability to glide.
    // 1. Your code should declare a glideMixin variable that is a function.
    // 2. Your code should use the glideMixin on the bird object to give it the glide method.
    // 3. Your code should use the glideMixin on the boat object to give it the glide method.
    // NOTES:
    let bird = {
      name: "Donald",
      numLegs: 2
    };

    let boat = {
      name: "Warrior",
      type: "race-boat"
    };

    // Only change code below this line
    // function glideMixin(obj) {} = Refactored
    let glideMixin = function (obj) {
      obj.glide = function () {
        console.log("I'm " + this.name + " and I'm Gliding, wooosh!");
      }
    };
    glideMixin(bird);
    glideMixin(boat);

    (bird.glide());
    (boat.glide());
    // Only change code above this line


    // Object Orientated Programming = Q22/26 - Override Inherited Methods
    // TASK: Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
    // NOTES: Class name Bird changed to Penguin and the return string changed from 'I am flying' to 'Alas, this is a flightless bird'.
    function Bird() {}

    Bird.prototype.fly = function () { // The fly method
      return 'I am flying';
    };

    function Penguin() {}
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;

    // Only change code below this line

    Penguin.prototype.fly = function () {
      return "Alas, this is a flightless bird.";
    };

    // Only change code above this line

    let penguin = new Penguin();
    console.log(penguin.fly())


    // Object Orientated Programming = Q21/26 - Add Methods After Inheritance
    // TASK: Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
    // NOTES:
    // Then add a bark() method to the Dog object so that beagle can both eat() and bark().The bark() method should print Woof! to the console.
    function Animal() {}
    Animal.prototype.eat = function () {
      console.log("nom nom nom");
    };

    function Dog() {}

    // Only change code below this line
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function () {
      console.log("Woof!");
    };
    // Only change code above this line

    let beagle = new Dog();
    // console.log(beagle instanceof Animal);
    // console.log(beagle.constructor);
    beagle.eat();
    beagle.bark();


    // Object Orientated Programming = Q20/26 - Reset an Inherited Constructor Property
    // NOTES:
    // TASK: Fix the code so duck.constructor and beagle.constructor return their respective constructors.
    function Animal() {}

    function Bird() {}

    function Dog() {}

    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);

    // Only change code below this line
    Bird.prototype.constructor = Bird;
    Dog.prototype.constructor = Dog;


    let duck = new Bird();
    let beagle = new Dog();

    console.log(duck.constructor);
    console.log(beagle.constructor);


    // Object Orientated Programming = Q19/26 - Set the Child's Prototype to an Instance of the Parent
    // NOTES:
    // TASK: Modify the code so that instances of Dog inherit from Animal.
    function Animal() {}

    Animal.prototype = {
      constructor: Animal,
      eat: function () {
        console.log("nom nom nom");
      }
    };

    function Dog() {}

    // Only change code below this line

    Dog.prototype = Object.create(Animal.prototype);
    let beagle = new Dog();
    beagle.eat();
    console.log(beagle instanceof Animal);


    // Object Orientated Programming = Q18/26 - Inherit Behaviors from a Supertype
    // NOTES: Inheritance
    // TASK: Use Object.create to make two instances of Animal named duck and beagle. 
    function Animal() {}

    Animal.prototype = {
      constructor: Animal,
      eat: function () {
        console.log("nom nom nom");
      }
    };

    // Only change code below this line

    let duck = Object.create(Animal.prototype); // Change this line
    let beagle = Object.create(Animal.prototype);; // Change this line
    duck.eat();
    beagle.eat();
    console.log(beagle instanceof Animal);


    // Object Orientated Programming = Q17/26 - Use Inheritance So You Don't Repeat Yourself
    // NOTES: There's a principle in programming called Don't Repeat Yourself (DRY).
    // The reason repeated code is a problem is because any change requires fixing code in multiple places.
    // This usually means more work for programmers and more room for errors.

    // TASK: The eat method is repeated in both Cat and Bear.
    // Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
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

    function Animal() {}

    Animal.prototype = {
      constructor: Animal,
      eat: function () {
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

    Dog.prototype.isPrototypeOf(beagle); // yields true

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
      eat: function () {
        console.log("nom nom nom");
      },
      describe: function () {
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
      eat: function () {
        console.log('Dog Food');
      },
      describe: function () {
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
      if (beagle.hasOwnProperty(property)) {
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
    console.log(beagle);


    // Object Orientated Programming = Q9/26 - Understand Own Properties
    // NOTES: 
    function Bird(name) { //  Start of the Object
      this.name = name; // Property 1
      this.numLegs = 2; // Property 2
    } // End of Object

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
      sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
      }
    };

    console.log(dog.sayLegs());

    // Object Orientated Programming = Q3/26 - Create a Method on an Object
    // NOTES: Objects can have a special type of property, called a method.
    // Methods are properties that are functions. This adds different behavior to an object.

    let dog = {
      name: "Spot",
      numLegs: 4,
      sayLegs: function () {
        return "This dog has " + dog.numLegs + " legs."
      }

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
      let sortedArray = arr.sort(function (a, b) {
        return a - b
      });

      for (let i = 0; i < sortedArray.length; i += 1) {
        if (num > arr[i - 1] && num <= arr[i]) {
          return i;
        }
      }
      if (sortedArray[sortedArray.length - 1] < num) {
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
      if (num <= 0) {
        return '';
      }
      let result = '';

      for (let i = 0; i < num; i += 1) {
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

    console.log(largestOfFour([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ]));

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
        let fahrenheit = celsius * 9 / 5 + 32;
        return fahrenheit;
      }

      console.log(convertToF(30));

      // REFACTORED_ALGORITHM
      function convertToF(celsius) {
        return celsius * 9 / 5 + 32;
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
        Alan: {
          online: false
        },
        Jeff: {
          online: true
        },
        Sarah: {
          online: false
        }
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
          if (userObj.hasOwnProperty(people) === false) {
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
              ['deepest']
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

      console.log(filteredArray([
        [3, 2, 3],
        [1, 6, 3],
        [3, 13, 26],
        [19, 3, 9]
      ], 3));

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
      // NOTES: If we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:
      let ourVariable = ourArray[0];

      // Basic Data Structures = Q1/20 - Use an Array to Store a Collection of Data
      // NOTES: #1 A One Dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it.
      let yourArray = ['Ray', 1972, '26', true, null]; // Change this line

      // A more complex implementation of an array can be seen below.
      // This is known as a multi - dimensional array, or an array that contains other arrays.
      // Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.
      // NOTES: #2
      let complexArray = [
        [{
            one: 1,
            two: 2
          },
          {
            three: 3,
            four: 4
          }
        ],
        [{
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
      // NOTES: 
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
          let row = []; // NOTES: array is not a global variable as it is inside the nested for loop
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

      if (x == y) {
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
      let arraySum = myArray.reduce((previous, current) => previous + current);
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
      // Typical processing of strings is to remove the whitespace at the start and end of it .
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
      let result = str.replace(fixRegex, replaceText)
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

        if (responseFromServer) {
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

        if (responseFromServer) {
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

        if (responseFromServer) {
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

        if (responseFromServer) {
          // Change this line
          resolve("We got the data");
        } else {
          reject("Data not received");
          // Change this line
        }
      });

      //  ES6 = Q28 - Create a JavaScript Promise
      const makeServerRequest = new Promise((_reolve, _reject) => {

      });

      //  ES6 = Q27 - Import a Default Export 
      import subtract from './math_functions.js';
      // Only change code above this line
      subtract(7, 4);

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
      import {
        uppercaseString,
        lowercaseString
      } from './string_functions.js';
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
      export {
        lowercaseString,
        uppercaseString
      };

      // ES6 = Q22 - Create a Module Script
      <
      html lang = "en" >
        <
        body >
        <
        script src = "module"
      src = "index.js" > < /script> < /
      body > <
        /html>

      // ES6 = Q21 - Use getters and setters to Control Access to an Object
      // Only change code below this line
      class Thermostat {
        constructor(temp) {
          this._temp = 5 / 9 * (temp - 32);
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
        return ({
          name,
          age,
          gender
        })
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
      const half = ({
        max,
        min
      }) => (max + min) / 2.0;
      // Only change code above this line
      console.log(stats);
      console.log(half(stats));

      //  ES6 = Q15 - Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements.
      const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      function removeFirstTwo(list) {
        // Only change code below this line

        const [, , ...arr] = list; // Change this line - Solution 1
        // const [a, b, ...arr] = list; // Change this line - Solution 2

        // Only change code above this line
        return arr;
      }
      const arr = removeFirstTwo(source);
      console.log(arr, source); // - Solution 1
      console.log(arr); // - Solution 2
      console.log(source); // - Solution 3

      // ES6 = Q14 - Use Destructuring Assignment to Assign Variables from Arrays
      let a = 8,
        b = 6;
      [a, b] = [b, a];
      console.log(a, b);

      // ES6 Q13 - Use Destructuring Assignment to Assign Variables from Nested Objects
      const LOCAL_FORECAST = {
        yesterday: {
          low: 61,
          high: 75
        },
        today: {
          low: 64,
          high: 77
        },
        tomorrow: {
          low: 68,
          high: 80
        }
      };

      // Only change code below this line

      // const lowToday = LOCAL_FORECAST.today.low;
      // const highToday = LOCAL_FORECAST.today.high;
      const {
        today: {
          low: lowToday,
          high: highToday
        }
      } = LOCAL_FORECAST;
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
      const {
        today: highToday,
        tomorrow: highTomorrow
      } = HIGH_TEMPERATURES;
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
      const {
        yesterday,
        today
      } = HIGH_TEMPERATURES;
      const {
        tomorrow
      } = HIGH_TEMPERATURES;

      console.log(HIGH_TEMPERATURES);


      // ES6 Q10 -  Use the Spread Operator to Evaluate Arrays In-Place
      const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
      let arr2;

      arr2 = [...arr1]; // Change this line

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
        } catch (ex) {
          console.log(ex);
        }
        return MATH_CONSTANTS.PI;
      }
      const PI = freezeObj();


      // ES6 Q7 - Mutate an Array Declared with const
      const s = [5, 7, 2];

      function editInPlace() {
        // Only change code below this line

        s[0] = 2;
        s[1] = 5;
        s[2] = 7;


        // Only change code above this line
      }
      editInPlace();
      console.log(s);

      // ES6 Q6 - Declare a Read-Only Variable with the const Keyword
      function printManyTimes(str) {

        // Only change code below this line

        const SENTENCE = str + " is cool!";
        // const SENTENCE = str + "is amazing!";

        for (let i = 0; i < str.length; i += 2) {
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
        return num > 0 ? "positive" :
          (num < 0) ? "negative" :
          "zero";
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
        return Math.random();
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
          if (contacts[i].firstName === name) {
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
          return sum(arr, n - 1) + arr[n - 1];
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
      var myArr = [2, 3, 4, 5, 6];
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
      while (i < 0) {
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
      var myPlants = [{
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
          "artist": "Pink_Floyd",
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

      var playerNumber = 16; // Change this line
      var player = testObj[playerNumber]; // Change this line

      console.log(player);



      // Accessing Object Properties with Bracket Notation
      // Setup
      var testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
      };

      // Only change code below this line

      var entreeValue = testObj["an entree"]; // Change this line
      var drinkValue = testObj["the drink"]; // Change this line



      // Accessing Object Properties with Dot Notation
      // Setup
      var testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
      };

      // Only change code below this line

      var hatValue = testObj.hat; // Change this line
      var shirtValue = testObj.shirt; // Change this line
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

      cc(2);
      cc(3);
      cc(7);
      cc('K');
      cc('A');




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