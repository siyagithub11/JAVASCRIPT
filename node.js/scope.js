// global scope
//var c =300 var every time return 4 that's why var does not use in big projrct
let a =345// so in the block the value of a is 3 and in global is 345
// block scope
if(true){
    let a =3
    const b =20;
    var c = 4
   // console.log(a)
}

//console.log(a);
//console.log(b);
//console.log(c);

// nested scope remember icecream example child class access parent class but parent class does not
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)// gave because out of scope
    two()// if we remove two so one is already not called bcz calline is line by line
}
//one()

// scope in if else
if(true){
const username ="siya"
 if(username==="siya"){
    const website="  youtube"
    //console.log(username + website)
 }
 //console.log(website)
 //console.log(username)
}
//console.log(username)

////###################################interesting concept
// in this we only declare variable
addone(5)
function addone(num){
    return num+1
    
}
//addone(5) we declare both places staring and end
// it is expression
// in this is hold a  function in a variable so if we declare addTwo in starting they gave error this process is called huistick// hosting
const addTwo = function(num){
    return num+2
}
addTwo(5)