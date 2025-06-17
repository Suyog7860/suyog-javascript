// primitive data types in js
// String, Number, Boolean, null, undefined, symbol, BigInt.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(anotherId);

const bigNumber = 78965423215932n




// reference/Non-Primitive data types in js
// arrays, objects, functions


const heros = ["Shaktiman", "Nagraj", "Krish"];
let myObj = {
    name: "Suyog",
    age:24,
}


const myFunction = function(){
    console.log("Hello Suyog");
    
}


// -+-+-+-+-+-+-+-+--+-++-++-+-+-++-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+++-+-+-+-+-+--+-+-++-+-+--++-++

// stack(primitive), Heap(Non-primitive)

let myYoutubename = "SuyogBhalerav"
let anothername = myYoutubename
anothername = "ssgb tv"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
 email:"user@gmail.com",
 upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "ssgb@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

