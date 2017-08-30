var express = require('express'),
    router = express.Router();


router.get('/calendar', function(req, res){
    var calendar = req.app.get('calendar');

    res.send('<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
                '<title>Whyd Store</title>' +
                '<link rel="stylesheet" type="text/css" href="/css/style.css">' +
            '</head>' +
            '<body>' +
            '<p>Calendar</p>' + calendar[0].place + ", "+calendar[0].country +
            '</body>' +
            '</html>');
});


module.exports = router;
