// let firstName='Ram'
// let lastName=new String('Siva');
// console.log(firstName);
// console.log(lastName);
// console.log(firstName.length);
// console.log(lastName.length);

// let longString='We are learning strings in js'
// console.log(longString.slice(3,7));
// console.log(longString.substring(6,10));
// let poS=longString.replace('js','JavaScript')
// console.log(poS);

// let upperString=longString.toUpperCase()
// console.log(upperString.toLowerCase());

// let antherString='Helo'
// console.log(longString.concat(antherString));
// console.log(longString.lastIndexOf('J'));
// console.log(longString.charAt(20));
// console.log(longString.startsWith('m'));
// console.log(longString.includes('pr'));
// console.log(antherString.repeat(3));
// console.log(longString.split(' ',3));

// antherString[1]='p'
// console.log(antherString);



let firstName = 'Sita'; 
let lastName = new String('Rama'); 
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("First Name Length:", firstName.length);
console.log("Last Name Length:", lastName.length);

let longString = 'Exploring string operations in JavaScript'; 
console.log("Slice:", longString.slice(3, 7));
console.log("Substring:", longString.substring(6, 10));
let replacedString = longString.replace('JavaScript', 'JS');
console.log("After Replacement:", replacedString);

let upperString = longString.toUpperCase();
console.log("Upper Case:", upperString.toLowerCase());

let anotherString = 'World'; 
console.log("Concatenation:", longString.concat(anotherString));
console.log("Last Index of 'J':", longString.lastIndexOf('J'));
console.log("Character at Index 20:", longString.charAt(20));
console.log("Starts with 'm':", longString.startsWith('m'));
console.log("Includes 'pr':", longString.includes('pr'));
console.log("Repeat:", anotherString.repeat(3));
console.log("Split (limit 3):", longString.split(' ', 3));

// Strings are immutable in JavaScript,  line won't modify the string
anotherString[1] = 'p';
console.log("Updated Another String:", anotherString);
