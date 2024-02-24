let v: any = true;//without using any there will be an error in ts file
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type