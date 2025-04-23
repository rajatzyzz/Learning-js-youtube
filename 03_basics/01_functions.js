// function addTwoNumbers(num1 , num2) /*parameters*/ {
//     console.log(num1 + num2)
// }

// addTwoNumbers(2,3) //arguments

function addTwoNumbers(num1 , num2){
    // let result = num1+num2
    // return result
    return num1 + num2
}

//const result = addTwoNumbers(2,3) 
//console.log("result :",result);

function loginUserMessage(username){
    return`${username} just Logged in`
}

//console.log(loginUserMessage("Rajat")) // when we dosent pass any value it gives us undefined

function calculateCartPrice(...num1){ //... known as rest operator or spread operator name depend on the use case
    return num1 // rn it is called as rest operator
}

//console.log(calculateCartPrice(200,300,100)) 

const user={
    username:"rajat",
    price:99
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} & the price is ${anyObject.price}`);
}

//handleObject(user);
handleObject({
    username:"silver",
    price:999
})

const myNewArray=[100,300,400,500];

function returnValue(getArray){
    return getArray[2];
}

console.log(returnValue(myNewArray));
console.log(returnValue([500,600,200,100]));

