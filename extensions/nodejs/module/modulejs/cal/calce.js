const calculator = require('./cal');
 
let x = 50, y = 20;
 
console.log("Addition of 50 and 20 is "
    + calculator.add(x, y));
 
console.log("Subtraction of 50 and 20 is "
    + calculator.sub(x, y));
 
console.log("Multiplication of 50 and 20 is "
    + calculator.mult(x, y));
 
console.log("Division of 50 and 20 is "
    + calculator.div(x, y));