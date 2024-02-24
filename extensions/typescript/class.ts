class Person{
    private readonly value:string;
    public constructor(value:string){
        this.value=value;
    }
    public getName():string{
    return this.value;
}
}

const per=new Person("teju");
console.log(per.getName());
