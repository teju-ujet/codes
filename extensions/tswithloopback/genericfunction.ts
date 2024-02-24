function loggerreturn<T>(thing:T):T{//which ever string type is defined that will be retuned
    return thing;

}
//const message:string=loggerreturn<string>("hello world return the type");//invoke the function giving the datatype in generic 
const message:string=loggerreturn("hello world return type");
const message1:number=loggerreturn(2);//without giving the data type seperately it will direclty take the datatype 

console.log(message);
console.log(message1);

