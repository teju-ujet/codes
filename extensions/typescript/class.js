var Person = /** @class */ (function () {
    function Person(value) {
        this.value = value;
    }
    Person.prototype.getName = function () {
        return this.value;
    };
    return Person;
}());
var per = new Person("teju");
console.log(per.getName());
