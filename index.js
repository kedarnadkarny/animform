var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


console.log(__dirname);

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.listen(port);