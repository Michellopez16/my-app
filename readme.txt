

Tutorial deploy angulara on heroku
https://www.youtube.com/watch?v=oppHfa8ZXvE


Tutorial
https://drive.google.com/file/d/1-478i0dpICfBLfBNImGI8ThIiqXwD8cN/view




npm install express -save

server.js

const express = require('express');
 const path = require('path'); 
 const app = express(); 
 app.use(express.static(__dirname + '/dist/<app-name>'));
  app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'/dist/<app-name>/index.html'));});
   app.listen(process.env.PORT || 8080);


