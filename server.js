let express = require('express');
let server = express();
server.use(express.static(__dirname + '/public'));
server.listen('3000');
console.log('Open up http://localhost:3000/ in your web browser.');