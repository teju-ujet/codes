function KiloGrms(weight:number|string):number{
if(typeof weight==='number')
    return weight *2.2;

    else
    return parseInt(weight)*2.2;
}

KiloGrms(100);
KiloGrms("12");
console.log(KiloGrms);
