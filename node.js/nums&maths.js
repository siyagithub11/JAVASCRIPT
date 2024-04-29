//      Syntax 
const score = 400.5435
console.log( score)

const balance = new Number(100)
console.log( balance)
console.log( score.toString())
console.log(balance.toFixed(2)) // basically used for ecommerce website
console.log(score.toPrecision())

const otherName = 23.8966
console.log(otherName.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))// en-IN used to convert inn indian value


//************MATHS */
console.log(Math);
console.log(Math.abs(4)) //return the absolute value
console.log(Math.round(4.6))// nearest integer
console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))
console.log(Math.min( 4,6,8,3))
console.log(Math.max(5,9,6,8))
console.log(Math.random())

console.log(Math.floor(Math.random()*10)+1)
const min = 10
const max = 20
 console.log(Math.random() * (max - min +1))
