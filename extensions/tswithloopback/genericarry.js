function getarry(items) {
    return new Array().concat(items);
}
var Numarry = getarry([100, 200, 300]);
var Strarry = getarry(['hello', 'world']); //without declaring the datatype it will automatically it will drirectly take the valle as string
console.log(Numarry);
console.log(Strarry);
