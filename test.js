var qs = require('querystring');
var s = 'http://127.0.0.1:1337/user?userName=cochlea&age=18';
var parseS = qs.parse(s);
var parseSS = decodeURIComponent(qs.stringify(parseS));
console.log(parseS);
console.log(parseSS);