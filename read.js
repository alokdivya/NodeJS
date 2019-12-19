var fs = require('fs');
fs.mkdir('stuff', function(){
	fs.readFile('readme.txt','utf8',function(err,data) {
		fs.writeFileSync('stuff/writeme.txt',data);
	});
});
----------------------------------------------------------//----------------------------------------------------------------
//Make a text file naming readme.txt
//Run the code using node read.js
//It will create  directory named stuff which will contain a text file writeme.js in which all the content of readme.js will be written
