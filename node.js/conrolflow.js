// control flow also called logic flow
// IF STATEMENT SYNTAXX
//if(condition(true/false)){
    // is the condition is true code executed if false code does not executed
//}
const isUserLoggedIn = true
const temperature=41
// if(temperature===41)(for strictly checking the same unit)
if(temperature<50){
    console.log("temperature is less than 50");
}
else{
console.log("temperature is  greater than 50");
}
console.log("always executed");
// condition >, <, <=, >=,==, !=, ===(checking datatype), !==


//const score=200
//if(score>100){
  //  const power="fly"
    //console.log(`User Power: ${power}`);
//}
//console.log(`User power: ${power}`);

// short hand notation

const balance= 1000
//if(balance>500) console.log("test");// implicit scope
//console.log("test2");

if(balance<500){
console.log("less than")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}
// example
const userlogin= true
const debitCard = true
const loggedInGoogle= false
const logedInEmail= true
if(userlogin && debitCard ){
console.log("allow to buy course")
}
// && all  condition is true
// || any one is true which is execute

if(loggedInGoogle || logedInEmail){
    console.log("User logged IN")
}

// NULLISH COALESING OPERATOR(??)null/undefined // bascially its gives controll for database

let val1;
val1= 5?? 10;
val1=null??10
val1= null?? undefined;
val1= undefined??15
val1= null?? 10?? 15// asign first value
console.log(val1);

//terniary operator
// syntax = condition ? true : false

const iceTeaPrice= 100;
iceTeaPrice>=80 ? console.log("less than 80"): console.log("more than 80");