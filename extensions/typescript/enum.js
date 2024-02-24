var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["south"] = 1] = "south";
    directions[directions["east"] = 2] = "east";
    directions[directions["west"] = 3] = "west";
})(directions || (directions = {}));
var currentDirection = directions;
console.log(currentDirection); //directy they take the number from 0 i will count from north
