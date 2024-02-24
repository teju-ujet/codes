function CalculateTax(income, taxYear) {
    if (taxYear > 2022)
        return income * 1.2; //if we wont give this 2 return types then the value will be undefined so after giveng thus stmt then the value will print   
    return income * 1.3;
}
console.log(CalculateTax(100, 2023)); //thde year wont print because we are giveng the option to print either 1st return or 2nd one
