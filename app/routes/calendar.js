var express = require('express'),
    router = express.Router();


router.get('/calendar', function(req, res){

    // Below i'm getting current date and pare it as well as parse dates of competitions.
    // Parsed dates are then compared in 'view_calendar.ejs' and if current date is bigger than date of certain competition
    // CSS style will be applied to indicate that event already happened.

    var calendar = req.app.get('calendar'),
        today = new Date(),
        dates = calendar.map(function(item){
            //split the date and create new variable that will count miliseconds since 1970 up to date (21 parameter is an evening hour)
            var temp = item.date.split('/'),
                date = new Date(Date.UTC(temp[2], temp[1]-1, temp[0],21,0,0));
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
        today: today,
        pageId: '2017/18 Calendar',
        keywords: 'skijumping calendar, skijumping season 2017/2018, winter olympics 2018, ski jumping, kamil stoch, stafan horngacher, polish ski jumping team',
        description: 'Check the calendar for ski jumping 2017/18 winter season. Plenty of interesting contests including Winter Olympis in PeyongChang, 66th four hills tournament, or Raw-Air competiton.'
    });
});



module.exports = router;
