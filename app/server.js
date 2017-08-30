var express = require('express'),
    app = express(),
    calendar = require('./data/calendar.json');


app.use(express.static('app/public'));

app.get('/', function(req, res){
    res.send('<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
                '<title>Whyd Store</title>' +
                '<link rel="stylesheet" type="text/css" href="/css/style.css">' +
            '</head>' +
            '<body>' +
            '<p>Hello World!!</p>' + calendar[0].place + ", "+calendar[0].country +
            '</body>' +
            '</html>');
});

app.listen(5000);
console.log('Express listening on port 5000');
