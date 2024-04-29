// objects are defined for two ways: With the help of Literal and Constructor

// Singleton:= when the object is declared with the help of construction they called the sinngleton.

//Symbol Declaration
//const mySum = Symbol("key1")

//Objects Literals Declaration
//In this name is key and Siya is value
const mySum = Symbol("key1")
const JsUser={
    name:"Siya",
    "full-name": "Siya Parashari",// in this we define the key as a string so the method calling(["full-name "] is used with double quote otherwise it's gave error)
[mySum]:"myKey1",
    age : 19,
    location: "ghaziabaad",
    email: "@google.com",
    isLoggenIn: false,
    lastLoginDay: ["monday", "tuesday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"]) // define in double quotes because object at calling time define as a string if we dont gave "" its gives an error
//console.log(JsUser["full-name"])
//console.log(typeof JsUser[mySum])// note: in this section currently the type of symbol is string so we use[key] to convert the type

// basic
// access the value with dot notattion
// change the value
JsUser.email="siya@gmail.com"
// for never changing the value we use freeze obj
// Object.freeze(JsUser)
JsUser.email="parashari@gmail.com" // tis value is not change


JsUser.greeting = function(){
    console.log("hello Js User");
}
JsUser.greetingTwo= function(){
    console.log(`hello js user, ${this.age}`)// in this section use this to define the properties that avaiable in define function
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
