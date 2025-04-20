//  Primitive  (call by value) ( stack memory)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n n rep. big int



// Reference (Non primitive)

// Array, Objects (Rt object), Functions (return type obj func)
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//******* 

// stack(primitive)(we get the copy in the stack) ,heap memory (non)(we get the reference & changes are to be made in the original value)


console.log( );

let name1 = "rajat";
anothername = "monti";

anothername ="chaiaurcode"
console.log(name1)
console.log(anothername)






