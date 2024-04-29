// function
function sayMyName (){
    console.log("s")
    console.log("i")
    console.log("y")
    console.log("a")
}
// if we write only sayMyName that is only refrence of function if we add() and its execution of function.
//sayMyName()
// parameter
//function addTwoNum(num1, num2){
   // console.log(num1+num2);
    
//}
function addTwoNum(num1, num2){
   // let result= num1+num2;
    //console.log("lhgh")// this is print because this is before the code
    //return result;
    //console.log("ggjh")// in function after return any console never work. called unreachable code
    // one more way
    return num1+num2
}
// arguments
//addTwoNum(2,3)
//addTwoNum(3,"4")
//addTwoNum(3,"a")
//addTwoNum("e","3")
//addTwoNum(3,null)
const result= addTwoNum(3,4)

//console.log("result:",result)

// other way to pass the value for argument
//read at last if we gave deafault  value so console never come on if condition
function loginUserMessage(userName="siya"){


    //function loginUserMessage(userName){
    //if(userName===undefined){
        if(!userName){
        console.log("please enter user name")
        //return 

    }
    return `${userName} just loggedIn`
}

//loginUserMessage("siya") // value does not print
//console.log(loginUserMessage("siya"))
//console.log(loginUserMessage())// this is undefined not null so for this we check is else condition


// note in javascript we use if else:
// so in if we gave the conditon :  undefined, ! they define the condition is false

// shopping cart condition we create a parameter for user for further condition
//function calculateCartPrice(...num1){
    // more condition in this val1 store 200 val2 400 and rest value is in num1 
    function calculateCartPrice(val1,val2,...num1){
return num1
}
//console.log(calculateCartPrice(200,400,444))// situation when we have so many value, so console only print first value(200) for solving this we rest operation.
//... three dot called rest operator

// how to objecct in function int this user= anyObject
const user = {
    userName : "siya",
    price: 2345
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName } and price is ${anyObject.price }`)

}
//handleObject(user)
// direct gave object
handleObject({
    userName:"siyu",
    price:678678
}
)

// how to gave array to function
const myNewArray=[33,78787,67867]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray))
// we pass direct the values
console.log(returnSecondValue([5676,76786,876786]))