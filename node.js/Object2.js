//object literals declaration
//const tinderUser={}


//object construction or singleton:
//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="12abc"
tinderUser.name="sunny"
tinderUser.IsloggenIn=false

//console.log(tinderUser)

const regularUser={
    email:" some@gmail.com",
    fullName :{
        userfullName: {
            firstName: "siya",
            lastName: "parashari"
        }

    }
}
//console.log(regularUser.fullName.userfullName.firstName)

//merging object same as array
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
//const  obj3 = Object.assign( {}, obj1,obj2)// use to copy the valuesof all enumerate(changeable ) properties from one or more source object to a target object
//console.log(obj3){} use just for documentaional option. and for target and source stuff.
 
//const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users=[
    {
    id:1,
    email:"h@gmail.com",
    },
    {
        id:2,
        email:"h@gmail.com",
        },
        {
            id:3,
            email:"h@gmail.com",
            },
]
users[1].email
console.log(users[1].email)
//console.log(tinderUser);


//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty(`name`))// for avoid the crashing we use this to find that the value is present or not