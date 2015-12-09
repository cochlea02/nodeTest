var http = require('http');
var express = require("express");
var qs = require('querystring');
var url = require('url');
var app = express();
app.use(express.static(__dirname));
app.use('/js',express.static(__dirname+'\\js'));
app.get('/',function(req,res){
	var reqParam = url.parse(req.url,true).query;

	var opts={
		hostname:'10.100.7.8',
		port:'8080',
		path:'/sys/user/isregister?' + qs.stringify(reqParam)
		// headers : {'apikey':'d3c6d1bffcb17089bc84b16456582ad6'}
	}
	http.get(opts,function(cres){
		console.log('状态码:' + cres.statusCode);
		console.log('响应头' + JSON.stringify(cres.headers));
		console.log(reqParam);
		console.log(decodeURIComponent(opts.path));
		// cres.on('data',function(chunk){
		// 	res.send(chunk);
		// });
	});	
});
app.listen(8888,"127.0.0.1",function(){
	console.log('服务器正在监听...');
});