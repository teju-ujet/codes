interface Person{
    name:string,
    address:string,
    age:number,
    sayHello:()=>void;
}
const person:Person={
    name:"teju",
    address:"hyd",
    age:22,
    sayHello:()=>console.log(" we have asign the  "),//we are giving this like it is type of function

};
console.log(person);