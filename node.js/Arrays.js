// ARRAY = The Array object, as with arrays in others programming languages enables storing a collection of multipless items under a single 
// variable name , and has members forr performing common array operations. and they are resizable and zero indexed
//== js arrray array copy colection operation creates shallow copies
//( A shallow copy of an object is a copy whose properties share the same refrences point to the same underlying values)
//(A deep copy of an object is a copy whose properties do not share the same refrence point to the same underlying values)

// first Syntax
const myArr=[ 1 , 2, 654, 45.5, 'siya'] 
const myHeros=["shaktimaan", "pratap"]

// second syntax
const myArr2= new Array(1,2,4,5)
//console.log(myArr[1]);

//Array Methods

//myArr.push(55,76)// used to add a value in array
//myArr.pop() // used to remove only last value of an array

//myArr.unshift(9) //used to add a value in staring of an array but this is not a best practice
//myArr.shift() //used to remove the value in staring of an array

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(9))

const newArr = myArr.join() // used to convert into string 
//console.log(typeof newArr)
//console.log(myArr);

//*********Slice  Splice */(THE DIFFERENCE BTWEEN SLICE AND SPLICE IS THAT WHICH PART IS PRESENT IN SLICE PART THAT NOT COMING IN SPLICE PART)
console.log("A" , myArr);

const myn1 = myArr.slice(1,4)// used to return a copy of 
console.log("B", myArr)
console.log(myn1)

const myn2 = myArr.splice(1,4)
console.log("C", myArr)
console.log(myn2)
