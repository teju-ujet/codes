function getinfo<T,U>(id:T,name:U) :void {//we are not using return type we used void
console.log(typeof id+" ,"+typeof name);
}
getinfo<number,string>(1,"teju");//in this asked for the type of the generic so i got the generic typeof datatype
function getnogeneric<T>(id:T,name:string):void{
    console.log(typeof id+" ,"+typeof name);
}
getnogeneric<number>(2,'sai');//already string is assigned in function so there no need to declare here
    