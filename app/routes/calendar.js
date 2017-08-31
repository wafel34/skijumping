var express = require('express'),
    router = express.Router();


router.get('/calendar', function(req, res){
    var calendar = req.app.get('calendar');

    res.render('view_calendar', {
        calendar: calendar,
        pageId: 'Calendar'
    });
});


module.exports = router;
