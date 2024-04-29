// primitive datatype
// 7 types: String, Number, Boolean, Null , Undefined, Symbol, BigInt

const score = 100 // number
const scoreValue=  100.23 // number although its float
const isLoggedIn = false // boolean

const outsideTemp = null // null
let userEmail; // undefined

const id= Symbol('123')
const anotherId = Symbol('123') //define unique

const bigNumber= 5765687886867;

//non primitive datatype
// array , object, functioms

const heros=[ "shaktimaan" , "nagraj", "doga"]// array
let myObj={ 
    name: "siya"
    
}//object
// syntax function(){} 
  const myFunction = function(){
    console.log("hello world")
    
  }
 
//console.log(typeof myFunction)
 // The returntype of non primitive datatype is object but the returntype of function is object function.


 //****************************Memory

 // STACK( primitive) access copy  ,  HEAP(non primitive) access refrence

 let myYoutubename = "siyadotcom"

 let anotherName =  myYoutubename

anotherName= "chaiaurcode"

 //console.log(myYoutubename)
 //console.log(anotherName)

 let userOne ={
  email:"user@google.com",
  upi: "user@bl"
 }
 let userTwo = userOne

 userTwo.email="siya@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);