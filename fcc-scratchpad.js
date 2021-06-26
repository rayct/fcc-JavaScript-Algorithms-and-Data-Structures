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
    result = lookup[val];

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");



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