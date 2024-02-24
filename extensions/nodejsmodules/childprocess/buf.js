buffer = new Buffer(26);  
len = buffer.write("Simply Easy Learning");  
console.log("Octets written : "+  len);  //lenght 
for(var i=0;i<26;i++)
{
    buffer[i]=i+97;
}
console.log(buffer.toString('ascii'));//all alphabets are printed
console.log(buffer.toString("ascii",0,5));//alphabets 0to5(abcde)will print in the output
console.log( buffer.toString('utf8',0,5));
console.log(buffer.toString(undefined,0,5));

