const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('teju365', secret)  
                   .update('Welcome to node')  
                   .digest('hex');  
console.log(hash);  