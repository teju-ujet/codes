function loggerreturn(thing) {
    return thing;
}
//const message:string=loggerreturn<string>("hello world return the type");//invoke the function giving the datatype in generic 
var message = loggerreturn("hello world return type");
var message1 = loggerreturn(2); //without giving the data type seperately it will direclty take the datatype 
console.log(message);
console.log(message1);
