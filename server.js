var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request,response){
   //bien response chua cac thu tuc, ham tra ve cho client
   //request chua cac thu tuc, ham, thong tin tu client gui den server
   var client = request.url;
   console.log(client);

   response.write("Good day, sir!");
   response.end(); //phai luon co ham ket thuc response
});

server.listen(8888);
