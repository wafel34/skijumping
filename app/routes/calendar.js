var express = require('express'),
    router = express.Router();


router.get('/calendar', function(req, res){

    // Below i'm getting current date and pare it as well as parse dates of competitions.
    // Parsed dates are then compared in 'view_calendar.ejs' and if current date is bigger than date of certain competition
    // CSS style will be applied to indicate that event already happened.

    var calendar = req.app.get('calendar'),
        today = new Date(),
        today = Date.parse(today),
        dates = calendar.map(function(item){
            var temp = item.date.split('/'),
                date = new Date(temp[2], temp[1], temp[0]);
                date = Date.parse(date);
            var result = {
                "place": item.place,
                "country": item.country,
                "date": item.date,
                "type": item.type,
                dateObj: date
            };
            return result;
        });


    res.render('view_calendar', {
        calendar: dates,
        pageId: 'Calendar',
        today: today
    });
});


module.exports = router;
