type Employee={
    readonly id:number,
   name:string,
   retire:(date:Date) =>void
}

let employee:Employee={
    id:101,
    name:"teju",
    retire:(date:Date)=>{
        console.log(date);
    }

};
console.log(employee);