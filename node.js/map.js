// MAP IS A OBJECT IN JS holds key value and remember the origial insertion order of the key.its gaves always a unique value not a repeated value
 const map=new Map()
 map.set('IN, "INDIA')
 map.set('USA, "UNITED STATE OF AMERICA')
 map.set('CH, "CHINA')
 //map.set('IN, "INDIA')//not printed
 //console.log(map)

 for (const [key,value] of map) {
   // console.log(key, ':=', value)
 }

 // for of on object is not working
//const myObject={
  //  game1:'NFS',
//    game2:'Spiderman'
//}
//for (const [key,value]of myObject) {
    //console.log(key ,':-', value)
//}// this is not working bcz map does not work on map obj is not iterable


// forin loop
const myterms={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift"
}
for (const key in myterms) {
   // console.log(`${key} shortcut is ${myterms[key]}`);
}
// for in loop for array
const programming=["js", "rb","py","java", "cpp"]
for (const key in programming) {
  //console.log(programming[key])
   }
   // for in for map
   for (const key in map) {
console.log(key)   
   }
   // for in not iterable for map bcz it contain key not key value
   // object for for in loop
   // array for for of loop
