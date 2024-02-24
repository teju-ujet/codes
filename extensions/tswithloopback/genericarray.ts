function getarray<T>(items:T[]):T[]{
    return new Array<T>().concat(items);

}
let Numarray=getarray([100,200,300]);
let Strarray=getarray(['hello','world']);//without declaring the datatype it will automatically it will drirectly take the valle as string
console.log(Numarray);
console.log(Strarray);
//let concat=Numarray.concat(Strarray);//shows err because we already used the concat method and we cant assign the number and string data type together
//Numarray.push("hello"); if we the push string value in the number it won't take because it is already declared as number datatype
//console.log(concat);err arrgument of string cant assignd by number
