const coding=["js", "python","java","cpp","ruby"]
// noted function ke name h par bo call back function thats why we remove it: like coding.foreach(function callback function name bcz call back function does not have name)
//val is parameter

//coding.forEach(function (val){
//console.log(val);
 //})

// arrow function with for each
 //coding.forEach( (item) => {
//console.log(item);
 //})

 // function as a parameter to for each
 //function printMe(item) {
   // console.log(item);
 //}
 //coding.forEach(printMe)

 //coding.forEach((item,index,arr)=>
 //{
   // console.log(key,index,arr);
 //})

 // imp with help of for each we easily access the value of array object and big database
 const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
 ]
 myCoding.forEach( (item)=>{
    console.log(item.languageFileName)
 })