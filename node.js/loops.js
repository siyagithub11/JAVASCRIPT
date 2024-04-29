// for
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
      //  console.log("5 is the best");
    }
    //console.log(element);
    
}
//console.log(element)// element not accesible bcz of sccope;

//for (let i = 0; i<=10; i++) {
  //  console.log(`outer loop value: ${i}`);
  //for (let j = 0; j<=10; j++)  
  //console.log(`inner value: ${i}`);
//console.log(i+ '*'+ j+'='+i*j);
    
//}

// array
let myArray=["flash", "batman", " superman"]
//console.log(myArray.length);
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
 }

 // break and continue

 for (let index = 1; index<=20; index++) {
    if(index==5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of index is ${index}`);
    // break not working after break
 }

 for (let index = 1; index<=20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index is ${index}`);
    // continue is working it skip one time 
 }
// while or do-while
// synatx=while (condition) {
    //}

    let index=0
    while (index<=10) {
        console.log(`value of index is ${index}`);
        index= index+2
        
    }
    // while with array
    let myhero=['ram', 'krishna', 'kush']
    let arr=0;
    while (arr<myhero.length) {
        console.log(`value is ${myhero[arr]}`);
        arr=arr+1;
        
    }
let score=1//(11) its answer is 11
    do {
        console.log(`Score is ${score}`);
        score++
    } while(score<10);

    // for of loop= array specific array
    //for (const iterator of object) {
        
    //}
        // [" ", "",""]array wiht string
        // [{},{},{}]array with object

        const term=[1,2,3,4,5];// array
        for (const num of term) {
            console.log(num);
            }
            const greeting="Hello world!"
            for (const greet of greeting) {
                console.log(`each char is ${greet}`)
                
            }
    
