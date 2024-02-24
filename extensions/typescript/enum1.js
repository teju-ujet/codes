// const small=1;
// const medium=3;
// const large=3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
;
var mySize = Size.Medium; //declaring the value of medium value in mysize
console.log(mySize);
console.log(Size);
