var fs = require('fs');
fs.mkdir('stuff', function(){
	fs.readFile('readme.txt','utf8',function(err,data) {
		fs.writeFileSync('stuff/writeme.txt',data);
	});
});
