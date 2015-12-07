var fs = require('fs');
fs.readFile('./test.js',function(err,data){
	if(err) {
		console.log('读取失败');
	} else {
		console.log(data.toString('base64'));
	}
});
fs.writeFile('./writeTest.txt','这是第一行1\r\n这是第二行2\r\n',
	function(err){
		if(err){console.log('写文件失败');}
		else {console.log('写文件成功');}
	});