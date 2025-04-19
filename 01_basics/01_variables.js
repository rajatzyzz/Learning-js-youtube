const accountId=2536
let accountEmail="ra@gmail.com"
var accPass="1234"
accountCity="uttrakhand"
let accState;

// accountId=2 not allowed
accountEmail="rajat@gmail.com"
accPass="5678"
accountCity="Bangalore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accPass,accountCity,accState])
