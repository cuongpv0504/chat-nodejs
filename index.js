    var app = require('express')();
    //same as below
    // var express = require('express')
    // var app = express()

    var http = require('http').Server(app);
    //same as below
    // var some-http = require("http")
    // var http = some-http.createServer(app)
    // app = 1 function
    // http.createServer === http.Server
    var io = require('socket.io')(http);
    var path = require('path');

    // Khởi tạo server
    app.get('/', function(req, res){
      var express=require('express');
      // nhat thiet phai co khai bao express o day
      app.use(express.static(path.join(__dirname)));
      //__dirname === duong dan den thu muc dang chay cua nodejs
      //khong nhat thiet phai co path.join
      res.sendFile(path.join(__dirname, '../httptest', 'index.html'));
      // khong nhat thiet can '../httptest' khi joinpath (thua`)
    });

    // Đăng ký các sự kiện của socket
    io.on('connection', function(socket){
      socket.on('chatMessage', function(from, msg){
        io.emit('chatMessage', from, msg);
      });
      socket.on('notifyUser', function(user){
        io.emit('notifyUser', user);
      });
    });

    // Mở cổng lắng nghe của socket là 3000
    http.listen(3000, function(){
      console.log('listening on *:3000');
    });