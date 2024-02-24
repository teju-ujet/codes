function CalculateTax(income:number,taxYear):number{//we declared the value of taxyear so no need to declare or we cal decalre it is optional
    if(taxYear> 2022)
    return income *1.2;//high it print//if we wont give this 2 return types then the value will be undefined so after giveng thus stmt then the value will print   
     return income *1.3;//less it will print
}
console.log(CalculateTax(100,2023));//thde year wont print because we are giveng the option to print either 1st return or 2nd one