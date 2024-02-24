
function exec(exports,require,___filename){

const exec = require('childprocess').exec;  
exec('my.bat', (err, stdout, stderr) => {  
  console.log(exec);
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);
  console.log(stderr);  
});
};
