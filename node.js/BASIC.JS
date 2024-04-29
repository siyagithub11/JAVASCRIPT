
//**************INTRO*************
// javascript engine is embded with browser
console.log("Siya")

//Variable= let, var, const
const accountId= 23;     // const that can not change value
//accountId = 2;       //not allowed 
console.log(accountId)

let accountEmail= "siya561gmail.com"
var accountPassword ="123"
accountCity = "delhi"


//let accountEmail="hbjj@gmail.com"
accountPassword=6756756
accountCity= "GZD"
 
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

/*
Prefer not use var because of issue in block scope or functional scope(jaise agar var name hain code main aur aage bhi kisi ne same var name use kiya to uski value change ho jati h isliye hum var ko prefer nhi krte hain)
*/

console.table([accountId, accountEmail, accountPassword, accountCity])


/* IInd     */
"use strict"//treat all JS code as newer version if we didn't it is use automatically
//alert( 3+3) // gave error because we nodejs not browser

/* DATATYPES
=====PRIMITIVE TYPE(call by value)
NUMBER => 2 to power 53
 const score
bigint => for long range value

string = " "
boolean => true or false
null => standalone value  
undefined => 
symbol => for define unique value
 


======REFRENCE TYPE(call by refrence)
object=>
array
function
*/
// typeof use to define  the type of variable and conversion
let name =" siya"
let age = 18
//let  isLoggedIn = false
 console.log( typeof age)
 console.log( typeof null) //object
 console.log(typeof undefined) //undefined
 

 let score = "33abc" //33, null, 0, undefined,true/false, "siya"
 

 console.log( typeof score);
 console.log(typeof (score));

 let valueInNumber = Number(score) 
 console.log(typeof valueInNumber); /*this is conversion of string into number(if value is 33)*/
 console.log(valueInNumber) ;

/*
"33"=>33
"33abc"=> Nan
true=>1 false=>0
*/

let isLoggedIn = "siya"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
 /*
 for loggedin 
 1=> true; 0>=false
 ""=>false
 "siya"=> true
 */

 let someNumber = 33
 
 let stringNumber = String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)
