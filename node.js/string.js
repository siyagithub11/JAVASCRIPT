console.log("hello"+" world")// concatination

const name=" siya"
const repoCount= 50

//console.log(name + repoCount + " Value")

// ***StringInterpolation**   string is a object
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

//RightSyntax of String
 const gameName = new String('siyaparashari-pc')
 console.log(gameName[0])
//console.log(gameName.__proto__)
//console.log(gameName.codePointAt())//they convert the object into string
//console.log(gameName.toUpperCase())// but they can't change the orginal value bcz of heap memory
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('s'));

//console.log(gameName.substring(0,2));
//anotherway
const newString= gameName.substring(0,3)
//console.log(newString);

const anotherString = gameName.slice(-8, 5)
//console.log(anotherString)

// .trim function used for avoid the space

const url ="https://siya.com/siya%20parashari"
console.log(url.replace('%20', '-')) //used for replace the unwanted stuff
 console.log(url.includes('sundar')) /// used to check the value is present or not
 

 ///*****Split function used */

 console.log(gameName.split('-')) // return value btw seperator in the form array
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]