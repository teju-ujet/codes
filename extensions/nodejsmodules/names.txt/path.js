var path = require("path");  
// Normalization  
console.log('normalization : ' + path.normalize('/sssit/nodejs//node/newfolder/tab/..'));  
// Join  
console.log('joint path : ' + path.join('/sssit', 'nodejs', 'node/newfolder', 'tab', '..'));  
// Resolve  
console.log('resolve : ' + path.resolve('path.js'));  
// Extension   
console.log('ext name: ' + path.extname('path.js'));    