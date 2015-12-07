var http = require('http');
var server = http.createServer(
	function(req,res){
		if(req.url!=='/favicon.ico'){
			console.log(req.url);
			req.on('data',function(data){
			console.log('服务器接受到的数据：',decodeURIComponent(data));
		});
			req.on('end',function(){
				console.log('客户端数据已全部接收完毕');
			});
		}
		res.end();
	}
)
.listen(1337,"127.0.0.1",function(){
	console.log("服务器正在监听");
});
