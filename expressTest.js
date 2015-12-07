var http = require('http');
var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.get('/',function(req,res){
	var opts={
		hostname:'apis.baidu.com',
		path:'/apistore/weatherservice/citylist?cityname='
		+ encodeURIComponent("上海"),
		headers : {'apikey':'d3c6d1bffcb17089bc84b16456582ad6'}
	}
	http.get(opts,function(cres){
		console.log('状态码:' + cres.statusCode);
		// console.log('响应头' + JSON.stringify(cres.headers));
		cres.on('data',function(chunk){
			res.send(chunk);
		});
	});	
});
app.listen(8888,"127.0.0.1",function(){
	console.log('服务器正在监听');
});