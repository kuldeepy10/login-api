var express = require('express');
var UserAPI = require('./api/user');
var app = express();
app.use(express.json());
app.use('/userapi',UserAPI);
app.listen(8000, ()=>{console.log('Backend Running')});






