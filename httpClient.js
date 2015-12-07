var http = require('http');
var options = {
	hostname:"apis.baidu.com",
	port:80,
	path:'/apistore/weatherservice/citylist?cityname=%E6%9C%9D%E9%98%B3',
	method:'GET',
	headers:{'apikey':'d3c6d1bffcb17089bc84b16456582ad6'}
};
var req = http.request(options,function(res){
	console.log('状态码:' + res.statusCode);
	console.log('响应头' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('响应内容：' + chunk);
	});
});
req.end();
