const user={
    username: "rajat",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the websited`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="silver";
// user.welcomeMessage()
// console.log(this);

// function protein(){
//     let username="rajat";
//     console.log(this.username);
// }

// protein()

const chai = () => {
        let username="rajat";
        console.log(this);
    }

//chai()

// arrow func. () => {}

// const addTwo=(num1,num2) =>{
//       return num1+num2;
//     }

// implicit return below 
// const addTwo=(num1,num2) => num1+num2;
// or
// const addTwo=(num1,num2) => (num1+num2);

const addTwo=(num1,num2) =>({username: "rajat"})
console.log(addTwo(7,8))

