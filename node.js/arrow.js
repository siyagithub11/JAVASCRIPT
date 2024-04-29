const user ={
    username:"siya",
    price: 99,

    welcomeMessage:function(){
        //console.log(`${this.username}, welcome to website`);//this keyword used to current context(value)
       // console.log(this);// this print all the context of siya and hit
    }

}
//user.welcomeMessage()
//user.username="hit"
//user.welcomeMessage()
//console.log(this);in this global context is empty so is {}empty object
//////////////// for run the javascript we have only javascript engine that present in js browser , but now we have stand alone platform like nodeso in the global objext is window object they provide empty in vs code and chrome in window object

////////// ARROW FUNCTION
//function chai(){
  //  let username="sam"// this is not applicale for function 
    //console.log(this); //only console stmt provide so many  global info
//console.log(this.username)//this is undefined bcz this is used for object not function
//}
//chai();

// other way to define function through arrow function
//const chai = function(){
  //  let username= "shubh"
    //console.log(this.username);// undefine
//}
//chai()

//arrow function
const chai = () =>{
    let username= "shubh"
    //console.log(this.username);// this is also undefine 
   // console.log(this)// empty{}
}
//chai()


// pure arrow function
//synatx= ()=>{}

// noramal function or explicitly return
//const addTwo=(num1, num2)=>{
//    return num1+num2
//}
// note : = if you curly braces it must used return keyword in  ( ) in this is not must

// implicit return means not define the return its assume
const addTwo=(num1, num2)=> num1+num2 // also(num1 num2)
    

console.log(addTwo(3,4));