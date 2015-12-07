var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	if(req.url!='/favicon.ico'){
		console.log(req.url);
	}
	res.end();
});
server.listen(1111,'127.0.0.1',function(){
	console.log('服务器开始监听');
	server.close();
});
server.on('close',function(){
	console.log('服务器已关闭');
});
