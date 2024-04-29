
//in this only assumption happen that condition is present
//const userEmail="siya@gmail.com"// , "" empty string excute else stmt , [] empty array excute if stmt
//if(userEmail){
   // console.log("Got user Email");

//}
//else{
   // console.log("dont have email");
//}

// falsy value := FALSE, ZERO(0), NEG ZERO, BIGINT(On)(zero n), null, undefinedd, Nan (not a number)
// Truhty value:= "0"(zero under string), 'false', " ", []empty array, {}empty object, function(){} empty function,

const userId=[]
if(userId.length === 0){
console.log("Array is empty");
}
const emptyObj={}
    if(Object.keys(emptyObj).length ===0){
        console.log("object is empty")

    }
// some more comparing content
false ==0// gives tru
false==''// gives true
0== ''// gives true