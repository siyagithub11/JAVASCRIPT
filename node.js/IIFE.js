// IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) THAT FUNCTION THAT IS EXECUTE IMMEDIATELY BCZ FOR DATABASE CONNECTION AND FOR GLOBAL VARIABLE
//AND for reduce the problem og global scope we use iife
// syntzx()() first paremthesis is for function definition and the second one is for calling

// normal function =function chai(){
  //  console.log(`DB CONNECTED`)
//}
//chai();

//iffe
(
    function chai(){
          console.log(`DB CONNECTED`)
      }
      
)();
// upr wale main ; lagana must h becz in iife they do not know where the function end so if we create another iife function they error if we not use ;
// one  more
// it is also called named iffe%%% important
( function aurcode(){
    console.log(`db connected`)
}
)();

// with the help of arrow function
(
    ()=>{
console.log(`db connected3`)
    }
)();

((name)=>{
    console.log(`db connectedd with ${name}`);
}
)('siya')// function as a argument