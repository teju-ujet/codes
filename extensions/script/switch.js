var week = 'b';
var result;
switch(week){
    case 'a':
        result="monday";
        break;
    case 'b':
            result="tuesday";
            break;
    case 'c':
            result="wednesday";
            break;
    case 'd':
            result="thusday";
            break;
    case 'e':
        result="firday";
        break;
    case 'f':
        result="saturday";
        break;
    case 'g':
        result="sunday";
        break;
    default:
        result="invalid day";
}
console.log(result);