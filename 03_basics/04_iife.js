// immediately invoked function expression (iife)

(function chai(){
    //named iife
    console.log(`DB connected`);
})();

// ()()

( (name) => {
    console.log(`DB Connected to ${name}`);
})("rajat")

