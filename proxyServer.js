var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	var opts={
		hostname:'apis.baidu.com',
		path:'/apistore/weatherservice/citylist?cityname='
		+ encodeURIComponent("上海"),
		headers : {'apikey':'d3c6d1bffcb17089bc84b16456582ad6'}
	}
	var out = fs.createWriteStream('./cres.log');
	http.get(opts,function(cres){
		console.log('状态码:' + cres.statusCode);
		// console.log('响应头' + JSON.stringify(cres.headers));
		cres.on('data',function(chunk){
			res.write(chunk);
		});
	});
}).listen(88,'127.0.0.1',function(){
	console.log('服务器正在监听');
});