var fs = require('fs');

var tool = require('./tool');
tool();

var data = fs.readFileSync('./data.json','utf8');

console.log("data",JSON.parse(data));


