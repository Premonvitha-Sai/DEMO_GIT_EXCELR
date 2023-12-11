// Using var
var age = 25; // Number
var name = "John"; // String
var isStudent = true; // Boolean

// Using let
let temperature = 28.5; // Number
let city = "New York"; // String
let isLoggedIn = false; // Boolean

// Using const
const pi = 3.14; // Constant Number
const greeting = "Hello"; // Constant String

// Using BigInt
const bigNumber = BigInt(9007199254740991); 

// Reassigning values
age = 26; // Valid with var and let
temperature = 30.5; // Valid with let
// pi = 3.14159; // Error! Cannot reassign a constant variable

var symbol = Symbol("unique"); 


// Printing values
console.log("Age:", age);
console.log("Name:",name);
console.log("Is Student?", isStudent);

console.log("Temperature:", temperature);
console.log("City:", city);
console.log("Is Logged In?", isLoggedIn);

console.log("Pi:", pi);
console.log("Greeting:", greeting);
console.log("Big Number:", bigNumber);